import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  department_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  department_code: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsDateString()
  created_at: Date;

  @IsDateString()
  updated_at: Date;

  @IsDateString()
  deleted_at: Date;

  @IsDateString()
  @IsNotEmpty()
  deleted_by: string;
}
