import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findOne(login);
    const passwordIsMatch = await argon2.verify(user.password, password)

    if (user && passwordIsMatch) {
      return user
    }
   
    throw new UnauthorizedException('Проверьте правильность логина и пароля');
  }


  async login(user: IUser) {
    const payload = { login: user.login, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
