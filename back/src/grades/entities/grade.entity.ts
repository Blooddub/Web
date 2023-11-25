import { Discipline } from "src/disciplines/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Grade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    grade: number;

    @ManyToOne(() => Student, (student) => student.grades)
    @JoinColumn({name: 'student_id'})
    student: Student;

    @ManyToOne(() => Discipline, (discipline) => discipline.grades)
    @JoinColumn({name: 'discipline_id'})
    discipline: Discipline;

    @Column({
        default: false
    })
    is_deleted: Boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;

}
