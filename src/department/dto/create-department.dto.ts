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
  department_code: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsOptional()
  location?: string;

  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  deleted_by: string;
}
