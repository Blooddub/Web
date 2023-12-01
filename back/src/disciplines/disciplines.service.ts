import { Injectable } from '@nestjs/common';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Discipline } from './entities/discipline.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DisciplinesService {
  constructor (
    @InjectRepository (Discipline) 
    private readonly disciplineRepository: Repository<Discipline>,
    ){ }

  async create(createDisciplineDto: CreateDisciplineDto) {
    const newGroup = {
      name: createDisciplineDto.name
    }
    return await this.disciplineRepository.save(newGroup);
  }

  async findAll() {
    return await this.disciplineRepository.find({
      select: {
        id: true,
        name: true,
      },
      where: {
        is_deleted: false,
      },
      order: {
        id: "ASC",
      }
    });
  } 

  async findOne(id: number) {
    return  await this.disciplineRepository.find({
      select: {
        id: true,
        name: true,
      },
    });
  }

  // update(id: number, updateDisciplineDto: UpdateDisciplineDto) {
  //   return `This action updates a #${id} discipline`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} discipline`;
  // }
}


  
