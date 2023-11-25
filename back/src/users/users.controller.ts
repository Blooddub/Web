import { Controller, Get, Post, Body, Patch, Param, UsePipes, ValidationPipe, UseGuards, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { error } from 'console';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // @UsePipes(new ValidationPipe())
  // @UseGuards(JwtAuthGuard)
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch("update")
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

}
