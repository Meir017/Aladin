import { Component, OnInit, Input } from '@angular/core';
import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { AlaRequestDetails } from "app/ala-request-details";
import { AlaMyRequest } from "app/ala-my-request";
import { Observable } from "rxjs/Observable";
import { ADUserService } from "app/ad-user.service";
import { ADUser } from "app/ad-user";

@Component({
  selector: 'ala-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userId: number;
  user: ADUser;
  myPosts: AlaRequest[];

  constructor(private service: MainService, private userService: ADUserService) {
  }

  ngOnInit() {
    this.userService.getUserById(this.userId)
    .then((user)=>{
      this.user = user;
      return this.service.getRequestsByUser(user.username)
    })
    .then((posts)=>{
      this.myPosts = posts;
    });
  }

}
