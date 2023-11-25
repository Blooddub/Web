import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUniversityDto {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

}
