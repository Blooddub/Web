import { Module } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { DisciplinesController } from './disciplines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discipline } from './entities/discipline.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Discipline])
  ],
  controllers: [DisciplinesController],
  providers: [DisciplinesService],
  exports: [DisciplinesService]
})
export class DisciplinesModule {}
