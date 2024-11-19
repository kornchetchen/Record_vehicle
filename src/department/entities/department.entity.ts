import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('departments')
export class Department {
  static findByPk(id: number) {
    throw new Error('Method not implemented.');
  }
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

  @OneToMany(() => Department, (employee) => employee.id)
  employees: Employee;
  // constructor(department: Partial<Department>) {
  //   Object.assign(this, department);
  // }
}
