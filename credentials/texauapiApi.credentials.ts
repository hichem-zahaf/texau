import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class texauapiApi implements ICredentialType {
	name = 'texauapiApi';
	displayName = 'Texau Api API';
	documentationUrl = 'https://documenter.getpostman.com/view/5770396/T17DhpSq';
	properties: INodeProperties[] = [
		{
			displayName: 'Auth Token',
			name: 'authtoken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	// Add the authenticate property to automatically add the Authorization header
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.authToken}}',
			},
		},
	};
}
