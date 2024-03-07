import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PoetService } from './poet.service';
import { CreatePoetDto } from './dto/create-poet.dto';
import { UpdatePoetDto } from './dto/update-poet.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('poet')
@ApiTags('诗人')
export class PoetController {
  constructor(private readonly poetService: PoetService) {}

  @Post()
  create(@Body() createPoetDto: CreatePoetDto) {
    return this.poetService.create(createPoetDto);
  }

  @Get()
  findAll() {
    return this.poetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoetDto: UpdatePoetDto) {
    return this.poetService.update(+id, updatePoetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poetService.remove(+id);
  }
}
