import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUniversityDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}
