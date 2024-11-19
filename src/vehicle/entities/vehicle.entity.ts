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
} from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.vehicles)
  @JoinColumn({ name: 'employee_id' })
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

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_by: Date;
}
