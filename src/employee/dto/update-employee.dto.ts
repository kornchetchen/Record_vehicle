import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
}


export class EmployeeResponseDto {
    @IsNumber()
    @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @IsString()
  first_name: string;

  @IsString()
  @Length(1, 255)
  last_name: string;

  @IsOptional()
  @IsString()
  @Length(0, 10)
  phone?: string;

  @IsString()
  @IsEnum(['Entry', 'Support', 'Manager', 'Director', 'Vice President', 'CEO'])
  job_title: string;

  @IsString()
  @IsEnum(['Active', 'On Leave', 'Terminated', 'On Probation'])
  status: string;

  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  deleted_by: Date;
}