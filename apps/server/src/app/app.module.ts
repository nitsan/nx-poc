import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendMiddleware } from './middlewares/frontend.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(FrontendMiddleware)
      .exclude('/(.*).(.*)', '/api/(.*)')
      .forRoutes({
        path: '/**', // For all routes
        method: RequestMethod.GET,
      });
  }
}
