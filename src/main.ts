import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `${__dirname}/../${env}.env` });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
