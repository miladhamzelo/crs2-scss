import { MbUserInformation } from "./mb.user.information.model";
import { DealerAssociations } from "./dealer.associations.model";
import { Applications } from "./applications.mode";

export interface UserProfile {
	mbUserInformation: MbUserInformation;
	applications: Applications;
	dealerAssociations: DealerAssociations;
}
