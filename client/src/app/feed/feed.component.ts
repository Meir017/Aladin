import { Component, OnInit, trigger, transition, style, animate, state, HostBinding, HostListener, ElementRef } from '@angular/core';

import { MainService } from "app/main.service";
import { AlaRequest } from "app/ala-request";
import { Observable } from "rxjs/Observable";
import { CreateRequest } from "app/create-request";
import { ADUserService } from "app/ad-user.service";
import { ADUser } from "app/ad-user";
import { AlaReply } from "app/ala-reply";
import { AlaUser } from "app/ala-user";
import { AlaCreateReply } from "app/ala-create-reply";
import { StoreService } from "app/store.service";

declare var $: any;

@Component({
  selector: 'ala-feed',
  animations: [
    trigger('dialogAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]
      ),
      transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0})),
        ]
      )]
    )
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  loggedInUser:ADUser;
  selectedRequest: AlaRequest;
  requests: AlaRequest[];
  showCreationDialog: boolean;
  
  constructor(private service: MainService, private userService: ADUserService, private store: StoreService, private feedElement: ElementRef) {
    this.showCreationDialog = false;
   }

  ngOnInit() {
    this.userService.getLoggedInUser()
    .then(user=>{
      this.loggedInUser = user;
    });

    this.service.getRequests()
     .then((requests)=>{
       this.requests = requests;
     });
  }

  private clearRequests(){
    for(let index = 0; index < this.requests.length; index++){
      this.requests.pop();
    }
  }

  refreshRequests(){
    this.clearRequests();
    this.service.getRequests()
      .then((reqs)=>{
        reqs.forEach((request)=>this.requests.push(request));
      })
  }

  selectRequest(event, request: AlaRequest){
    $(this.feedElement.nativeElement).find('md-card').removeClass("selected");
    $(event.currentTarget).children('md-card').addClass("selected");

    this.store.selectedRequest = request;
    this.selectedRequest = this.store.selectedRequest;
  }

  // TODO: Support 'suggestions'
  createRequest(text: string, tags?: string[]) {
    let request: CreateRequest = {
      userId: this.loggedInUser.userId,
      requestBody: {text, tags}
    };
    return this.service.createRequest(request);
  }


  addReply(requestId: string, text: string){
     let creteReply: AlaCreateReply = {
          text,
          userId: this.loggedInUser.userId
      };

      this.service.addReply(requestId, creteReply);
  }

  completeRequest(userId){
    let requestId = this.selectedRequest.requestId;
    this.service.completeRequest(requestId, userId);
  }

  openCreationDialog() {
    this.showCreationDialog = true;
  }

  finishDialog() {
    this.showCreationDialog = false;
  }

  closeCreationDialog() {
    this.showCreationDialog = false;
  }

  postCreationData(res){
    this.createRequest(res.help, res.tags)
    .then(()=>{
      this.refreshRequests();
    })
    this.closeCreationDialog();
  }
}
