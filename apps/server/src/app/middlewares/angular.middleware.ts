import { Injectable, NestMiddleware } from '@nestjs/common';
import { join } from "path";

@Injectable()
export class AngularMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    return res.sendFile(join(__dirname, '..', 'funnel', 'index.html'));
  }
}
