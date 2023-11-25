import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column({
        nullable: true,
    })
    name: string;

    @Column()
    password: string;

    @Column({
        default: false
    })
    is_deleted: Boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;
}
