import { PartialType } from '@nestjs/mapped-types';
import { CreateUniversityDto } from './create-university.dto';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {

    @IsInt()
    @IsNotEmpty()
    id: number;

}
