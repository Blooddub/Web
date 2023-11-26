import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UniversitiesService } from 'src/universities/universities.service';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService) {}

  // POST /groups
  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  // GET /groups
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.groupsService.findAll();
  }

  // GET /groups/:id
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  findOne(@Param('id') id: number) {
    return this.groupsService.findOne(id);
  }

  // PATCH /groups/update
  @Patch("update")
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  update(@Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(updateGroupDto);
  }

  // DELETE /groups/:id
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  remove(@Param('id') id: number) {
    return this.groupsService.remove(id);
  }
}
