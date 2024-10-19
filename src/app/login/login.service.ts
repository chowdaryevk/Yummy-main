import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = '/login';

  constructor(private  readonly http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(this.apiUrl, { email, password })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Login error:', error);
    return throwError(() => new Error('Login failed. Please try again.'));
  }
}
