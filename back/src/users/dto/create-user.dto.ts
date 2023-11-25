import { IsInt, IsString, MinLength, ValidateIf } from "class-validator";

export class CreateUserDto {

    @IsString()
    login: string;

    @MinLength(8, {message: 'Не коректный пароль'})
    password: string;

    @IsString()
    @ValidateIf((object, value) => value !== null)
    name?: string;
}
