import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ala-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrls: ['./creation-dialog.component.scss']
})
export class CreationDialogComponent implements OnInit {
  @Output() postCreationEvent = new EventEmitter<any>();
  @Output() closeCreationEvent = new EventEmitter<any>();
  postCreationData: any;
  tags: string;

  constructor() { 
    this.reset();
  }

  ngOnInit() {
  }

  
  finishCreationDialog() {
    this.postCreationData.tags = this.tags.split(',');
    this.postCreationEvent.emit(this.postCreationData);
    this.reset();
  }

  closeCreationDialog(){
    this.closeCreationEvent.emit();
  }

  reset(){
    this.postCreationData = {
        help: "",
        suggestion: "",
        tags: []
    }
    this.tags = "";
  }
}
