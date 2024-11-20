import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity('vehicles')

export class CreateVehicleDto { @PrimaryGeneratedColumn()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    employee_id: number;

    @Column({ type: 'enum', })
    @IsEnum(['Motorbike' ,'Car' , 'Electric car' , 'Bicycle'])
    vehicle_type: string;


    @Column({ type: 'varchar', length: 50 })
    @IsEnum({
        enum: ['Honda', 'Toyota', 'Nissan', 'Yamaha', 'BYD'],})
    model: string;

    @Column({ type: 'varchar', length: 7 })
    registration_number: string; 

    @Column({ type: 'enum'})
    @IsEnum(['Electric', 'Gasoline', 'Diesel'])
    fuel_type: string;

    @Column({ type: 'enum', })
    @IsEnum(['Active','Broken','Repaire'])
    status: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_by: string;}

