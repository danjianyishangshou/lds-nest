import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

/**
 * 启动NestJS应用并监听3000端口
 */
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // 接口版本化管理
  app.enableVersioning({
    prefix: '/api',
    defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    // defaultVersion: '1',
    type: VersioningType.URI,
  });

  await app.listen(3000);
}

bootstrap();
