import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsString()
    login: string;
    
    @MinLength(8, {message: 'Не коректный пароль'})
    password: string;
}
