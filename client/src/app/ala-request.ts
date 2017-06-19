import { AlaReply } from "app/ala-reply";
import { AlaRequestDetails } from "app/ala-request-details";

export class AlaRequest {
    
    userId: number;
    requestId: number
    requestBody: AlaRequestDetails;
    suggestions: AlaRequestDetails[];
    replies: AlaReply

    constructor(){}

}