import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { NextPath } from '@funnel/api-interfaces';

@Injectable()
export class LeadFormService {
  constructor(private http: HttpClient, private router: Router) {}

  getNextPath(): void {
    const currentPath = this.router.url;
    console.log({ currentPath });
    this.http
      .post<NextPath>('api/next', { currentPath })
      .pipe(
        map((res: NextPath) => {
          console.log(res);
          this.router.navigate([`/${res.nextPath}`]);
        })
      )
      .subscribe();
  }
}
