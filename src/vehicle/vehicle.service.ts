import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

import { Employee } from 'src/employee/entities/employee.entity';
interface IcreateVehicle {
  vehicle_type: string;
  employee: Employee;
  model: string;
  registration_number: string;
  fuel_type: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  deleted_by: string;
}
@Injectable()
export class VehicleService {
  [x: string]: any;
  constructor (
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ){}

  async create(createVehicleDto: CreateVehicleDto) {


    const employee = await this.employeeRepository.findOne({
      where :{employee_id: createVehicleDto.employee_id}});
      console.log(employee)
    // const employee = await this.employeeService.findOne(createVehicleDto.employee_id.toString());
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
      const vehicleInfo:IcreateVehicle = {
      
      vehicle_type: createVehicleDto.vehicle_type,
      employee: employee,
      model: createVehicleDto.model,
      registration_number: createVehicleDto.registration_number,
      fuel_type: createVehicleDto.fuel_type,
      status: createVehicleDto.status,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
      deleted_by: 'chen',
    }


    const vehicle = this.vehicleRepository.create(vehicleInfo);
    return await this.vehicleRepository.save(vehicle);
  }

  async findAll() {
    return await this.vehicleRepository.find();
    // return `This action returns all vehicle`;
  }

  findOne(id: string) {
    const vehicle = this.vehicleRepository.findOne({
      where: {vehicle_id:+id},
      relations:['employee','vehicle']
    });
    if (!vehicle) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    await this.vehicleRepository.update({
      vehicle_id:id,
    }, {
      vehicle_type: updateVehicleDto.vehicle_type,
      model: updateVehicleDto.model,
      registration_number: updateVehicleDto.registration_number,
      status: updateVehicleDto.status
    });
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
