import { Student } from "src/students/entities/student.entity";
import { University } from "src/universities/entities/university.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Groups {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => University, (university) => university.groups)
    @JoinColumn({name: 'university_id'})
    university: University;

    @OneToMany(() => Student, (student) => student.group)
    students: Student[];

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;
}
