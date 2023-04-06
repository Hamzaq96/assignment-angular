import { Component, Directive, Injectable, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: Array<any>;

  constructor(private router: Router, private user: UserService){
    this.users = new Array<any>();
  }

  ngOnInit() {
    this.user.getUser().subscribe((user) => {
      this.users = user;
    });
  }

  getUserDetails(id: number) {
    this.router.navigate(["/user-data", id]);
  }
}
