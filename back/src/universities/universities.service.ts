import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './entities/university.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UniversitiesService {
  constructor(
    @InjectRepository(University) 
    private readonly universitysRepository: Repository<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto) {
    const IsExist = await this.universitysRepository.findOne({
      where: {
        name: createUniversityDto.name,
      }
    })

    if(IsExist) { 
      throw new BadRequestException('Bad request exception')
    }
    
    return await this.universitysRepository.save(createUniversityDto);
  }

  async findAll() {
    return await this.universitysRepository.find({
      select: {
        id: true,
        name: true,
      },
      order: {
        id: "ASC",
      },
      where:{
        is_deleted: false,
      }
    });
  }

  async findOne(id: number) {
    const IsExist = await this.universitysRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!IsExist){
      throw new NotFoundException (`This univetsity not found`);
    };

    return  await this.universitysRepository.find({
      select: {
        id: true,
        name: true,
      },
      where: {
        id: id
      }
    });
  }

  async update(updateUniversityDto: UpdateUniversityDto) {
    const IsExist = await this.universitysRepository.findOne({
      where:{
        id: updateUniversityDto.id,
      }
    });

    if (!IsExist){
      throw new NotFoundException (`This univetsity not found`);
    };

    const update_univetsity = {
      name: updateUniversityDto.name,
      update_at: new Date()
    };

    try {
      await this.universitysRepository.update(updateUniversityDto.id, update_univetsity);
    }catch (error) {
      throw new InternalServerErrorException (`This univetsity not found`);
    }
    
    return await this.universitysRepository.findOne({
      where:{
        id: updateUniversityDto.id,
      }
    });

  }

  async remove(id: number) {
    const IsExist = await this.universitysRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!IsExist){
      throw new NotFoundException(`This action removes a #${id} university`);
    }

    const delete_univetsity = {
      is_deleted: true,
    };
    return await this.universitysRepository.update(id, delete_univetsity);
  }
}
