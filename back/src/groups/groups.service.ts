import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Groups } from './entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UniversitiesService } from 'src/universities/universities.service';



@Injectable()
export class GroupsService {
  constructor(
    private readonly universitiesService: UniversitiesService,
    @InjectRepository(Groups) 
    private readonly groupsRepository: Repository<Groups>,
  ) {}
 
  async create(createGroupDto: CreateGroupDto) {
    const isExistUniversity = await this.universitiesService.findOne(createGroupDto.university.id);

    const isExistGroup = await this.groupsRepository.findOne({
      where: {
        name: createGroupDto.name,
        university: {
          id: createGroupDto.university.id 
        }
      }
    })

    if (!isExistUniversity) {
      throw new NotFoundException('This university not found!');
    }
     
    if (isExistGroup) {
      throw new BadRequestException('This group is exist!');
    } 

    const newGroup = {
      name: createGroupDto.name,
      university: {
        id: createGroupDto.university.id,
      },
      update_at: new Date
    };

    return await this.groupsRepository.save(newGroup);
  }

  async findAll() {
    return await this.groupsRepository.find({
      relations: {
        university: true,
      },
      select: {
        id: true,
        name: true,
        university: {
          id: true,
          name: true,
        }
      },
      order: {
        id: "ASC",
      }
    });
  }

  async findOne(id: number) {
    return await this.groupsRepository.findOne({
      relations: {
        university: true,
      },
      select: {
        id: true,
        name: true,
        university: {
          id: true,
          name: true,
      }},
      where: {
        id: id
      }
    });
  }

  async update(updateGroupDto: UpdateGroupDto) {
    const isExistUniversity = await this.universitiesService.findOne(updateGroupDto.university.id);

    const isExistGroup = await this.groupsRepository.findOne({
      where:{
        id: updateGroupDto.id,
      }
    });

    if (!isExistUniversity) {
      throw new NotFoundException('This university not found!');
    }

    if (!isExistGroup){
      throw new NotFoundException (`This action updates a #${updateGroupDto.id} group`);
    }

    return await this.groupsRepository.update(updateGroupDto.id, updateGroupDto);
  }

  async remove(id: number) {
    const isExist = await this.groupsRepository.findOne({
      where:{
        id: id,
      }
    });

    if (!isExist){
      throw new NotFoundException (`This student a #${id} not found`);
    }

    const update_groups = {
      is_deleted: true,
    };

    return await this.groupsRepository.update(id, update_groups);
  }
}
