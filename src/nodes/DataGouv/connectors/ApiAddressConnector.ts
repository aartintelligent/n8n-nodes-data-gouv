import {
	IExecuteFunctions,
	INodeExecutionData,
	IRequestOptions,
	IDataObject,
	NodeApiError,
} from 'n8n-workflow';

export async function apiSearchAddressRequest(
	this: IExecuteFunctions,
	q: string,
	postcode: string,
	autocomplete: boolean,
	limit: number,
): Promise<any> {
	try {

		const options: IRequestOptions = {
			method: 'GET',
			url: 'https://api-adresse.data.gouv.fr/search',
			qs: {
				q: q,
				postcode: postcode,
				autocomplete: autocomplete,
				limit: limit,
			},
			json: true,
		};

		return await this.helpers.request(options);

	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export class ApiAddressConnector {
	async search(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();

		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {

			const q = (this.getNodeParameter('q', i) as string).trim().replace(/ /g, '+');

			const postcode = this.getNodeParameter('postcode', i) as string;

			const autocomplete = this.getNodeParameter('autocomplete', i) as boolean;

			const limit = this.getNodeParameter('limit', i) as number;

			const response = await apiSearchAddressRequest.call(this, q, postcode, autocomplete, limit);

			const features = response.features as Array<{ properties?: IDataObject }>;

			returnData.push(
				...features
					.filter((f): f is { properties: IDataObject } => !!f.properties)
					.map((f) => ({json: f.properties})),
			);

		}

		return [returnData];
	}
}
