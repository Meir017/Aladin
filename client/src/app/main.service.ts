import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AlaRequest } from "app/ala-request";
import { Http, RequestOptions } from '@angular/http';
import './rxjs-operators';
import { AlaMyRequest } from "app/ala-my-request";
import { CreateRequest } from "app/create-request";
import { CreateRequestResponse } from "app/create-request-response";

@Injectable()
export class MainService {

  private baseUrl: string = "http://1.1.0.79:3000";
  private requestUrl: string = `${this.baseUrl}/request`;
  private requestUserUrl: string = `${this.baseUrl}/request/user`;

  constructor(private http: Http) { }

  getRequestsByUser(username: string): Promise<AlaRequest[]>{
     let params = new URLSearchParams();
     params.set('userId', username);
      let options = new RequestOptions({
        params
      });

      return this.http.get(`${this.requestUserUrl}/${username}`)
                  .catch(this.handleError)
                  .map(this.extractSearchData).toPromise();
  }

  getRequests(): Promise<AlaRequest[]>{
      return this.http.get(this.requestUrl)
                  .catch(this.handleError)
                  .map(this.extractSearchData).toPromise();
  }

  createRequest(createRequest: CreateRequest): Promise<CreateRequestResponse>{
    return this.http.post(this.requestUrl, createRequest)
                  .catch(this.handleError)
                  .map(this.extractCreateData).toPromise();
  }

  private extractCreateData(res: Response): CreateRequestResponse {
    let body: any = res.json();
    let response: CreateRequestResponse = body;
    
    return response;
  }

  private extractSearchData(res: Response): AlaRequest[]{
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
