import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AlaRequest } from "app/ala-request";
import { Http, RequestOptions } from '@angular/http';
import './rxjs-operators';
import { AlaMyRequest } from "app/ala-my-request";
import { CreateRequest } from "app/create-request";
import { CreateRequestResponse } from "app/create-request-response";
import { AlaReply } from "app/ala-reply";
import { AlaCreateReply } from "app/ala-create-reply";

@Injectable()
export class MainService {

  private baseUrl: string = "http://52.232.117.146:50012";
  private requestUrl: string = `${this.baseUrl}/request`;
  private requestSearchUrl: string = `${this.requestUrl}/_search`;
  private requestSearchByTagsUrl: string = `${this.requestSearchUrl}/tags`;
  private requestUserUrl: string = `${this.requestUrl}/user`;

  constructor(private http: Http) { }

  getRequestsByUser(username: string): Promise<AlaRequest[]>{
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

  completeRequest(requestId: string, userId: string):Promise<AlaRequest>{
    return this.http.post(`${this.requestUrl}/${requestId}/complete`, {userId})
                  .catch(this.handleError)
                  .map(this.extractAlaRequest).toPromise();
  }

  addReply(requestId: string, createReply: AlaCreateReply):Promise<AlaRequest>{
    return this.http.post(`${this.requestUrl}/${requestId}/reply`, createReply)
                  .catch(this.handleError)
                  .map(this.extractAlaRequest).toPromise();
  }

  private extractAlaRequest(res: Response): AlaRequest {
    let body: any = res.json();
    let response: AlaRequest = body;
    
    return response;
  }

  private extractCreateData(res: Response): CreateRequestResponse {
    let body: any = res.json();
    let response: CreateRequestResponse = body;
    
    return response;
  }

  private extractSearchData(res: Response): AlaRequest[]{
    let body: any = res.json();
    let requests: any = body;
    
    requests.forEach((request)=>{
      request.replies = request.replies.map(reply => {
        reply.requestBody = {text: reply.text, tags: reply.tags};
        delete reply.text;
        delete reply.tags;

        return reply;
      })
    });

    return requests as AlaRequest[];
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
