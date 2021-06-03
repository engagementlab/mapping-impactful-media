import {
    client
} from '$lib/apolloClient';
import {
    apollo
} from '$lib/apollo';
const gql = apollo.gql;

export const post = async request => {
    try {
        const query = gql `
        {
            ${request.body}
        }
        `;
        const result = await client.query({
            query,
        });
        return {
            status: 200,
            body: result.data
        }
    } catch (err) {
        return {
            status: 500,
            statusText: 'Error retrieving data' + err
        }
    }
}