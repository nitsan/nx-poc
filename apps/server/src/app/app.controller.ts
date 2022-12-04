import { Body, Controller, Get, Post, Req } from '@nestjs/common';

import { AppService } from './app.service';
import { NextPath } from '@funnel/api-interfaces';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('next')
  getNextPath(@Body() body, @Req() req: Request): NextPath {
    // @ts-ignore
    return this.appService.getNextPath(body.currentPath, `${req.protocol}://${req.get('Host')}`);
  }
}
