import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category';

@Entity('outcome')
export class Outcome {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    value: number;

    @OneToOne(() => Category, (category) => category.id)
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
