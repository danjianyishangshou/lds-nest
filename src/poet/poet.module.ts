import { Module } from '@nestjs/common';
import { PoetService } from './poet.service';
import { PoetController } from './poet.controller';

@Module({
  controllers: [PoetController],
  providers: [PoetService]
})
export class PoetModule {}
