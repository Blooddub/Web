import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('disciplines')
export class DisciplinesController {
  constructor(private readonly disciplinesService: DisciplinesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return this.disciplinesService.create(createDisciplineDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.disciplinesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  findOne(@Param('id') id: string) {
    return this.disciplinesService.findOne(+id);
  }

  // @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  // @UsePipes(new ValidationPipe)
  // update(@Param('id') id: string, @Body() updateDisciplineDto: UpdateDisciplineDto) {
  //   return this.disciplinesService.update(+id, updateDisciplineDto);
  // }

  // @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  // @UsePipes(new ValidationPipe)
  // remove(@Param('id') id: string) {
  //   return this.disciplinesService.remove(+id);
  // }
}
