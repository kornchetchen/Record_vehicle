import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  department_name: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  department_code: string;

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'varchar', length: 100, nullable: false })
  updated_by: string;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  deleted_by: string;
}
