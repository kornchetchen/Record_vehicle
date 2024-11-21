import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsDate } from 'class-validator';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateSalaryDto {
    @IsNotEmpty()
    @IsNumber()
     id: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsEnum(['CNY', 'USD', 'THB', 'BTC'])
  currency: 'CNY' | 'USD' | 'THB' | 'BTC';

  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  
  @IsString()
  deleted_by: string;
}
