import { Component, OnInit, Input } from '@angular/core';
import { AlaPost } from "app/ala-post";
import { Router } from "@angular/router";
import { ColorsService } from "app/colors.service";

@Component({
  selector: 'ala-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: AlaPost;

  clicked: boolean;
  
  constructor(private router: Router, private color: ColorsService) {}

  ngOnInit() {
    
  }

  navToProfile(userId: string){
    this.router.navigate(['/profile', this.post.user.id]);
  }
  
  // var GeneratedColors = {};

  generateColor(tag: string) {
    return this.color.generateColor(tag);
  }
  
}
