import { Grade } from "src/grades/entities/grade.entity";
import { Groups } from "src/groups/entities/group.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    surname: string;

    @Column({nullable: true})
    patronymic: string;

    @Column()
    birthday: Date;

    @Column()
    date_admission: Date;

    @ManyToOne(() => Groups, (group) => group.students)
    @JoinColumn({name: 'group_id'})
    group: Groups;

    @OneToMany(() => Grade, (grade) => grade.student)
    grades: Grade[];

    // @Column()
    // is_deleted: Boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;
}
