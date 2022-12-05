import { Injectable } from '@nestjs/common';
import { NextPath } from '@funnel/api-interfaces';

const isDev = process.env['NODE' + '_ENV'] === 'development';
console.log('NODE_ENV is:', process.env['NODE' + '_ENV']);
console.log('isDev', isDev);

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getNextPath(currentPath: string, referer: string): NextPath {
    const nextPath = { url: '', redirect: false}
    const path = currentPath.replace(/\/+$/, '');
    switch (path) {
      case '/lead-form':
        nextPath.url = '/hub';
        break;
      case '/hub':
        nextPath.url = `${isDev ? 'http://localhost:4300': referer}/questionnaire`;
        nextPath.redirect = true;
        break;
      case '/questionnaire':
        nextPath.url = `${isDev ? 'http://localhost:4200': referer}/quote`;
        nextPath.redirect = true;
        break;
      default:
        throw new Error(`cannot find next path for ${currentPath}`);
    }

    return nextPath;
  }
}
