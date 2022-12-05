import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppService } from './app.service';
import { FrontendMiddleware } from './middlewares/frontend.middleware';
import { ApiController } from "./api.controller";
import { AngularMiddleware } from "./middlewares/angular.middleware";

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(FrontendMiddleware)
      .exclude('/(.*).(.*)', '/api/(.*)', '/questionnaire/(.*)')
      .forRoutes({
        path: '/**', // For all routes
        method: RequestMethod.GET,
      });
    consumer
      .apply(AngularMiddleware)
      .forRoutes({path: '/questionnaire', method: RequestMethod.GET });

  }
}
