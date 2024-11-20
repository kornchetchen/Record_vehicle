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

  @CreateDateColumn()
  created_at: Date;

  @IsOptional()
  @UpdateDateColumn()
  updated_at: Date;
  
  @IsOptional()
  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
  
  @IsOptional()
  @IsString()
  deleted_by?: string;
}
