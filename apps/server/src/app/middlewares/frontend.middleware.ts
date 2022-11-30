import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response): void {
    return res.render('index');
  }
}
