import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class MaintananceInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
              if (error.status === 503) {  // Status 503 is typically used for maintenance mode.
                  this.router.navigate(['/maintenance']);
              }
              return throwError(error);
          })
      );
  }
}
