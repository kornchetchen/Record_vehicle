import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports:[TypeOrmModule.forFeature([Employee,VehicleModule])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports:[EmployeeService]
})
export class EmployeeModule {}

