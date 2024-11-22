import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Column, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    employee_id: string;

    @Column({ type: 'enum', })
    @IsEnum(['Motorbike' ,'Car' , 'Electric car' , 'Bicycle'])
    vehicle_type: string;

    @Column({ type: 'varchar', length: 50 })
    @IsEnum({
        enum: ['Honda', 'Toyota', 'Nissan', 'Yamaha', 'BYD'],})
    model: string;

    @Column({ type: 'enum'})
    @IsEnum(['Electric', 'Gasoline', 'Diesel'])
    fuel_type: string;

    @Column({ type: 'enum', })
    @IsEnum(['Active','Broken','Repaire'])
    status: string;

    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    deleted_by: string;
}
