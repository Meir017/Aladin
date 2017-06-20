import { AlaReply } from "app/ala-reply";
import { AlaRequestDetails } from "app/ala-request-details";
import { AlaUser } from "app/ala-user";
import { AlaPost } from "app/ala-post";

export class AlaRequest extends AlaPost {
    
    
    requestId: string
    suggestions?: AlaRequestDetails[];
    replies?: AlaReply;
    updated?: Date;

    constructor() {
        super();
    }
}