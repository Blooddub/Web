import { IsInt, IsString } from "class-validator";

export class CreateGroupDto {
    @IsString()
    name: string;

    @IsInt()
    university: number;
}
