exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /node_modules\/paper/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
const path = require('path');
const fs = require('fs').promises;

exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  const allPaths = data.pages.nodes
    .map((node) => `"http://localhost:8000${node.path}"`)
    .join(',');

  return fs.writeFile(
    path.resolve(__dirname, 'lighthouserc.json'),
    `{
      "ci": {
        "collect": {
          "url": [${allPaths}]
        }
      }
    }`
  );
};
