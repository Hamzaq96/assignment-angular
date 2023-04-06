import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  userID: any;
  userDetails: any;

  constructor(private route: ActivatedRoute, private user: UserService) {
    this.userID = "";
    this.userDetails = {};
  }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get("id");
    this.user.getUserDetails(this.userID).subscribe((user_details) => {
      this.userDetails = user_details;
    });
  }

}
