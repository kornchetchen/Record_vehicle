import { Timestamp } from 'typeorm';

export class CreateDepartmentDto {
  department_name: string;
  department_code: string;
  status: string;
  location?: string;
  created_at: Timestamp;
  updateed_at: Timestamp;
  deleted_at: Timestamp;
  deleted_by: string;
}
