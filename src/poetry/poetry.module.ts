import { Module } from '@nestjs/common';
import { PoetryService } from './poetry.service';
import { PoetryController } from './poetry.controller';

@Module({
  controllers: [PoetryController],
  providers: [PoetryService]
})
export class PoetryModule {}
