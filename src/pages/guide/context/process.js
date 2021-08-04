import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import SubHeader from '../../../components/SubHeader';

function GuideProcessPage() {
  const query = useStaticQuery(graphql`
    query GuideProcessQuery {
      elApi {
        allGuideText {
          process1
          process2
        }
      }
    }
  `);
  const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="mb-28 flex flex-col xl:flex-row
      "
      >
        <div className="xl:w-1/2 flex-shrink-0">
          <SubHeader text="Process v. Outcomes: A Note" color="bg-pink" />
          <ReactMarkdown className="px-5 xl:ml-12 lg:mt-12 font-work-sans text-2xl">
            {content.process1}
          </ReactMarkdown>
        </div>
        <div className="mt-12 xl:mt-32 text-xl md:text-4xl">
          <ReactMarkdown className="lg:leading-10 px-8 py-9 lg:px-20 lg:py-28 lg:mx-12 lg:mt-12 rounded-55 bg-pink bg-opacity-25 font-work-sans text-center">
            {content.process2}
          </ReactMarkdown>
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/context" />
      </div>
    </Layout>
  );
}

export default GuideProcessPage;
