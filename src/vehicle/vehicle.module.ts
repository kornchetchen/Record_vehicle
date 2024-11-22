import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Vehicle } from './entities/vehicle.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle,Employee])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports:[VehicleService]
})
export class VehicleModule {}