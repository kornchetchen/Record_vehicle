import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  vehicle_id: number;
  
  @ManyToOne(() => Employee, (employee) => employee.vehicles)
  employee: Employee;

  @Column({ type: 'varchar', length: 50 })
  vehicle_type: string; // 'Motorbike / Car / Electric car / Bicycle'

  @Column({ type: 'varchar', length: 50 })
  model: string; // 'Honda / Toyota / Nissan / Yamaha / BYD'

  @Column({ type: 'varchar', length: 20 })
  registration_number: string; // '7'

  @Column({ type: 'varchar', length: 20 })
  fuel_type: string; // 'Electric / Gasoline / Diesel'

  @Column({ type: 'varchar', length: 20 })
  status: string; // 'Active / Broken / Repair'

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true }) 
  deleted_by: string;
  

}
