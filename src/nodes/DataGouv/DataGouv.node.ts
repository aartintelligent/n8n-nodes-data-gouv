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
	dataGouvAddressDescription,
	dataGouvAddressOperation,
	dataGouvCompanyDescription,
	dataGouvCompanyOperation,
} from './descriptions';

import {
	ApiAddressConnector,
	ApiCompanyConnector,
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
		usableAsTool: true,
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
						name: 'Address',
						value: 'address',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
			},
			...dataGouvAddressOperation,
			...dataGouvAddressDescription,
			...dataGouvCompanyOperation,
			...dataGouvCompanyDescription,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0);

		const operation = this.getNodeParameter('operation', 0);

		if (resource === 'address') {

			if (operation === 'search_address') {

				const connector = new ApiAddressConnector();

				return await connector.search.call(this);

			}

		}

		if (resource === 'company') {

			if (operation === 'search_company') {

				const connector = new ApiCompanyConnector();

				return await connector.search.call(this);

			}

		}

		return [returnData];
	}
}
