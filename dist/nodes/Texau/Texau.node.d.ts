import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
export declare class Texau implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<import("n8n-workflow").INodeExecutionData[][]>;
}
