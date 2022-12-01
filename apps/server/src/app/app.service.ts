import { Injectable } from '@nestjs/common';
import { NextPath } from '@funnel/api-interfaces';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getNextPath(currentPath: string): NextPath {
    const nextPath = { url: '', redirect: false};
    switch (currentPath) {
      case '/lead-form':
        nextPath.url = '/hub';
        break;
      case '/hub':
        nextPath.url = 'http://localhost:4300/questionnaire';
        nextPath.redirect = true;
        break;
      case '/questionnaire':
        nextPath.url = 'http://localhost:4200/payment';
        nextPath.redirect = true;
        break;
      default:
        throw new Error(`cannot find next path for ${currentPath}`);
    }

    return nextPath;
  }
}
