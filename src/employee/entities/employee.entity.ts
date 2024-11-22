import { Salary } from 'src/salary/entities/salary.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  employee_id: string;

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

  @OneToOne(() => Salary)
  @JoinColumn({name:'salary_id'})
  salary: Salary;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true }) 
  deleted_by: string;

  @OneToMany(() => Vehicle, vehicle => vehicle.employee)
  vehicles: Vehicle[];

}
