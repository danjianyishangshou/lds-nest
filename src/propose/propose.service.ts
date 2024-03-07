import { Injectable } from '@nestjs/common';
import { CreateProposeDto } from './dto/create-propose.dto';
import { UpdateProposeDto } from './dto/update-propose.dto';

@Injectable()
export class ProposeService {
  create(createProposeDto: CreateProposeDto) {
    return 'This action adds a new propose';
  }

  findAll() {
    return `This action returns all propose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propose`;
  }

  update(id: number, updateProposeDto: UpdateProposeDto) {
    return `This action updates a #${id} propose`;
  }

  remove(id: number) {
    return `This action removes a #${id} propose`;
  }
}
