import { INodeType, INodeTypeDescription, NodeOperationError, IExecuteFunctions, NodeApiError } from 'n8n-workflow';

export class Texau implements INodeType {
	description: INodeTypeDescription = {
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
			baseURL: 'https://prod-api.texau.com/',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Action',
				name: 'action',
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{
						name: 'Spices',
						value: 'spices',
					},
					{
						name: 'Recipes',
						value: 'recipes',
					},
					{
						name: 'Notification',
						value: 'notification',
					},
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Run',
						value: 'run',
					},
				],
				default: 'spices',
			},
// Operations for spices
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						action: [
							'spices',
						],
					},
				},
				noDataExpression: true,
// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{ name: 'Get All Spices', value: 'operation1' },
					{ name: 'Get List of All Used Spices', value: 'operation10' },
					{ name: 'Get Spice by ID', value: 'operation2' },
					{ name: 'Get Spice by Spice Name', value: 'operation3' },
					{ name: 'Get Execution Limits of Spices', value: 'operation4' },
					{ name: 'Get Spice Executions', value: 'operation5' },
					{ name: 'Get Spice Execution by ID', value: 'operation6' },
					{ name: 'Get Spice Execution Logs by ID7', value: 'operation7' },
					{ name: 'Get All CRM Spices', value: 'operation8' },
					{ name: 'Get CRM Spices by ID', value: 'operation9' }
				],
				default: 'operation1',
			},
// Operations for recipes
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						action: [
							'recipes',
						],
					},
				},
				options: [

					{ name: 'Get All Recipes', value: 'recipeOperation1' },
					{ name: 'Get Recipe By ID', value: 'recipeOperation2' },
					{ name: 'Get Recipes Results', value: 'recipeOperation3' },
					{ name: 'Get Public Results', value: 'recipeOperation4' }

				],
				default: 'recipeOperation1',
			},
// Operations for notifications
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						action: [
							'notification',
						],
					},
				},
				options: [

					{ name: 'Get All Notifications', value: 'notificationOperation1' },


				],
				default: 'notificationOperation1',
			},
// Operations for tags
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						action: [
							'all',
						],
					},
				},
				options: [

					{ name: 'Get All Tags', value: 'tagOperation1' },


				],
				default: 'tagOperation1',
			},
// Operations for Run comamnds
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						action: [
							'recipes',
						],
					},
				},
				options: [

					{ name: 'Run Spice', value: 'RunOperation1' },
					{ name: 'Run Recipe', value: 'RunOperation2' },
				],
				default: 'RunOperation1',
			},
// Fields for operations
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['operation2', 'operation6', 'operation7', 'operation9'],
					},
				},
				default: '',
				description: 'ID to use in the request',
			},
			{
				displayName: 'Spice Name',
				name: 'spiceName',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['operation3'],
					},
				},
				default: '',
				description: 'Name of the spice to fetch',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for paginated results',
				displayOptions: {
					show: {
						operation: ['operation1','operation2','operation4', 'operation5'],
					},
				},
			},
			{
				displayName: 'Platform',
				name: 'platform',
				type: 'multiOptions',
				options: [
					{ name: 'Facebook', value: 'facebook' },
					{ name: 'Twitter', value: 'twitter' },
					{ name: 'LinkedIn', value: 'linkedin' },
					// can add more platforms if needed
				],
				default: [],
				description: 'Platforms to filter the results',
				displayOptions: {
					show: {
						operation: ['operation1','operation2', 'operation4'],
					},
				},
			},
			{
				displayName: 'Recipe ID',
				name: 'recipeId',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['recipeOperation2'],
					},
				},
				default: '',
				description: 'ID of the recipe to fetch',
			},
			// Fields for Run Operations
			// Fields for runRecipe
			{
				displayName: 'Recipe ID',
				name: 'recipeId',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runRecipe'],
					},
				},
				default: '',
				description: 'ID of the recipe to run',
			},
			{
				displayName: 'Li_At',
				name: 'variableLiAt',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runRecipe'],
					},
				},
				default: '',
				description: 'LinkedIn auth token',
			},
			{
				displayName: 'Post URL',
				name: 'variablePostUrl',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runRecipe'],
					},
				},
				default: '',
				description: 'URL to post the result',
			},
			{
				displayName: 'Max Count',
				name: 'variableMaxCount',
				type: 'number',
				displayOptions: {
					show: {
						operation: ['runRecipe'],
					},
				},
				default: 10,
				description: 'Maximum number of results to fetch',
			},
			// Fields for runSpice
			{
				displayName: 'Spice ID',
				name: 'spiceId',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runSpice'],
					},
				},
				default: '',
				description: 'ID of the spice to run',
			},
			{
				displayName: 'Function Name',
				name: 'funcName',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runSpice'],
					},
				},
				default: '',
				description: 'Function name to execute',
			},
			{
				displayName: 'Auth Token',
				name: 'authToken',
				type: 'string',
				typeOptions: {
					password: true,
				},
				displayOptions: {
					show: {
						operation: ['runSpice'],
					},
				},
				default: '',
				description: 'Authentication token for the spice',
			},
			{
				displayName: 'Profile URL',
				name: 'profileUrl',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runSpice'],
					},
				},
				default: '',
				description: 'URL of the profile to follow',
			},
			{
				displayName: 'Execution Name',
				name: 'executionName',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['runSpice'],
					},
				},
				default: '',
				description: 'Optional name for this execution',
			},
		],
	};
// Construct http functions
	async execute(this: IExecuteFunctions) {
		const items = this.getInputData();
		const returnData = [];

		// Get credentials the user provided for this node
		const credentials = await this.getCredentials('texauapi');

		for (let i = 0; i < items.length; i++) {
			try {
				const operation = this.getNodeParameter('operation', i) as string;
				let endpoint = '';
				let queryParams = '';
				const requestOptions: any = {
					headers: {
						Authorization: `APIKey ${credentials?.authtoken}`,
					},
					method: 'GET',
				};
// switch based on operation
				switch (operation) {
					case 'operation1': // Get all spices
						endpoint = '/api/spices';
						const pageAllSpices = this.getNodeParameter('page', i) as number | undefined;
						if (pageAllSpices) {
							queryParams = `?page=${pageAllSpices}`;
						}
						let platform = this.getNodeParameter('platform', i) as string[];
						if (platform.length > 0) {
							queryParams += `&platform=${platform.join(',')}`;
						}
						break;
					case 'operation10': // Get list of all used spices
						endpoint = '/api/spices/used';
						const pageSpicesListUsed = this.getNodeParameter('page', i) as number | undefined;
						if (pageSpicesListUsed) {
							queryParams = `?page=${pageSpicesListUsed}`;
						}
						break;
					case 'operation2': // Get Spice by ID
						const id = this.getNodeParameter('id', i) as string;
						endpoint = `/api/spices/${id}`;
						break;
					case 'operation3': // Get spice by spice name
						const spiceName = this.getNodeParameter('spiceName', i) as string;
						endpoint = `/api/spices/name/${spiceName}`;
						break;
					case 'operation4': // Get execution limits of spices (With page and platform)
						endpoint = '/api/spices/limits';
						const pageSpicesLimit = this.getNodeParameter('page', i) as number | undefined;
						platform = this.getNodeParameter('platform', i) as string[];
						if (pageSpicesLimit) {
							queryParams = `?page=${pageSpicesLimit}`;
						}
						if (platform.length > 0) {
							queryParams += `&platform=${platform.join(',')}`;
						}
						break;
						case 'operation5': // Get spice executions (with page)
						endpoint = '/api/spices/executions';
						const pageSpicesExec = this.getNodeParameter('page', i) as number | undefined;

						if (pageSpicesExec) {
							queryParams = `?page=${pageSpicesExec}`;
						}
						break;
					case 'operation6': // Get spice execution by id
						const executionId = this.getNodeParameter('id', i) as string;
						endpoint = `/api/spices/executions/${executionId}`;
						break;
					case 'operation7': // Get spice execution logs by ID7
						const logId = this.getNodeParameter('id', i) as string;
						endpoint = `/api/spices/executions/${logId}/logs`;
						break;
					case 'operation8': // Get all CRM spices
						endpoint = '/api/crm/spices';
						break;
					case 'operation9': // Get CRM spices by ID
						const crmId = this.getNodeParameter('id', i) as string;
						endpoint = `/api/crm/spices/${crmId}`;
						break;
					case 'recipeOperation1': // Get All Recipes (with pagination)
						endpoint = '/api/recipes';
						const pageRecipes = this.getNodeParameter('page', i) as number | undefined;
						if (pageRecipes) {
							queryParams = `?page=${pageRecipes}`;
						}
						break;
					case 'recipeOperation2': // Get Recipe By ID
						const recipeId = this.getNodeParameter('recipeId', i) as string;
						endpoint = `/api/recipes/${recipeId}`;
						break;
					case 'recipeOperation3': // Get Recipes Results
						endpoint = '/api/recipes/results';
						break;
					case 'recipeOperation4': // Get Public Results
						endpoint = '/api/recipes/public';
						break;
					// notification and tags
					case 'notificationOperation1': // Get all notifications
						endpoint = '/api/notifications';
						break;
					case 'tagOperation1': // Get all tags
						endpoint = '/api/tags';
						break;
					// Run Operations
					case 'runSpice':
						const spiceIdForRun = this.getNodeParameter('spiceId', i) as string;
						const funcName = this.getNodeParameter('funcName', i) as string;
						const authToken = this.getNodeParameter('authToken', i) as string;
						const profileUrl = this.getNodeParameter('profileUrl', i) as string;
						const executionName = this.getNodeParameter('executionName', i) as string;

						const spiceBody = {
							funcName,
							spiceId: spiceIdForRun,
							inputs: {
								auth_token: authToken,
								profileUrl,
							},
							executionName,
						};

						endpoint = '/api/invoke';
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(spiceBody);
						break;
					// Run Recipe
					case 'runRecipe':
						const recipeID = this.getNodeParameter('recipeId', i) as string;
						const variableLiAt = this.getNodeParameter('variableLiAt', i) as string;
						const variablePostUrl = this.getNodeParameter('variablePostUrl', i) as string;
						const variableMaxCount = this.getNodeParameter('variableMaxCount', i) as number;

						const recipeBody  = {
							variable: {
								li_at: variableLiAt,
								postUrl: variablePostUrl,
								maxCount: variableMaxCount,
							},
						};

						endpoint = `/api/recipes/${recipeID}/invoke`;
						requestOptions.method = 'POST';
						requestOptions.body = JSON.stringify(recipeBody );
						break;
						// Unsupported Operation
						 default:
                throw new NodeOperationError(this.getNode(), 'Unsupported operation');
				}

				const response = await this.helpers.httpRequest({
					...requestOptions,
					url: `${credentials?.baseURL}${endpoint}${queryParams}`,
				});

				returnData.push(response);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw new NodeApiError(this.getNode(), error);
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}
