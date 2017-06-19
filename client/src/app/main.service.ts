import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AlaRequest } from "app/ala-request";
import { Http, RequestOptions } from '@angular/http';
import './rxjs-operators';
import { AlaMyRequest } from "app/ala-my-request";
import { CreateRequest } from "app/create-request";

@Injectable()
export class MainService {

  private requestUrl: string = 'http://1.1.0.79:3000/request';
  private requestUserUrl: string = 'http://1.1.0.79:3000/request/user';

  constructor(private http: Http) { }

  getPostsByUser(username: string): Promise<AlaRequest[]>{
     let params = new URLSearchParams();
     params.set('userId', username);
      let options = new RequestOptions({
        params
      });

      return this.http.get(`${this.requestUserUrl}/${username}`)
                  .catch(this.handleError)
                  .map(this.extractData).toPromise();
  }

  getPosts(): Promise<AlaRequest[]>{
      return this.http.get(this.requestUrl)
                  .catch(this.handleError)
                  .map(this.extractData).toPromise();
  }

  // createPost(): void{
  //   // let request: CreateRequest = {

  //   // };

  //   return this.http.post(this.requestUrl, request)
  //                 .catch(this.handleError)
  //                 .map(this.extractData).toPromise();
  // }

  private extractData(res: Response): AlaRequest[]{
    let body: any = res.json();
    let requests: AlaRequest[] = body;
    
    return requests;
  }

  private handleError (error: Response | any) {
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
