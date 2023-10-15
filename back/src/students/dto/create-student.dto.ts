import { IsBoolean, IsDateString, IsInt, IsString } from "class-validator";
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

    // @IsBoolean()
    // is_delete: Boolean;

    group: Groups;
}
