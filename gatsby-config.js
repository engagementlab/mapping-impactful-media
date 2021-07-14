import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Mapping Impactful Media',
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'ELAPI',
        fieldName: 'elApi',
        url: process.env.API_URL ? process.env.API_URL : 'http://localhost:3000/ql/?schema=mapping-impactful-media',
      },
    }],
};
