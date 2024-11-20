import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryService } from 'src/salary/salary.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private  employeeRespository : Repository<Employee>,
    private  readonly salaryService: SalaryService,

  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeRespository.create(createEmployeeDto);

    const salary = await this.salaryService.create({
      id:2,
      amount:40000,
      currency: 'THB',
      created_at: new Date(),
      updated_at:null,
      deleted_at:null

    })
    // salary vahical

    if(!salary) throw new BadRequestException('salary not found')

      console.log(
        {salary}
      );
      

    employee.salary = salary
    //how to use equre for one to many situation  next station
    return await this.employeeRespository.save(employee);
    
  }

  async findAll() {
    return await this.employeeRespository.find();
    // const employee = await this.employeeRespository.find();
    // return employee;
   
  }

  async findOne(id: number) {
    const employeeInfo = await this.employeeRespository.findOne({
      where:{id: +id},
      relations:['salary']
    });
    // try {
    //   const employee = await this.employeeRespository.findOne({where:{id}});
    //   if(!employee) throw new Error('Employee not found');
    //   return employee;
    // } catch (error) {
    //   throw new BadRequestException(error.message);
    // }
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