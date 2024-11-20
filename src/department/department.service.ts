import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>

  ) {
    
  }
  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(createDepartmentDto);
    return this.departmentRepository.save(department);
    // return 'This action adds a new department';
    //create x findall
  }

  async findAll() {
    const department = await this.departmentRepository.find();
    return department;
    // return `This action returns all department`;
  }

  async findOne(id: number) {
   try {
    const department = await this.departmentRepository.findOne({where:{id}});
    if(!department) throw new Error('Department not found');
    department.department_name = "test"
    return department;
   } catch (error) {
    throw new BadRequestException(error.message);
   }
    //using parameter using from designed 
    //
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    // const department = await this.findOne(id);
    // return this.findOne
    // const a = await this.departmentRepository.update({id},updateDepartmentDto);
    const update_department = await this.departmentRepository.update({
      id:id

    },{
      department_name: updateDepartmentDto.department_name,
      status:updateDepartmentDto.status,
    })

    if(update_department.affected != 1) {
      return {
        message:"Update failed"
      }
    }
    // department.status = updateDepartmentDto.status;
  return {
    message:"Update successful"
  }
  //affected?
  }

  async remove(id: number) {
    const a = await  this.findOne(id);
    this.departmentRepository.remove(a)
    // return `This action removes a #${id} department`;
    //function should have async await more time to wait another function for can do nextstep

  }
}
