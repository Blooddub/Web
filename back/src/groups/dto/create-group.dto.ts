import { IsNotEmpty, IsString } from "class-validator";
import { University } from "src/universities/entities/university.entity";

export class CreateGroupDto {
  
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    university: University;

} 
