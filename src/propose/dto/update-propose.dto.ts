import { PartialType } from '@nestjs/swagger';
import { CreateProposeDto } from './create-propose.dto';

export class UpdateProposeDto extends PartialType(CreateProposeDto) {}
