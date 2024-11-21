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
    private  employeeRespository : Repository<Employee>,
    // private readonly salaryService:SalaryService,
    // private readonly vehicleService:VehicleService
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRespository.create(createEmployeeDto);
    return await this.employeeRespository.save(employee);
  }

  async findAll() {
    return await this.employeeRespository.find();
    // const employee = await this.employeeRespository.find();
    // return employee;
   
  }

  async findOne(id: string) {
    const employeeInfo = await this.employeeRespository.findOne({
      where:{id},
      relations:['salary','vehicles']
    });
    try {
      if(!employeeInfo) throw new Error('Employee not found');
      return employeeInfo;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    // const employee = await this.findOne(id);
    // return this.employeeRespository.save({...employee,...updateEmployeeDto});
const update_employee = await this.employeeRespository.update({
  id:id.toString(),
}, {
  department_id: updateEmployeeDto.department_id,
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

  async remove(id: number) {
    // const a = await this.findOne(id);
    // this.employeeRespository.remove(a)
    
    // try { const a  = await this.findOne(id)

    //   return { message: 'Employee successfully deleted' };
    // } catch (error) {
    //   if (error.message === 'Employee not found') {
    //     throw new BadRequestException(error.message);
    //   } else {
    //     throw new BadRequestException('Something went wrong');
    //   }

    // }
  }
//one to one should has two way to remove
}