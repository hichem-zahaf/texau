"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texau = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Texau {
    constructor() {
        this.description = {
            displayName: 'Texau',
            name: 'texau',
            icon: 'file:texau.svg',
            group: ['actions'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the TexAu API',
            defaults: {
                name: 'Texau',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'texauapiApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://v2-prod-api.texau.com/',
                url: '',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
				// Resources
				{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
						{ name: 'Account Information', value: 'accountInformation' },
						{ name: 'Workspaces', value: 'workspaces' },
						{ name: 'Social Accounts', value: 'socialAccounts' },
						{ name: 'Proxies', value: 'proxies' },
						{ name: 'Platforms', value: 'platforms' },
						{ name: 'Automations', value: 'automations' },
						{ name: 'Workflows', value: 'workflows' },
						{ name: 'Run', value: 'run' },
						{ name: 'Executions', value: 'executions' },
						{ name: 'Notifications', value: 'notifications' },
						{ name: 'Results', value: 'results' },
				],
				default: 'accountInformation',
				description: 'Select API a Reference',
			},
			// Operations for accountInformation
				{
						displayName: 'Operation',
						name: 'operation',
						type: 'options',
						noDataExpression: true,
						displayOptions: {
								show: {
										resource: ['accountInformation'],
								},
						},
						options: [
								{
										name: 'Get All Details',
										value: 'GetAllDetails',
										action: 'Get all details',
										description: 'Get all details.',
								},
						],
						default: 'GetAllDetails',
				},
				// Operations for workspaces
				{
						displayName: 'Operation',
						name: 'operation',
						type: 'options',
						noDataExpression: true,
						displayOptions: {
								show: {
										resource: ['workspaces'],
								},
						},
						options: [
								{
									name: 'Create a New Workspace',
									value: 'CreateNewWorkspace',
									action: 'Create a New Workspace',
									description: 'This action gives you the accessibility create a new workspace in your TexAu account',
								},
								{
									name: 'Change Workspace Name',
									value: 'ChangeWorkspaceName',
									action: 'Create New Workspace',
									description: 'This action gives you the accessibility to change your workspace name',
								},
								{
								name: 'Delete a Workspace',
								value: 'DeleteWorkspace',
								action: 'Delete a Workspace',
								description: 'This action gives you the accessibility of deleting the workspace',
								},
						],
						default: 'CreateNewWorkspace',
				},
				// Operations for socialAccounts
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['socialAccounts'],
						},
					},
					options: [
						{
							name: 'Add a Social Account',
							value: 'AddSocialAccount',
							action: 'Add a Social Account',
							description: 'This API gives you access to adding a social account to your workspace',
						},
						{
							name: 'Get All Social Accounts',
							value: 'GetAllSocialAccounts',
							action: 'Get All Social Accounts',
							description: 'This API will return all social accounts of a workspace',
						},
						{
							name: 'Get Social Account by ID',
							value: 'GetSocialAccountById',
							action: 'Get Social Account by ID',
							description: 'This API will give you social account details by its ID',
						},
						{
							name: 'Update a Social Account',
							value: 'UpdateSocialAccount',
							action: 'Update a Social Account',
							description: 'This API will be used for updating the credential or proxy',
						},
						{
							name: 'Assign Proxy to a Social Account',
							value: 'AssignProxyToSocialAccount',
							action: 'Assign Proxy to a Social Account',
							description: 'This API will assign a proxy to a social account',
						},
						{
							name: 'Remove Proxy from a Social Account',
							value: 'RemoveProxyFromSocialAccount',
							action: 'Remove Proxy from a Social Account',
							description: 'This API will remove the proxy from the social account',
						},
						{
							name: 'Reset Proxy of a Social Account',
							value: 'ResetProxyOfSocialAccount',
							action: 'Reset Proxy of a Social Account',
							description: 'This API will reset only the factory proxy, not the user proxy of a social account',
						},
						{
							name: 'Set Limit',
							value: 'SetLimit',
							action: 'Set Limit for a Social Account',
							description: 'This API will set automation limits for the specific social account',
						},
						{
							name: 'Reset Limit to Default (Delete Limit)',
							value: 'ResetLimitToDefault',
							action: 'Reset Limit to Default (Delete Limit)',
							description: 'This API will reset the automation limit to the default one (delete the limit at the account level)',
						},
						{
							name: 'Delete a Social Account',
							value: 'DeleteSocialAccount',
							action: 'Delete a Social Account',
							description: 'This API will delete a social account',
						},
						{
							name: 'Force Delete a Social Account',
							value: 'ForceDeleteSocialAccount',
							action: 'Force Delete a Social Account',
							description: 'This endpoint is used when a social account is used in a running workflow, and the user wishes to force delete it',
						},
					],
					default: 'AddSocialAccount',
				},
				// Operations for Proxies
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['proxies'],
						},
					},
					options: [
						{
							name: 'Add a Proxy',
							value: 'AddProxy',
							action: 'Add a proxy',
							description: 'Use this action to add a proxy to your account',
						},
						{
							name: 'Buy a Proxy',
							value: 'BuyProxy',
							action: 'Buy a proxy',
							description: 'Use this action to buy a proxy for connected account',
						},
						{
							name: 'Update a Proxy',
							value: 'UpdateProxy',
							action: 'Update a proxy',
							description: 'Use this action to update proxy credentials, in case it gets expired or updated from provider',
						},
						{
							name: 'List All Proxies',
							value: 'ListProxies',
							action: 'List all proxies',
							description: 'This action will be used for listing all proxies of your account by their name',
						},
						{
							name: 'Get Proxy by ID',
							value: 'GetProxyByID',
							action: 'Get proxy by ID',
							description: 'This action will be used to get location and credentials of proxy by ID',
						},
						{
							name: 'Delete Proxy by ID',
							value: 'DeleteProxyByID',
							action: 'Delete proxy by ID',
							description: 'This action will be used to delete proxy from your TexAu account',
						},
					],
					default: 'AddProxy',
				},
				// Operations for platforms
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
							show: {
									resource: ['platforms'],
							},
					},
					options: [
							{
								name: 'Get all platforms',
								value: 'GetAllPlatforms',
								action: 'Get all platforms',
								description: 'This action gives you list of all the platforms supported by TexAu',
							},
							{
								name: 'Get platform by ID',
								value: 'GetPlatformbyID',
								action: 'Get Platform by ID',
								description: 'This action gives you the list of authVariables that will be used in adding a social account',
							},
					],
					default: 'GetAllPlatforms',
				},
				// Operations for Automations
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['automations'],
						},
					},
					options: [
						{
							name: 'Get All Automations',
							value: 'GetAllAutomations',
							action: 'Get All Automations',
							description: 'This API gives you a list of all automations for a specific platform',
						},
						{
							name: 'Get Automation By ID',
							value: 'GetAutomationById',
							action: 'Get Automation By ID',
							description: 'This API will give you a list of inputs and outputs of specific automation',
						},
					],
					default: 'GetAllAutomations',
				},
				// Operations for Workflows
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['workflows'],
						},
					},
					options: [
						{
							name: 'Get All Workflows',
							value: 'GetAllWorkflows',
							action: 'Get All Workflows',
							description: 'This API retrieves a list of all workflows',
						},
						{
							name: 'Get Workflow by ID',
							value: 'GetWorkflowById',
							action: 'Get Workflow by ID',
							description: 'This API returns detailed information for a specific workflow using its workflowId',
						},
						{
							name: 'Get Workflow Nodes by ID',
							value: 'GetWorkflowNodesById',
							action: 'Get Workflow Nodes by ID',
							description: 'This API list of all nodes in the workflow.',
						},
					],
					default: 'GetAllWorkflows',
				},
				// Operations for Run
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['run'],
						},
					},
					options: [
						{
							name: 'Run an Automation',
							value: 'RunAutomation',
							action: 'Run an Automation',
							description: 'This action will run an automation',
						},
						{
							name: 'Run a Workflow',
							value: 'RunWorkflow',
							action: 'Run a Workflow',
							description: 'This action will start a workflow using its workflowId',
						},
						{
							name: 'Get All Required Inputs For A Workflow',
							value: 'GetAllRequiredInputsForWorkflow',
							action: 'Get All Required Inputs For A Workflow',
							description: 'This action returns data for required inputs of a workflow and platformId',
						},
						{
							name: 'Configure and Run Workflow',
							value: 'ConfigureAndRunWorkflow',
							action: 'Configure and Run Workflow',
							description: 'This action will configure workflow inputs, social accounts, and start the workflow',
						},
						{
							name: 'Run Automation with CSV Input',
							value: 'RunAutomationWithCsvInput',
							action: 'Run Automation with CSV Input',
							description: 'This action will upload a CSV file and run automation',
						},
						{
							name: 'Invoke Automation via CSV URL',
							value: 'InvokeAutomationViaCsvUrl',
							action: 'Invoke Automation via CSV URL',
							description: 'This action will invoke automation using a CSV URL',
						},
					],
					default: 'RunAutomation',
				},
				// Operations for Executions
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['executions'],
						},
					},
					options: [
						{
							name: 'Get All Executions',
							value: 'GetAllExecutions',
							action: 'Get All Executions',
							description: 'This action will return all executions for the specified workspace',
						},
						{
							name: 'Get Execution By ID',
							value: 'GetExecutionById',
							action: 'Get Execution By ID',
							description: 'This action will return the status and executionTime of a specific execution',
						},
					],
					default: 'GetAllExecutions',
				},
				// Operations for Notifications
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['notifications'],
						},
					},
					options: [
						{
							name: 'Get All Unread Notifications',
							value: 'GetAllUnreadNotifications',
							action: 'Get All Unread Notifications',
							description: 'This action will retrieve all unread notifications for your TexAu account',
						},
					],
					default: 'GetAllUnreadNotifications',
				},
				// Operations for Results
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					noDataExpression: true,
					displayOptions: {
						show: {
							resource: ['results'],
						},
					},
					options: [
						{
							name: 'Get the Result of an Execution',
							value: 'GetResultOfExecution',
							action: 'Get the Result of an Execution',
							description: 'This action will retrieve the result of any execution using its executionId',
						},
					],
					default: 'GetResultOfExecution',
				},
				// fields
				{
					displayName: 'Workspace Name',
					name: 'workspaceName',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['CreateNewWorkspace','ChangeWorkspaceName'],
						},
					},
					default: '',
					description: 'Name of the workspace',
				},
				{
					displayName: 'Workspace ID',
					name: 'workspaceId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['ChangeWorkspaceName','DeleteWorkspace',],
						},
					},
					default: '',
					description: 'ID of the workspace',
				},
				{
					displayName: 'Org User ID',
					name: 'orgUserId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['CreateNewWorkspace'],
						},
					},
					default: '',
					description: 'Organization user ID',
				},
				{
					displayName: 'Organisation ID',
					name: 'organisationId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['CreateNewWorkspace'],
						},
					},
					default: '',
					description: 'ID of the organization',
				},
				{
					displayName: 'Time Zone',
					name: 'timezone',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['CreateNewWorkspace','RunAutomation','InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'Time zone of the workspace',
				},
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount', 'UpdateSocialAccount','AddProxy','RunAutomation','InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'Name to use in the request',
				},
				{
					displayName: 'Platform',
					name: 'platform',
					type: 'string',
					displayOptions: {
						show: {
							operation: [''],
						},
					},
					default: {},
					description: 'Platform details',
				},
				{
					displayName: 'Latitude',
					name: 'latitude',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount','UpdateSocialAccount'],
						},
					},
					default: '',
					description: 'Latitude coordinate',
				},
				{
					displayName: 'Longitude',
					name: 'longitude',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount','UpdateSocialAccount'],
						},
					},
					default: '',
					description: 'Longitude coordinate',
				},
				{
					displayName: 'Variables',
					name: 'variables',
					type: 'json',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount','UpdateSocialAccount'],
						},
					},
					default: '{}',
					description: 'Additional variables',
				},
				{
					displayName: 'CSRF Token',
					name: 'csrf-token',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'CSRF token for security',
				},
				{
					displayName: 'Start',
					name: 'start',
					type: 'number',
					displayOptions: {
						show: {
							operation: ['GetAllSocialAccounts','ListProxies','GetAllPlatforms','GetAllAutomations','GetAllWorkflows','GetAllExecutions','GetAllUnreadNotifications'],
						},
					},
					default: 0,
					description: 'Start index for pagination',
				},
				{
					displayName: 'Limit',
					name: 'limit',
					type: 'number',
					displayOptions: {
						show: {
							operation: ['GetAllSocialAccounts','SetLimit','ListProxies','GetAllPlatforms','GetAllAutomations','GetAllWorkflows','GetAllExecutions','GetAllUnreadNotifications'],
						},
					},
					default: 10,
					description: 'Limit of results per page',
				},
				{
					displayName: 'Proxy ID',
					name: 'proxyId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['UpdateSocialAccount', 'AssignProxyToSocialAccount','UpdateProxy','GetProxyByID','DeleteProxyByID'],
						},
					},
					default: '',
					description: 'ID of the proxy',
				},
				{
					displayName: 'csv Url',
					name: 'csvUrl',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'Url for csv File ',
				},
				{
					displayName: 'Operation ID',
					name: 'operationId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['SetLimit','ResetLimitToDefault'],
						},
					},
					default: '',
					description: 'ID of the operation',
				},
				{
					displayName: 'Execution Limit',
					name: 'executionLimit',
					type: 'string',
					displayOptions: {
						show: {
							operation: [''],
						},
					},
					default: {},
					description: 'Limit of executions',
				},
				{
					displayName: 'IP',
					name: 'ip',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddProxy','UpdateProxy'],
						},
					},
					default: '',
					description: 'IP address',
				},
				{
					displayName: 'File Data',
					name: 'filename',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['RunAutomationWithCsvInput'],
						},
					},
					default: '',
					description: 'CVS File Binary Data',
				},
				{
					displayName: 'Port',
					name: 'port',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddProxy','UpdateProxy'],
						},
					},
					default: '',
					description: 'Port number',
				},
				{
					displayName: 'Username',
					name: 'username',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddProxy','UpdateProxy'],
						},
					},
					default: '',
					description: 'Username for authentication',
				},
				{
					displayName: 'Password',
					name: 'password',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddProxy','UpdateProxy'],
						},
					},
					default: '',
					description: 'Password for authentication',
				},
				{
					displayName: 'Connected Account ID',
					name: 'connectedAccountId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['BuyProxy','RunAutomation','InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'ID of the connected account',
				},
				{
					displayName: 'query',
					name: 'q',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetAllPlatforms'],
						},
					},
					default: '',
					description: 'Query parameter',
				},
				{
					displayName: 'Type',
					name: 'type',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetAllPlatforms'],
						},
					},
					default: '',
					description: 'Type of the request',
				},
				{
					displayName: 'Platform ID',
					name: 'platformId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetPlatformbyID','GetAllAutomations'],
						},
					},
					default: '',
					description: 'ID of the platform',
				},
				{
					displayName: 'Automation ID',
					name: 'automationId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetAutomationById','RunAutomation','InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'ID of the automation',
				},
				{
					displayName: 'Inputs',
					name: 'inputs',
					type: 'json',
					displayOptions: {
						show: {
							operation: ['RunAutomation','InvokeAutomationViaCsvUrl','ConfigureAndRunWorkflow'],
						},
					},
					default: '{}',
					description: 'Inputs for the request',
				},
				{
					displayName: 'Social Account IDS',
					name: 'socialAccountIds',
					type: 'json',
					displayOptions: {
						show: {
							operation: ['ConfigureAndRunWorkflow'],
						},
					},
					default: '{}',
					description: 'Social Account IDS',
				},
				{
					displayName: 'Description',
					name: 'description',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['RunAutomation','InvokeAutomationViaCsvUrl'],
						},
					},
					default: '',
					description: 'Description of the request',
				},
				{
					displayName: 'Workflow ID',
					name: 'workflowId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetWorkflowById','GetWorkflowNodesById','RunWorkflow','GetAllRequiredInputsForWorkflow', 'ConfigureAndRunWorkflow','GetAllExecutions'],
						},
					},
					default: '',
					description: 'ID of the workflow',
				},
				{
					displayName: 'Execution ID',
					name: 'executionId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetAllExecutions','GetResultOfExecution'],
						},
					},
					default: '',
					description: 'ID of the execution',
				},
				{
					displayName: 'Platform ID',
					name: 'id',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'Id for platform object',
				},
				{
					displayName: 'User ID',
					name: 'userId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'User ID for platform object',
				},
				{
					displayName: 'Picture',
					name: 'picture',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'Picture for platform object',
				},
				{
					displayName: 'Location',
					name: 'location',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'Location for platform object',
				},
				{
					displayName: 'Metadata',
					name: 'metadata',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['AddSocialAccount'],
						},
					},
					default: '',
					description: 'Metadata for platform object',
				},
				{
					displayName: 'Account ID',
					name: 'accountId',
					type: 'string',
					displayOptions: {
						show: {
							operation: ['GetSocialAccountById','UpdateSocialAccount','AssignProxyToSocialAccount','RemoveProxyFromSocialAccount','ResetProxyOfSocialAccount','SetLimit','ResetLimitToDefault','DeleteSocialAccount','ForceDeleteSocialAccount'],
						},
					},
					default: '',
					description: 'Account ID',
				},
				{
					displayName: 'Interval',
					name: 'interval',
					type: 'json',
					displayOptions: {
						show: {
							operation: ['SetLimit'],
						},
					},
					default: '',
					description: 'interval for Execution Limit object',
				},
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('texauapiApi');
		let body;
		let var1;
		let var2;
		let var3;
		let var4;
		let var5;
		let var6;
		let var7;
        for (let i = 0; i < items.length; i++) {
            try {
                const operation = this.getNodeParameter('operation', i);
                let endpoint = '';
                let queryParams = '';
								let orgUserId =  credentials.orgUserId;
								let workspaceid =  credentials.workspaceId;

								let header_context = JSON.stringify({ orgUserId: orgUserId, workspaceId: workspaceid });
                let requestOptions = {
                    headers: {
                        Authorization: `Bearer ${credentials === null || credentials === void 0 ? void 0 : credentials.authtoken}`,
						'X-TexAu-Context': header_context,
                    },
                    method: 'GET',
                };
                switch (operation) {
					// Functions for Account Information
                    case 'GetAllDetails':
                        endpoint = '/api/v1/public/me';
                        break;
					// Functions for Social accounts
                    case 'CreateNewWorkspace':
						var1 = this.getNodeParameter('workspaceName', i);
                        var2 = this.getNodeParameter('orgUserId', i);
                        var3 = this.getNodeParameter('organisationId', i);
                        var4 = this.getNodeParameter('timezone', i);

                        body = {
                            variable: {
                                workspaceName: var1,
                                orgUserId: var2,
                                organisationId: var3,
								timezone: var4,
                            },
                        };
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = '/api/v1/public/workspaces';
                        break;
                    case 'ChangeWorkspaceName':
						var1 = this.getNodeParameter('workspaceId', i);
						var2 = this.getNodeParameter('workspaceName', i);
						body = {
                            variable: {
                                workspaceName: var2,
                            },
                        };
						requestOptions.method = 'PUT';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/workspaces/${var1}`;
                        break;
                    case 'DeleteWorkspace':
						var1 = this.getNodeParameter('workspaceId', i);
						requestOptions.method = 'DELETE';
						endpoint = `/api/v1/public/workspaces/${var1}`;
                        break;
					// Functions for Social accounts
                    case 'AddSocialAccount':
						var1 = this.getNodeParameter('id', i);
						var2 = this.getNodeParameter('userId', i);
						var3 = this.getNodeParameter('picture', i);
						var4 = this.getNodeParameter('location', i);
						var5 = this.getNodeParameter('metadata', i);
						if (var5) {
							try {
								var5 = JSON.parse(var5);
							} catch (error) {
								throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'Invalid JSON string for metadata');
							}
						};
						var6 = {
							id: var1,
							userId: var2,
							picture: var3,
							location: var4,
							metadata: var5,
						}
						var1 = this.getNodeParameter('csrf-token', i);
						var2 = this.getNodeParameter('name', i);
						// not required
						var3 = this.getNodeParameter('latitude', i, '');
						var4 = this.getNodeParameter('longitude', i, '');
						var5 = this.getNodeParameter('variables', i);
						var7 = {
							'csrf-token': var1,
						};
						body = {
							"name": var2,
							"platform": var6,
							"latitude": var3,
							"longitude": var4,
							"variables": var5,
							"credentials": var7,
						  }
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts`;
                        break;
                    case 'GetAllSocialAccounts':
                        var1 = this.getNodeParameter('start', i, 0);
						var2 = this.getNodeParameter('limit', i, 10);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/social-accounts?start=${var1}&limit=${var2}`;
                        break;
                    case 'GetSocialAccountById':
						var1 = this.getNodeParameter('accountId', i);
                        requestOptions.method = 'GET';
						endpoint = `/api/v1/public/social-accounts/${var1}`;
                        break;
                    case 'UpdateSocialAccount':
						var7 = this.getNodeParameter('csrf-token', i,'');
						var1 = {
							'csrf-token': var7,
						};
						var2 = this.getNodeParameter('variables', i);
						var3 = this.getNodeParameter('name', i);
						var4 = this.getNodeParameter('proxyId', i);
						var5 = this.getNodeParameter('latitude', i);
						var6 = this.getNodeParameter('longitude', i);
						var7 = this.getNodeParameter('accountId', i);
						body = {
							"credentials": var1,
							"variables": var2,
							"name": var3,
							"proxyId": var4,
							"latitude": var5,
							"longitude": var6
						}
						requestOptions.method = 'PUT';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var7}`;
                        break;
                    case 'AssignProxyToSocialAccount':
						var1 = this.getNodeParameter('proxyId', i);
						var2 = this.getNodeParameter('accountId', i);
						body = {
							"proxyId": var1,
						  }
                        requestOptions.method = 'PUT';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var2}/proxy`;
                        break;
                    case 'RemoveProxyFromSocialAccount':
                        var1 = this.getNodeParameter('accountId', i);
                        requestOptions.method = 'DELETE';
						endpoint = `/api/v1/public/social-accounts/${var1}/proxy`;
                        break;
                    case 'ResetProxyOfSocialAccount':
                        var1 = this.getNodeParameter('accountId', i);
                        requestOptions.method = 'GET';
						endpoint = `/api/v1/public/social-accounts/${var1}/reset-proxy`;
                        break;
                    case 'SetLimit':
                        var1 = this.getNodeParameter('operationId', i);
						var2 = this.getNodeParameter('limit', i);
						var3 = this.getNodeParameter('interval', i);
						var3 = this.getNodeParameter('accountId', i);
						body = {
							"operationId": var1,
							"executionLimit": [
							  {
								"limit": var2,
								"interval": var3
							  }
							]
						  }
                        requestOptions.method = 'PUT';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var3}/limit`;
                        break;
                    case 'ResetLimitToDefault':
						var1 = this.getNodeParameter('operationId', i);
						var2 = this.getNodeParameter('accountId', i);

						body = {
							"operationId": var1,
						  }
                        requestOptions.method = 'DELETE';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var2}/limit`;
                        break;
					case 'DeleteSocialAccount':
						var1 = this.getNodeParameter('accountId', i);
						body = {
							"":"",
						};
						requestOptions.method = 'DELETE';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var1}`;
						break;
					case 'ForceDeleteSocialAccount':
						var1 = this.getNodeParameter('accountId', i);
						body = {
							"":"",
						};
						requestOptions.method = 'DELETE';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/social-accounts/${var1}/force`;
						break;
                    case 'AddProxy':
                        var1 = this.getNodeParameter('name', i);
						var2 = this.getNodeParameter('ip', i);
						var3 = this.getNodeParameter('port', i);
						var4 = this.getNodeParameter('username', i);
						var5 = this.getNodeParameter('password', i);
						body = {
							"name": var1,
							"credentials": {
							  "ip": var2,
							  "port": var3,
							  "username": var4,
							  "password": var5
							}
						  }
                        requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/proxies`;
                        break;
					case 'BuyProxy':
						var1 = this.getNodeParameter('connectedAccountId', i);
						body = {
							"connectedAccountId": var1,
						}
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/proxies/buy`;
						break;
					case 'UpdateProxy':
						var1 = this.getNodeParameter('proxyId', i);
						var2 = this.getNodeParameter('name', i);
						var3 = this.getNodeParameter('ip', i);
						var4 = this.getNodeParameter('port', i);
						var5 = this.getNodeParameter('username', i);
						var6 = this.getNodeParameter('password', i);
						body = {
							"name": var2,
							"credentials": {
							  "ip": var3,
							  "port": var4,
							  "username": var5,
							  "password": var6
							}
						  }
                        requestOptions.method = 'PUT';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/proxies/${var1}`;
						break;
					case 'ListProxies':
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/proxies`;
						break;
					case 'GetProxyByID':
						var1 = this.getNodeParameter('proxyId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/proxies/${var1}`;
						break;
					case 'DeleteProxyByID':
						var1 = this.getNodeParameter('proxyId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/proxies/${var1}`;
						break;
					case 'GetAllPlatforms':
						var1 = this.getNodeParameter('start', i);
						var2 = this.getNodeParameter('limit', i);
						var3 = this.getNodeParameter('q', i);
						var4 = this.getNodeParameter('type', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/platforms?start=${var1}&limit=${var2}&q=${var3}&type=${var4}`;
						break;
					case 'GetAllPlatforms':
						var1 = this.getNodeParameter('platformId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/platforms/${var1}`;
						break;
					case 'GetAllAutomations':
						var1 = this.getNodeParameter('start', i,0);
						var2 = this.getNodeParameter('limit', i,10);
						var3 = this.getNodeParameter('platformId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/platforms?start=${var1}&limit=${var2}&platformId=${var3}`;
						break;
					case 'GetAutomationById':
						var1 = this.getNodeParameter('automationId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/automations/${var1}`;
						break;
					case 'GetAllWorkflows':
						var1 = this.getNodeParameter('start', i,0);
						var2 = this.getNodeParameter('limit', i,10);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/workflows?start=${var1}&limit=${var2}`;
						break;
					case 'GetWorkflowById':
						var1 = this.getNodeParameter('workflowId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/workflows/${var1}`;
						break;
					case 'GetWorkflowNodesById':
						var1 = this.getNodeParameter('workflowId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/workflows/${var1}/nodes`;
						break;
					case 'RunAutomation':
						var1 = this.getNodeParameter('name', i);
						var2 = this.getNodeParameter('description', i);
						var3 = this.getNodeParameter('automationId', i);
						var4 = this.getNodeParameter('connectedAccountId', i);
						var5 = this.getNodeParameter('timezone', i);
						var6 = this.getNodeParameter('inputs', i);
						body = {
							"name": var1,
							"description": var2,
							"automationId": var3,
							"connectedAccountId": var4,
							"timezone": var5,
							"inputs": var6
						  }
                        requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/run`;
						break;
					case 'RunWorkflow':
						var1 = this.getNodeParameter('workflowId', i);
						body = {}
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/run/${var2}`;
						break;
					case 'GetAllRequiredInputsForWorkflow':
						var1 = this.getNodeParameter('workflowId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/inputs/${var1}`;
						break;
					case 'ConfigureAndRunWorkflow':
						var1 = this.getNodeParameter('workflowId', i);
						var2 = this.getNodeParameter('inputs', i);
						var3 = this.getNodeParameter('socialAccountIds', i);
						body = {
							"inputs": var2,
							"socialAccountIds": var3
						  }
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/run/${var1}`;
						break;
					case 'RunAutomationWithCsvInput':
						var1 = this.getNodeParameter('filename', i);
						body = {
							var1
							}
						requestOptions.method = 'POST';
						requestOptions.headers['Content-Type'] = 'multipart/form-data';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/csv-upload`;
						break;
					case 'InvokeAutomationViaCsvUrl':
						var1 = this.getNodeParameter('name', i);
						var2 = this.getNodeParameter('description', i);
						var3 = this.getNodeParameter('automationId', i);
						var4 = this.getNodeParameter('connectedAccountId', i);
						var5 = this.getNodeParameter('csvUrl', i);
						var6 = this.getNodeParameter('timezone', i);
						var7 = this.getNodeParameter('inputs', i);
						body = {
							"name": var1,
							"description": var2,
							"automationId": var2,
							"connectedAccountId": var4,
							"csvUrl": var5,
							"timezone": var6,
							"inputs": var7
						  }
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(body);
						endpoint = `/api/v1/public/csv-input/run`;
						break;
					case 'GetAllExecutions':
						var1 = this.getNodeParameter('start', i, 0);
						var2 = this.getNodeParameter('limit', i, 10);
						var3 = this.getNodeParameter('workflowId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/executions?start=${var1}&limit=${var2}&workflowId=${var3}`;
						break;
					case 'GetExecutionById':
						var1 = this.getNodeParameter('executionId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/executions/${var1}`;
						break;
					case 'GetAllUnreadNotifications':
						var1 = this.getNodeParameter('start', i, 0);
						var2 = this.getNodeParameter('limit', i, 10);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/notifications?start=${var1}&limit=${var2}`;
						break;
					case 'GetResultOfExecution':
						var1 = this.getNodeParameter('executionId', i);
						requestOptions.method = 'GET';
						endpoint = `/api/v1/public/results/${var1}`;
						break;
                    default:
                        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'Unsupported operation');
                }
				const baseURL = 'https://v2-prod-api.texau.com';
                const response = await this.helpers.httpRequest({
                    ...requestOptions,
                    url: `${baseURL}${endpoint}`,
                });
                returnData.push(response);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ error: error.message });
                    continue;
                }
                throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Texau = Texau;
//# sourceMappingURL=Texau.node.js.map
