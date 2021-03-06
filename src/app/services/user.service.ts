import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userModels';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getProfile(){
    return this.http.get<Users>(this.url+'profile')
  }

  updateProfile(user:Users){
    return this.http.patch(this.url+'users/profile',user)
  }
}
