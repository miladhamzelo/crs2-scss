import { UserProfile } from "./user.profile.model";
import { Response } from "./Response";

export interface UserInfoModel {
	loggedInUserId: string;
	hasAppAccess: boolean;
	hasDPSAccess: boolean;
	premiumUserForDPS: boolean;
	response: Response;
	userProfile: UserProfile;
}
