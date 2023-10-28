import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


// http://localhost:3000/students
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  //Удалить если будет использоваться в промышленных целях // или добавить проверку на группу пользователей
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.studentsService.findAll();
  }

  //http://localhost:3000/students/:id
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

}
