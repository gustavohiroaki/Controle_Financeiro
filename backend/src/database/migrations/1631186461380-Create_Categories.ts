import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class CreateCategories1631186461380
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );
        await queryRunner.addColumn(
            'income',
            new TableColumn({
                name: 'category',
                type: 'uuid',
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            'outcome',
            new TableColumn({
                name: 'category',
                type: 'uuid',
                isNullable: true,
            })
        );
        await queryRunner.createForeignKey(
            'income',
            new TableForeignKey({
                name: 'incomeCategory',
                columnNames: ['category'],
                referencedTableName: 'categories',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        );
        await queryRunner.createForeignKey(
            'outcome',
            new TableForeignKey({
                name: 'outcomeCategory',
                columnNames: ['category'],
                referencedTableName: 'categories',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const income = await queryRunner.getTable('income');
        const incomeFK = income?.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('category') !== -1
        );
        incomeFK && (await queryRunner.dropForeignKey('income', incomeFK));

        const outcome = await queryRunner.getTable('outcome');
        const outcomeFK = outcome?.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('category') !== -1
        );
        outcomeFK && (await queryRunner.dropForeignKey('outcome', outcomeFK));

        await queryRunner.dropTable('categories');
    }
}
