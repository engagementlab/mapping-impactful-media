import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button';

import Layout from '../../../components/Layout';
import SubHeader from '../../../components/SubHeader';

function GuideHowToPage() {
  const query = useStaticQuery(graphql`
    query GuideHowToQuery {
      elApi {
        allGuideText {
          howTo1
          howTo2
        }
      }
    }
  `);
  const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-48 flex flex-col items-center">
        <SubHeader
          text="How To Use This Guide"
          color="bg-bee"
          className="max-w-5xl text-center"
        />
        <h2 className="font-work-sans text-center text-3xl my-16 max-w-5xl">
          The guide is designed to be self-paced and open for you to explore. We
          do have a few suggestions for where to start if you are looking for
          direction.
        </h2>
        <div className="flex justify-between mb-24 text-center">
          <div className="w-5/12 rounded-55 bg-bee bg-opacity-25 p-16">
            <h3 className="text-2xl">I Like a Clear Guide! Help me!</h3>
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.howTo1}
            </ReactMarkdown>
          </div>
          <div className="w-5/12 rounded-55 bg-bee bg-opacity-25 p-16">
            <h3 className="text-2xl">I'm my own guide. let me roam free!</h3>
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.howTo2}
            </ReactMarkdown>
          </div>
        </div>
        <div className="text-center">
          <Button label="Back" link="/guide/context" />
        </div>
      </div>
    </Layout>
  );
}

export default GuideHowToPage;
