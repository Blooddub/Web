import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  @UsePipes(new ValidationPipe)
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universitiesService.create(createUniversityDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.universitiesService.findAll();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe)
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.universitiesService.findOne(+id);
  }

  @Patch("update")
  @UsePipes(new ValidationPipe)
  @UseGuards(JwtAuthGuard)
  update(@Body() updateUniversityDto: UpdateUniversityDto) {
    return this.universitiesService.update(updateUniversityDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  remove(@Param('id') id: number) {
    return this.universitiesService.remove(id);
  }
}
