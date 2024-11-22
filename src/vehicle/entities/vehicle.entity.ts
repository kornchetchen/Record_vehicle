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

  @CreateDateColumn({name:'created_at' , type:'timestamp',nullable: false })
  created_at?: Date;

  @UpdateDateColumn({ name:'updated_at',nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ name:'deleted_at',nullable: true })
  deleted_at: Date;

  @Column({ name:'deleted_by',nullable: true }) 
  deleted_by: string;
  
//create at x update at x delete :defult value ....
//?  ในบางครั้ง สร้าง เรคคอดนี้ ไม่ต้องการcreate update delete  ไม่ควรมี 
// ไม่ควรให้ค่าดังกล่าวมีก่อนมา
// คิดด้วยตัวเอง
}
