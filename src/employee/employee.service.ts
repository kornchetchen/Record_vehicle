import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private  employeeRespository : Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRespository.create(createEmployeeDto);
    return this.employeeRespository.save(employee);
    
  }

  async findAll() {
   
  }

  async findOne(id: number) {
    try {
      const employee = await this.employeeRespository.findOne({where:{id}});
      if(!employee) throw new Error('Employee not found');
      return employee;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    // const employee = await this.findOne(id);
    // return this.employeeRespository.save({...employee,...updateEmployeeDto});
    const update_employee = await this.employeeRespository.update({
      id:id,
     
    }, {
      department_id:updateEmployeeDto.department_id,
      first_name: updateEmployeeDto.first_name,
      last_name: updateEmployeeDto.last_name,
      phone: updateEmployeeDto.phone,
      status: updateEmployeeDto.status,
    })
    if(update_employee.affected != 1) {
      return {
        message: 'Update failed'  
    }
  
  }
    return { message: 'Update successful :)'
    
  }
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
