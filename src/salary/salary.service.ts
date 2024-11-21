import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from './entities/salary.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class SalaryService {
  constructor (
    @InjectRepository(Salary)
    private salaryRepository: Repository<Salary>
  ){}
  async create(createSalaryDto: CreateSalaryDto) {
    const salary = this.salaryRepository.create(createSalaryDto);
    return await this.salaryRepository.save(salary);
  }

  findAll() {
    return `This action returns all salary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salary`;
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto) {
    const update_salary = await this.salaryRepository.update({
      id:id,
    }, {
      amount: updateSalaryDto.amount,
      currency: updateSalaryDto.currency
    })
  
  }

  remove(id: number) {
    return `This action removes a #${id} salary`;
  }
}
