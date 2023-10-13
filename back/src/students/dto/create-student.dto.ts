import { IsDateString, IsInt, IsString } from "class-validator";

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

    @IsInt()
    group: number;
}
