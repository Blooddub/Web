import { IsDateString, IsInt, IsNotEmpty, IsString, ValidateIf } from "class-validator";
import { Groups } from "src/groups/entities/group.entity";

export class CreateStudentDto {
    
    @IsString()
    first_name: string;

    @IsString()
    surname: string;

    @IsString()
    @ValidateIf((object, value) => value !== null)
    patronymic?: string | null;

    @IsDateString()
    birthday: Date;

    @IsDateString()
    date_admission: Date;

    @IsNotEmpty()
    group: Groups;
}
