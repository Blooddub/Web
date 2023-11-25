import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsInt } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    @IsInt()
    id: number;
    
    update_at: Date;
}
