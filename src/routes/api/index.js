import { client } from '$lib/Client.js';
// import {gql} from '@apollo/client' ;

import pkg from '@apollo/client/core/core.cjs.js';
const gql = pkg;

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
        const result = await client.query({
            query,
        });
        console.log('ql: '+result)

        return {
            status: 200,
            body: result.data
        }
    } catch (err) {
        return {
            status: 500,
            error: 'Error retrieving data' + err
        }
    }
}