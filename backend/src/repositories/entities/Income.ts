import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
    OneToOne,
} from 'typeorm';
import { Category } from './Category';

@Entity('income')
export class Income {
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
