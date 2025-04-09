import {
	INodeProperties,
} from 'n8n-workflow';

export const dataGouvCompanyOperation: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'search_company',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'Search Company',
				value: 'search_company',
				description: 'Search Company',
				action: 'Search Company',
			},
		],
	},
];

export const dataGouvCompanyDescription: INodeProperties[] = [
	{
		displayName: 'Search Value',
		name: 'searchValue',
		type: 'string',
		default: '',
		required: true,
		description: 'Name, siret, domain...',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['search_company'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['search_company'],
			},
		},
	},
	{
		displayName: 'Result per page',
		name: 'perPage',
		type: 'number',
		default: 10,
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['search_company'],
			},
		},
	},
];
