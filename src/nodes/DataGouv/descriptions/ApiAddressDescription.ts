import {
	INodeProperties,
} from 'n8n-workflow';

export const dataGouvAddressOperation: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'search_address',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['address'],
			},
		},
		options: [
			{
				name: 'Search Address',
				value: 'search_address',
				description: 'Search Address',
				action: 'Search Address',
			},
		],
	},
];

export const dataGouvAddressDescription: INodeProperties[] = [
	{
		displayName: 'Street',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['address'],
				operation: ['search_address'],
			},
		},
	},
	{
		displayName: 'Zip',
		name: 'postcode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['address'],
				operation: ['search_address'],
			},
		},
	},
	{
		displayName: 'Autocomplete',
		name: 'autocomplete',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['address'],
				operation: ['search_address'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 10,
		displayOptions: {
			show: {
				resource: ['address'],
				operation: ['search_address'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		description: 'Max number of results to return',
	},
];
