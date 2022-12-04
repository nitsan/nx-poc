import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NextPath } from "@funnel/api-interfaces";
import { map } from "rxjs";

@Injectable()
export class UtilsService {

  constructor(private http: HttpClient, private router: Router) { }

  getNextPath(): void {
    const currentPath = this.router.url;
    this.http
      .post<NextPath>('api/next', { currentPath })
      .pipe(
        map(({redirect, url}: NextPath) => {
          if (redirect){
            document.location.href = url;
          } else {
            this.router.navigate([`/${url}`]);
          }
        })
      )
      .subscribe();
  }
}
