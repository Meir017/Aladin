import { Component, OnInit } from '@angular/core';
import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'ala-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts:AlaRequest[];
  
  constructor(private service: MainService) { }

  ngOnInit() {
     this.service.getPosts()
     .then((posts)=>{
       this.posts = posts;
     })
  }

}
