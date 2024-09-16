"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.texauapiApi = void 0;
class texauapiApi {
    constructor() {
        this.name = 'texauapiApi';
        this.displayName = 'Texau Api API';
        this.documentationUrl = 'https://documenter.getpostman.com/view/5770396/T17DhpSq';
        this.properties = [
            {
                displayName: 'Auth Token',
                name: 'authtoken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
						{
							displayName: 'Organization User ID',
							name: 'orgUserId',
							type: 'string',
							//typeOptions: {  },
							default: '',
					},
					{
						displayName: 'Workspace ID',
						name: 'workspaceId',
						type: 'string',
						//typeOptions: { },
						default: '',
				},
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{"Bearer " + $credentials.authToken}}',
										'X-TexAu-Context': '={{ JSON.stringify({ orgUserId: $credentials.orgUserId, workspaceId: $credentials.workspaceId }) }}',
                },
            },
        };
    }
}
exports.texauapiApi = texauapiApi;
//# sourceMappingURL=texauapiApi.credentials.js.map
