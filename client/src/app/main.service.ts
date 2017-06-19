import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AlaRequest } from "app/ala-request";
import {Http} from '@angular/http';
import './rxjs-operators';
import { AlaMyRequest } from "app/ala-my-request";

@Injectable()
export class MainService {

  private requestUrl = '/request';

  constructor(private http: Http) { }

  getMyPosts(username: string): Observable<AlaRequest[]>{
      let searchQuery = {
        query:{
          userId: username
        }
      };

      return this.http.get(this.requestUrl, searchQuery)
                  .catch(this.handleError)
                  .map(this.extractData);
  }

  getPosts(): Observable<AlaRequest[]>{
      let searchQuery = {
        query: { },
        "$orderby": {
          date: -1
        }
      };

      return this.http.get(this.requestUrl, searchQuery)
                  .catch(this.handleError)
                  .map(this.extractData);
  }

  private extractData(res: Response): AlaRequest[]{
    let body: any = res.json();
    let requests: AlaRequest[] = body.data;
    
    return requests;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
