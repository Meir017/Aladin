import { Component, OnInit } from '@angular/core';
import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { AlaRequestDetails } from "app/ala-request-details";

@Component({
  selector: 'ala-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = "";
  username: string = "";
  myPosts: {requestId: number, requestBody: AlaRequestDetails}[] = [];

  constructor(private service: MainService) {
    this.name = "שגיא"; 
    this.username = "sagy";
    this.myPosts.push({
      requestId: 1,
       requestBody:{
         text: "Cool offer!",
         tags: ["myTag"]
       }
      })
  }

  ngOnInit() {
    // this.service.getMyPosts(this.username)
    //   .subscribe(posts => this.myPosts = posts);
  }

}
