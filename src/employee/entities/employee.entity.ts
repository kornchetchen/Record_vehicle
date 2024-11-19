import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employee')
export class Employee {
  @PrimaryColumn({ nullable: false })
  id: number;

  @Column(null)
  department_id: number;

  @Column()
  first_name: string;

  @Column({ type: 'varchar', length: 255 })
  last_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  phone: string;

  @Column({
    type: 'enum',
    enum: ['Entry', 'Support', 'Manager', 'Director', 'Vice President', 'CEO'],
  })
  job_title: string;

  @Column({
    type: 'enum',
    enum: ['Active', 'On Leave', 'Terminated', 'On Probation'],
  })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_by: Date;
    vehicles: any;
}
