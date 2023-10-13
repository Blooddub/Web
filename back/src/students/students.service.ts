import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) 
    private readonly studentsRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    
    return 'This action adds a new student';
  }

  async findAll() {
    const studentsList = await this.studentsRepository.find({
      select: {
        id: true,
        first_name: true,
        surname: true,
        patronymic: true,
        birthday: true,
        date_admission: true,
        update_at: true,
        created_at: true,
      },
  })
  return studentsList
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
