import { IsInt } from "class-validator";

export class CreateGradeDto {
    @IsInt()
    grade: number;

    @IsInt()
    student: number;

    @IsInt()
    discipline: number;
}
