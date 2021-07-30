import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import SubHeader from '../../../components/SubHeader';

function GuideWhatElsePage() {
  const query = useStaticQuery(graphql`
    query GuideWhatElseQuery {
      elApi {
        allGuideText {
          whatElse
        }
      }
    }
  `);
  const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="mb-28 flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-1/2 flex-shrink-0">
          <SubHeader text="What Else You Need To Know" color="bg-peach" />
          <Image
            className="mt-11"
            imgId="girl-1"
            width={346}
            alt={`A cartoonish drawing of a young woman carrying a bag full of carrots and bread. The bag has the words "Save the Earth" on it.`}
          />
        </div>
        <div className="lg:mt-32 text-xl md:text-3xl">
          <ReactMarkdown className="px-5 lg:ml-12 lg:mt-12 font-work-sans">
            {content.whatElse}
          </ReactMarkdown>
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/context" />
      </div>
    </Layout>
  );
}

export default GuideWhatElsePage;
