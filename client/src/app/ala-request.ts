import { AlaReply } from "app/ala-reply";
import { AlaRequestDetails } from "app/ala-request-details";
import { AlaUser } from "app/ala-user";
import { ADUser } from "app/ad-user";

export class AlaRequest {
    
    user: AlaUser;
    adUser: ADUser;
    requestId: string
    requestBody: AlaRequestDetails;
    suggestions?: AlaRequestDetails[];
    replies?: AlaReply;
    created: Date;
    updated?: Date;

    constructor(){}
}