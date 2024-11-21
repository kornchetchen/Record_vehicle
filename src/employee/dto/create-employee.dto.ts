import { IsEnum, IsNotEmpty, isNumber, IsNumber, IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateEmployeeDto {

  @IsNumber()
  employeeId: number;

  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  last_name: string;

  @IsOptional()
  @IsString()
  @Length(0, 10)
  phone?: string;

  @IsNotEmpty()
  @IsEnum(['Entry', 'Support', 'Manager', 'Director', 'Vice President', 'CEO'])
  job_title: string;

  @IsNotEmpty()
  @IsEnum(['Active', 'On Leave', 'Terminated', 'On Probation'])
  status: string;

  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  deleted_by: string;
}