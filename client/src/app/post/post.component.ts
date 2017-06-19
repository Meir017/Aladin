import { Component, OnInit, Input } from '@angular/core';
import { AlaRequest } from "app/ala-request";

@Component({
  selector: 'ala-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() request: AlaRequest;
  
  constructor() { }

  ngOnInit() {
  }

}
