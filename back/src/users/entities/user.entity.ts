import { Student } from "src/students/entities/student.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    // @OneToOne(() => Student)
    // @JoinColumn()
    // student: Student;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;
}
