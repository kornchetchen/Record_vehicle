import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaryDto } from './create-salary.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSalaryDto extends PartialType(CreateSalaryDto) {}

export class SalaryResponseDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    employee_id: number;
    
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    currency: string;


    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    deleted_by: string;
}