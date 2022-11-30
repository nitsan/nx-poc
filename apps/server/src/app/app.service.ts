import { Injectable } from '@nestjs/common';
import { NextPath } from '@funnel/api-interfaces';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getNextPath(currentPath: string): NextPath {
    let nextPath: string;
    switch (currentPath) {
      case '/lead-form':
        nextPath = 'hub';
        break;
      default:
        nextPath = '';
    }

    return { nextPath };
  }
}
