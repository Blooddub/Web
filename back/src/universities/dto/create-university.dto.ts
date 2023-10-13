import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateUniversityDto {

    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsDateString()
    update_at: Date;

    @IsDateString()
    created_at: Date;
}
