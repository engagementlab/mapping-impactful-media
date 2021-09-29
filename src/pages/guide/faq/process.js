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
        className="mb-28
      "
      >
        <div className="w-full">
          <SubHeader text="Process v. Outcomes: A Note" color="bg-pink" />
          <div className="px-5 xl:ml-12 lg:mt-12 font-work-sans text-2xl">
            <ReactMarkdown>{content.process1}</ReactMarkdown>
            <ReactMarkdown>{content.process2}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/faq" />
      </div>
    </Layout>
  );
}

export default GuideProcessPage;
