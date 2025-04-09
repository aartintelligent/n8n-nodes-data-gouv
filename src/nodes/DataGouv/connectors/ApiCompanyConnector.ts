import {
	IExecuteFunctions,
	INodeExecutionData,
	IRequestOptions,
	NodeApiError,
} from 'n8n-workflow';

export async function apiSearchCompanyRequest(
	this: IExecuteFunctions,
	searchValue: string,
	page: number,
	perPage: number,
): Promise<any> {
	try {

		const options: IRequestOptions = {
			method: 'GET',
			url: 'https://recherche-entreprises.api.gouv.fr/search',
			qs: {
				q: searchValue,
				page: page,
				per_page: perPage,
			},
			json: true,
		};

		return await this.helpers.request(options);

	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export class ApiCompanyConnector {
	async search(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();

		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {

			const searchValue = this.getNodeParameter('searchValue', i) as string;

			const page = this.getNodeParameter('page', i, 1) as number;

			const perPage = this.getNodeParameter('perPage', i, 10) as number;

			const response = await apiSearchCompanyRequest.call(this, searchValue, page, perPage);

			if (Array.isArray(response.results) && response.results.length > 0) {
				returnData.push({
					json: response.results,
				});
			}
		}

		return [returnData];
	}
}
