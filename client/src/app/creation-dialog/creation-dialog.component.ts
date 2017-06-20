import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ala-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrls: ['./creation-dialog.component.scss']
})
export class CreationDialogComponent implements OnInit {
  @Output() postCreationData: Object;

  constructor() { }

  ngOnInit() {
  }
  
  closeCreationDialog() {
    
  }

  
  finishCreationDialog() {
    this.postCreationData = {
        help: "",
        suggestion: "",
        tags: []
    }
  }
}
