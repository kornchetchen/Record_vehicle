import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Finstable',
      database: 'Findstable_db',
      entities: [ 'dist/**/*.entity{.ts,.js}'], //this craete for auto adding entities
      synchronize: true,
    }),
    DepartmentModule,
    EmployeeModule,
    SalaryModule,
    VehicleModule,
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
