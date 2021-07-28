require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://mappingimpactfulml.org/`,
    title: `Mapping Impactful Media Literacy Practices`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `ELAPI`,
        fieldName: `elApi`,
        url: process.env.API_URL
          ? process.env.API_URL
          : `http://localhost:3000/ql/?schema=mapping-impactful-media`,
      },
    },
  ],
};
