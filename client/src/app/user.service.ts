import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { User } from "app/user";

@Injectable()
export class UserService {

  constructor() { }

  getUserById(userId: number): Promise<User>{
    return Observable.of({
      userId: 123,
      username: "meir",
      displayName: "מאיר",
      location: "here"
    }).toPromise();
  }
}
