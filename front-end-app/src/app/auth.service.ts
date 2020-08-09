import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/reg', user, {headers: headers}).pipe(map((response: any) => response.json()));
  }

  authUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/account/auth', user, {headers: headers}).pipe(map((response: any) => response.json()));
  }

  storeUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

}
