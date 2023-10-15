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

  async create(createStudentDto: CreateStudentDto) {
    const new_student = {
      first_name: createStudentDto.first_name,
      surname: createStudentDto.surname,
      patronymic: createStudentDto.patronymic,
      birthday: createStudentDto.birthday,
      date_admission: createStudentDto.date_admission,
      group: createStudentDto.group,
    };
    return await this.studentsRepository.save(new_student);
  }

  async findAll() {
    const studentsList = await this.studentsRepository.find({
      relations: {
        group: true,
      },
      select: {
        id: true,
        first_name: true,
        surname: true,
        patronymic: true,
        birthday: true,
        date_admission: true,
        group:{
          id: true,
          name: true,
        },
        update_at: true,
        created_at: true,
      },
  })
  return studentsList
  }

  async findOne(id: number) {
    const find_student = await this.studentsRepository.find({
      relations: {
        group: true,
      },
      where: {
        id: id,
      },
      select: {
        id: true,
        first_name: true,
        surname: true,
        patronymic: true,
        birthday: true,
        date_admission: true,
        group:  {
          id: true,
          name: true,
        },
        update_at: true,
        created_at: true,
      },
  })
    return find_student
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const timber = await this.studentsRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!timber){
      return `This student a #${id} not found`;
    }

    const update_student = {
      first_name: updateStudentDto.first_name,
      surname: updateStudentDto.surname,
      patronymic: updateStudentDto.patronymic,
      birthday: updateStudentDto.birthday,
      date_admission: updateStudentDto.date_admission,
      group: updateStudentDto.group,
    };
    return await this.studentsRepository.update(id, update_student);
  }

  // async remove(id: number) {
  //   const timber = await this.studentsRepository.findOne({
  //     where:{
  //       id: id,
  //     }
  //   });

  //   if (!timber){
  //     return `This student a #${id} not found`;
  //   }
  //   const delete_student = {
  //     is_delete: true,
  //   };
  //   return await this.studentsRepository.update(id, delete_student);
  // }
}
