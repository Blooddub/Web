import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}


  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login,
      }
    })
    if(existUser) throw new BadRequestException('Пользователь уже зарегистрирован')

    const newUser = await this.userRepository.save({
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password),
    });

    const acess_token = this.jwtService.sign({login: createUserDto.login})
    
    return {newUser, acess_token}
  }

  async findOne(login: string){
    return await this.userRepository.findOne(
    { 
      where: {
        login: login,
      },
    })
  }

}
