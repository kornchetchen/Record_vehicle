import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { SalaryModule } from 'src/salary/salary.module';

@Module({
  imports:[TypeOrmModule.forFeature([Employee]),SalaryModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}

