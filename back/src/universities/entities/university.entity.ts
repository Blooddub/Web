import { Groups } from "src/groups/entities/group.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class University {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Groups, (group) => group.university)
    groups: Groups[];

    @Column({
        default: false
    })
    is_deleted: Boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;
}
