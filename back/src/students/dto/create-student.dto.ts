import { IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Groups } from "src/groups/entities/group.entity";

export class CreateStudentDto {
    
    @IsString()
    first_name: string;

    @IsString()
    surname: string;

    @IsString()
    patronymic?: string;

    @IsDateString()
    birthday: Date;

    @IsDateString()
    date_admission: Date;

    @IsNotEmpty()
    group: Groups;
}
