import { apollo } from '$lib/apollo';
const { ApolloClient, HttpLink,InMemoryCache } = apollo;

class Client {
    constructor() {
        if (Client._instance) {
            return Client._instance
        }
        Client._instance = this;

        this.client = this.setupClient();
    }

    setupClient() {
        const link = new HttpLink({
            uri: import.meta.env.VITE_API_URL || 'https://api.elab.emerson.edu/ql/?schema=mapping-impactful-media',
            fetch
        });

        const client = new ApolloClient({
            link,
            cache: new InMemoryCache()
        });
        return client;
    }
}

export const client = (new Client()).client;