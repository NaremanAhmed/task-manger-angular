import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:3000/'
  profileUser: any;
  constructor(private http:HttpClient) { }

  signUp(credentials:any){
    return this.http.post(this.url+'users',credentials)
  }

  logIn(credentials:any){
    return this.http.post(this.url+'users/login',credentials)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    return this.http.delete(this.url+'logout')
  }
}
