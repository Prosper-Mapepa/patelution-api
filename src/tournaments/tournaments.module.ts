import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TournamentsService } from './tournaments.service';
import { TournamentsController } from './tournaments.controller';

@Module({
  providers: [PrismaService, TournamentsService],
  controllers: [TournamentsController],
})
export class TournamentsModule {}

