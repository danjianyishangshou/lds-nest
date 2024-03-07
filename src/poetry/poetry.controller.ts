import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoetryService } from './poetry.service';
import { CreatePoetryDto } from './dto/create-poetry.dto';
import { UpdatePoetryDto } from './dto/update-poetry.dto';

@Controller('poetry')
export class PoetryController {
  constructor(private readonly poetryService: PoetryService) {}

  @Post()
  create(@Body() createPoetryDto: CreatePoetryDto) {
    return this.poetryService.create(createPoetryDto);
  }

  @Get()
  findAll() {
    return this.poetryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poetryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoetryDto: UpdatePoetryDto) {
    return this.poetryService.update(+id, updatePoetryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poetryService.remove(+id);
  }
}
