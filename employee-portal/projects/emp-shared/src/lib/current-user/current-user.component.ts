import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'emp-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  name: string;
  title: string;
  department: string;
  time: Date;
  constructor(private userService: UserDetailsService) { }

  ngOnInit() {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    let data = this.userService.getLoggedInUser();
    this.name = data.name;
    this.title = data.title;
    this.department = data.department;
    this.time = new Date();
  }
}
