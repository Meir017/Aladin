import { Injectable } from '@angular/core';
import { AlaRequest } from "app/ala-request";

@Injectable()
export class StoreService {

  selectedRequest: AlaRequest;
  
  constructor() { }

}
