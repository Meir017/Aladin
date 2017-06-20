import { Component, OnInit, Input } from '@angular/core';
import { AlaPost } from "app/ala-post";
import { Router } from "@angular/router";

@Component({
  selector: 'ala-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: AlaPost;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToProfile(userId: string){
    this.router.navigate(['/profile', this.post.user.id]);
  }
}
