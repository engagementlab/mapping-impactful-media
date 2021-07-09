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
        url: 'http://localhost:3000/ql/?schema=mapping-impactful-media',
      },
    }],
};
