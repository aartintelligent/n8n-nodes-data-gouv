import type {
	INodeType,
	INodeTypeDescription,
	INodeExecutionData,
	IExecuteFunctions,
} from 'n8n-workflow';

import {
	NodeConnectionType,
} from 'n8n-workflow';

import {
	dataGouvCompanyDescription,
	dataGouvCompanyOperation,
} from './descriptions';

import {
	ApiSearchCompanyConnector,
} from './connectors';

export class DataGouv implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Data Gouv',
		name: 'data_gouv',
		icon: 'file:DataGouv.svg',
		group: ['transform'],
		version: 1,
		description: '',
		defaults: {
			name: 'Data Gouv',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				default: '',
				noDataExpression: true,
				options: [
					{
						name: 'Company',
						value: 'company',
					},
				],
			},
			...dataGouvCompanyOperation,
			...dataGouvCompanyDescription,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0);

		const operation = this.getNodeParameter('operation', 0);

		if (resource === 'company') {

			if (operation === 'search_company') {

				const connector = new ApiSearchCompanyConnector();

				return await connector.execute.call(this);

			}

		}

		return [returnData];
	}
}
