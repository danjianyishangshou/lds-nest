import { Module } from '@nestjs/common';
import { ProposeService } from './propose.service';
import { ProposeController } from './propose.controller';

@Module({
  controllers: [ProposeController],
  providers: [ProposeService]
})
export class ProposeModule {}
