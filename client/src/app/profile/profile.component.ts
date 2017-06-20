import { Component, OnInit, Input } from '@angular/core';
import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { AlaRequestDetails } from "app/ala-request-details";
import { AlaMyRequest } from "app/ala-my-request";
import { Observable } from "rxjs/Observable";
import { ADUserService } from "app/ad-user.service";
import { ADUser } from "app/ad-user";
import { AlaPost } from "app/ala-post";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'ala-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId: string;
  user: ADUser;
  myPosts: AlaPost[];

  constructor(private service: MainService,
             private userService: ADUserService,
             private router:Router,
            private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.first().toPromise()
    .then((params: Params) => {
      this.userId = params.userId;
      return this.userService.getUserById(params.userId)
    })
    .then((user: ADUser)=>{
      this.user = user;
      return this.service.getRequestsByUser(user.username)
    })
    .then((requests: AlaRequest[])=>{
      this.myPosts = requests.map((post: AlaRequest)=>{
        let alaPost: AlaPost = {user: post.user, created: post.created, requestBody: post.requestBody, viewOnly: true};
        return alaPost;
      });
    });
  }

}
