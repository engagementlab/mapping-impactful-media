import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

function GuideIndexPage() {
  const introContent = useStaticQuery(graphql`
    query GuideIntroQuery {
      elApi {
        allGuideText {
          intro
        }
      }
    }
  `);
  return (
    <Layout>
      <div
        className="container mx-auto mt-14 mb-14 xl:mt-48 px-4 flex flex-col max-w-5xl font-work-sans text-2xl md:text-4xl text-center
      "
      >
        <ReactMarkdown>
          {introContent.elApi.allGuideText[0].intro}
        </ReactMarkdown>
      </div>
      <div
        className="container mx-auto text-center
      "
      >
        <Button label="Continue" link="/guide/" />
      </div>
    </Layout>
  );
}

export default GuideIndexPage;
