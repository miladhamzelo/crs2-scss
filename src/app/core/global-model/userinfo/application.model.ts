import { Entitlements } from './entitlements.model';

export interface Application {
	applicationId: string;
	entitlements: Entitlements;
}
