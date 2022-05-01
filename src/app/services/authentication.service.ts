import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  showSideNav = false;
  showOnlyIcon = false;
  tokenData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  baseUrl = 'http://localhost:3000';



  constructor(
    private http: HttpClient,
    readonly router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(this.tokenData);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/user/login`, {email: email, password: password}).pipe(
      map((token) => {
        // login successful if there's a jwt token in the response
        if (token && token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
          this.currentUserSubject.next(token);
        }
        return token;
      })
    );
  }

 

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
