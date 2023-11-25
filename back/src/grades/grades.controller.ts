import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.gradesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  findOne(@Param('id') id: string) {
    return this.gradesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(+id, updateGradeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  remove(@Param('id') id: string) {
    return this.gradesService.remove(+id);
  }
}
