import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryService } from 'src/salary/salary.service';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class VehicleService {
  constructor (
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ){}

  async create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    return await this.vehicleRepository.save(vehicle);
  }

  findAll() {
    return `This action returns all vehicle`;
  }

  findOne(id: number) {
    const vehicle = this.vehicleRepository.findOne({
      where: {id:+id},
      relations:['employee','vehicle']
    });
    if (!vehicle) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    await this.vehicleRepository.update({
      id:id,
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
