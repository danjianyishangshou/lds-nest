import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { getConfig } from './utils/index';
import { TagModule } from './tag/tag.module';
import { PoetryModule } from './poetry/poetry.module';
import { PoetModule } from './poet/poet.module';
import { CollectModule } from './collect/collect.module';
import { CommentModule } from './comment/comment.module';
import { ProposeModule } from './propose/propose.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    UserModule,
    TagModule,
    PoetryModule,
    PoetModule,
    CollectModule,
    CommentModule,
    ProposeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
