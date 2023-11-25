import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groups } from './entities/group.entity';
import { UniversitiesModule } from 'src/universities/universities.module';



@Module({
  imports:[
    UniversitiesModule,
    TypeOrmModule.forFeature([Groups]),  
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService]
})
export class GroupsModule {}
