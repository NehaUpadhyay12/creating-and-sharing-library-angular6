import { Injectable } from '@angular/core';
import { User } from './User.js';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  getLoggedInUser(): User{
    let user = new User();
    user.name = "Neha Upadhyay";
    user.title = "Developer";
    user.department = "Software";

    return user;
  }
}
