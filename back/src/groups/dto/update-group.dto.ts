import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
