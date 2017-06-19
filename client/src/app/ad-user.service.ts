import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ADUser } from "app/ad-user";

@Injectable()
export class ADUserService {

  mockUser:ADUser = {
      userId: "123",
      username: "meir",
      displayName: "אלדין",
      location: "here"
    };

  constructor() { }

  getUserById(userId: number): Promise<ADUser>{
    return Promise.resolve(this.mockUser);
  }

  getLoggedInUser(): Promise<ADUser>{
    return Promise.resolve(this.mockUser);
  }
}
