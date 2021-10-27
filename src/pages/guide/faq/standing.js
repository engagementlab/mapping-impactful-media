import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import SubHeader from '../../../components/SubHeader';

function GuideStandingPage() {
  const query = useStaticQuery(graphql`
    query GuideStandingQuery {
      elApi {
        allGuideText {
          standing
        }
      }
    }
  `);
  const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="container mx-auto mb-14 px-4 flex flex-col max-w-5xl text-center
      "
      >
        <div>
          <SubHeader
            text="Standing On The Shoulders Of Media Literacy's Giants"
            color="bg-blush"
          />
          <ReactMarkdown className="px-5 lg:ml-12 lg:mt-12 font-work-sans lg:text-2xl">
            {content.standing}
          </ReactMarkdown>
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/faq" />
      </div>
    </Layout>
  );
}

export default GuideStandingPage;
