import { IsInt } from "class-validator";
import { Discipline } from "src/disciplines/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";

export class CreateGradeDto {
    
    @IsInt()
    grade: number;

    student: Student;

    discipline: Discipline;
}
