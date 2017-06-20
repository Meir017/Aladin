import { AlaRequestDetails } from "app/ala-request-details";
import { AlaUser } from "app/ala-user";

export class AlaPost {
    requestBody: AlaRequestDetails;
    created: Date;
    user: AlaUser;
}
