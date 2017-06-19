import { Component, OnInit, Input } from '@angular/core';
import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { AlaRequestDetails } from "app/ala-request-details";
import { AlaMyRequest } from "app/ala-my-request";
import { Observable } from "rxjs/Observable";
import { UserService } from "app/user.service";
import { User } from "app/user";

@Component({
  selector: 'ala-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() userId: number;
  user: User;
  myPosts: AlaRequest[];

  constructor(private service: MainService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserById(this.userId)
    .then((user)=>{
      this.user = user;
      return this.service.getPostsByUser(user.username)
    })
    .then((posts)=>{
      this.myPosts = posts;
    });
  }

}
