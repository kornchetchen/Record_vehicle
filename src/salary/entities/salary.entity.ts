import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('salary')
export class Salary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  employee_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 10 })
  currency: string; // 'CNY', 'USD', 'THB', 'BTC' or any valid currency code

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  deleted_by: string;
}
