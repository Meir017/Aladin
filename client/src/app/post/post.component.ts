import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlaPost } from "app/ala-post";
import { Router } from "@angular/router";
import { ColorsService } from "app/colors.service";
import { ADUserService } from "app/ad-user.service";
import { ADUser } from "app/ad-user";
import { MainService } from "app/main.service";

@Component({
  selector: 'ala-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: AlaPost;
  @Output() completeRequestEvent = new EventEmitter<any>();
  clicked: boolean;
  isCompleted:boolean;
  
  constructor(private router: Router, private color: ColorsService) {}

  ngOnInit() {
  
  }

  navToProfile(userId: string){
    this.router.navigate(['/profile', this.post.user.id]);
  }

  generateColor(tag: string) {
    return this.color.generateColor(tag);
  }
  
  completeRequest(){
    this.completeRequestEvent.emit(this.post.user.id);
    this.isCompleted = true;
  }
}
