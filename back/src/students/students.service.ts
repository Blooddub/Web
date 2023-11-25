import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { GroupsService } from 'src/groups/groups.service';

@Injectable()
export class StudentsService {
  constructor(
    private readonly groupsService: GroupsService,

    @InjectRepository(Student) 
    private readonly studentsRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const isExistGroups = await this.groupsService.findOne(createStudentDto.group.id);

    if (!isExistGroups){
      throw new NotFoundException ('This group not found');
    }

    const new_student = {
      first_name: createStudentDto.first_name,
      surname: createStudentDto.surname,
      patronymic: createStudentDto.patronymic,
      birthday: createStudentDto.birthday,
      date_admission: createStudentDto.date_admission,
      group: {
        id: createStudentDto.group.id
      },
    };

    return await this.studentsRepository.save(new_student);
  }

  async findAll() {
    return await this.studentsRepository.find({
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
      order: {
        id: "ASC",
      },
    })
  }

  async findOne(id: number) {
    const isExist = await this.studentsRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!isExist){
      throw new NotFoundException(`This student a #${id} not found`);
    }

    return  await this.studentsRepository.find({
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
  }

  async update(updateStudentDto: UpdateStudentDto) {
    const isExist = await this.studentsRepository.findOne({
      where:{
        id: updateStudentDto.id,
      }
    });

    if (!isExist){
      throw new NotFoundException(`This student a #${updateStudentDto.id} not found`);
    }

    updateStudentDto.update_at = new Date;

    return await this.studentsRepository.update(updateStudentDto.id, updateStudentDto);
  }


  async remove(id: number) {
    const isExist = await this.studentsRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!isExist){
      throw new NotFoundException(`This student a #${id} not found`);
    }

    const delete_student = {
      is_deleted: true,
    };
    
    return await this.studentsRepository.update(id, delete_student);
  }
}
