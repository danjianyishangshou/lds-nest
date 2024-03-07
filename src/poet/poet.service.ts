import { Injectable } from '@nestjs/common';
import { CreatePoetDto } from './dto/create-poet.dto';
import { UpdatePoetDto } from './dto/update-poet.dto';

@Injectable()
export class PoetService {
  create(createPoetDto: CreatePoetDto) {
    return 'This action adds a new poet';
  }

  findAll() {
    return `This action returns all poet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poet`;
  }

  update(id: number, updatePoetDto: UpdatePoetDto) {
    return `This action updates a #${id} poet`;
  }

  remove(id: number) {
    return `This action removes a #${id} poet`;
  }
}
