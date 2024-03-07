import { Injectable } from '@nestjs/common';
import { CreatePoetryDto } from './dto/create-poetry.dto';
import { UpdatePoetryDto } from './dto/update-poetry.dto';

@Injectable()
export class PoetryService {
  create(createPoetryDto: CreatePoetryDto) {
    return 'This action adds a new poetry';
  }

  findAll() {
    return `This action returns all poetry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poetry`;
  }

  update(id: number, updatePoetryDto: UpdatePoetryDto) {
    return `This action updates a #${id} poetry`;
  }

  remove(id: number) {
    return `This action removes a #${id} poetry`;
  }
}
