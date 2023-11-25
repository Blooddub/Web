import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/type';
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findUser(login);

    if (user && await argon2.verify(user.password, password)) {
      return user
    }

    throw new UnauthorizedException('Проверьте правильность логина и пароля');
  }

  async login(user: IUser) {
    const payload = { login: user.login, id: user.id };

    return {
      login: user.login,
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }

}
