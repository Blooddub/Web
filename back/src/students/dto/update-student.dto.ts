import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsDate, IsInt } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    @IsInt()
    id: number;
    
    @IsDate()
    update_at: Date;
}
