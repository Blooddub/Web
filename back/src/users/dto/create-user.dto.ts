import { IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    login: string;

    @MinLength(8, {message: 'Не коректный пароль'})
    password: string;
}
