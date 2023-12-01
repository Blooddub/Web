import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) 
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const IsExist = await this.userRepository.findOne({
      where: {
        login: createUserDto.login,
      }
    })

    if(IsExist){
      throw new BadRequestException('Пользователь уже зарегистрирован')
    }

    const newUser = await this.userRepository.save({
      login: createUserDto.login,
      name: createUserDto.name,
      password: await argon2.hash(createUserDto.password),
    });

    const access_token = this.jwtService.sign({login: newUser.login, id: newUser.id })
    
    return {login: newUser.login, id:newUser.id, access_token}
  }

  async findUser(login: string){
    return await this.userRepository.findOne(
    { 
      where: {
        login: login,
      }
    })
  }

  async findOne(id: number){
    const IsExist = await this.userRepository.findOne({
      where: {
        id: id,
      }
    })

    if(!IsExist){
      throw new NotFoundException('Пользователь не найден')
    }

    return await this.userRepository.findOne(
    { 
      where: {
        id: id,
      },
      select: {
        id: true,
        login: true,
        name: true,
      },
    })
  }

  async findAll() {
    return await this.userRepository.find({
      select: {
        id: true,
        name: true,
        login: true
      },
      order: {
        id: "ASC",
      },
    });
  }

  async update(updateUserDto: UpdateUserDto) {
    const IsExist = await this.userRepository.findOne({
      where:{
        id: updateUserDto.id,
      }
    });

    if(!IsExist){
      throw new NotFoundException('Пользователь не найден')
    }

    const update_user = {
      id: updateUserDto.id,
      name: updateUserDto.name,
    };

    try {
      await this.userRepository.update(updateUserDto.id, update_user);
    } catch (error) {
      throw new InternalServerErrorException()
    }

    return await this.userRepository.findOne({
      select: {
        id: true,
        name: true,
        login: true
      },
      where:{
        id: updateUserDto.id,
      }
    });;
  }

}
