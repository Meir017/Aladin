import { AlaRequestDetails } from "app/ala-request-details";

export class CreateRequest {
    userId: string;
    requestBody: AlaRequestDetails;
    suggestions?: AlaRequestDetails[];
    
    constructor(){}
}