
import pkg from '@apollo/client/core/core.cjs.js';
const {HttpLink, ApolloClient, InMemoryCache} = pkg;
// import { ApolloClient, HttpLink,InMemoryCache } from '@apollo/client';


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
            uri: 'https://api.elab.emerson.edu/ql/?schema=mapping-impactful-media',
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