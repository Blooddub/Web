import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, ParseIntPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // POST /students
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  // GET /students
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.studentsService.findAll();
  }

  // GET /students/:id
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.findOne(id);
  }

  // PATCH /students/update
  @Patch("update")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  async update(@Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(updateStudentDto);
  }

  // DELETED /students/:id
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }

}
