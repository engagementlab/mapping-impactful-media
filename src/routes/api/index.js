import { client } from '$lib/Client.js';
// import {gql} from '@apollo/client' ;

import pkg from '@apollo/client/core/core.cjs.js';
const {gql} = pkg;

export const get = async request => {
    try {
        const query = gql`
        {
            allMimAboutPages 
            {
                body
            }
        }
        `;
        console.log('ql: '+client)
        const result = await client.query({
            query,
        });
        console.log('ql: '+result)

        return {
            status: 200,
            body: result.data
        }
    } catch (err) {
        console.log(err)
        return {
            status: 500,
            statusText: 'Error retrieving data' + err
        }
    }
}