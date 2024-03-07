import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProposeService } from './propose.service';
import { CreateProposeDto } from './dto/create-propose.dto';
import { UpdateProposeDto } from './dto/update-propose.dto';

@Controller('propose')
export class ProposeController {
  constructor(private readonly proposeService: ProposeService) {}

  @Post()
  create(@Body() createProposeDto: CreateProposeDto) {
    return this.proposeService.create(createProposeDto);
  }

  @Get()
  findAll() {
    return this.proposeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proposeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProposeDto: UpdateProposeDto) {
    return this.proposeService.update(+id, updateProposeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proposeService.remove(+id);
  }
}
