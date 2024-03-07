import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .setContact(
      'danjian',
      'http://localhost:3000/swagger-ui#/',
      'danjian@gamil.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/swagger-ui', app, document);
};
