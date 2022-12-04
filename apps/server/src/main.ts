/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { __express } from 'hbs';

import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));
  app.useStaticAssets(join(__dirname, '..', 'shell'));
  app.useStaticAssets(join(__dirname, '..', 'funnel'));
  app.useStaticAssets(join(__dirname, '..', 'lead-form'), {
    prefix: '/lead-form/',
    index: false,
  });
  app.useStaticAssets(join(__dirname, '..', 'hub'), {
    prefix: '/hub/',
    index: false,
  });
  app.useStaticAssets(join(__dirname, '..', 'questionnaire'), {
    prefix: '/questionnaire/',
    index: false
  });
  app.useStaticAssets(join(__dirname, '..', 'quote'), {
    prefix: '/quote/',
    index: false,
  });
  app.setBaseViewsDir([
    join(__dirname, '..', 'shell'),
    join(__dirname, '..', 'funnel'),
  ]);
  app.set('view engine', 'html');
  app.engine('html', __express);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
