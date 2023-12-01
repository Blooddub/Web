import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    
    @IsInt()
    id: number;

    @IsBoolean()
    is_deleted: Boolean;
}
