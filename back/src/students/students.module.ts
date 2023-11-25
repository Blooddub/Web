import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { GroupsModule } from 'src/groups/groups.module';

@Module({
  imports:[
    GroupsModule,
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService]
})
export class StudentsModule {}
