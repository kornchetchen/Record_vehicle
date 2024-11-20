import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Employee } from './employee/entities/employee.entity';
import { Department } from './department/entities/department.entity';
import { Salary } from './salary/entities/salary.entity';
import { Vehicle } from './vehicle/entities/vehicle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Finstable',
      database: 'Findstable_db',
      entities: [ 'dist/**/*.entity{.ts,.js}'], //adding entites Employee, Salary, Vehicle
      synchronize: true,
    }),
    DepartmentModule,
    EmployeeModule,
    SalaryModule,
    VehicleModule, //adding entites
  ], //import moduule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
