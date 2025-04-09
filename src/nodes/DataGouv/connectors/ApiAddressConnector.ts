import {
	IExecuteFunctions,
	INodeExecutionData,
	IRequestOptions,
	NodeApiError,
} from 'n8n-workflow';

export async function apiSearchAddressRequest(
	this: IExecuteFunctions,
	searchValue: string,
	limit: number,
): Promise<any> {
	try {

		const options: IRequestOptions = {
			method: 'GET',
			url: 'https://api-adresse.data.gouv.fr/search',
			qs: {
				q: searchValue,
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

			const searchValue = (this.getNodeParameter('searchValue', i) as string).trim().replace(/ /g, '+');

			const limit = this.getNodeParameter('limit', i) as number;

			const response = await apiSearchAddressRequest.call(this, searchValue, limit);

			if (Array.isArray(response.features) && response.features.length > 0) {
				for (const feature of response.features) {
					if (feature.properties) {
						returnData.push({ json: feature.properties });
					}
				}
			}
		}

		return [returnData];
	}
}
