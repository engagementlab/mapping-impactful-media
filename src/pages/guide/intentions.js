import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Image from '../../components/Image';

import './start.scss';

function GuideIndexPage() {
  const intentionsContent = useStaticQuery(graphql`
    query GuideIntentionsQuery {
      elApi {
        allGuideText {
          startText1
          startText2
          startTextItems
        }
      }
    }
  `);
  const content = intentionsContent.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="container mx-auto mt-14 mb-14 xl:mt-14 px-4 flex flex-col
      "
      >
        <div>
          <Image
            id="girl-img"
            imgId="girl-2"
            width={541}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
          />
        </div>
      </div>
      <div
        id="guide-start"
        className="px-5 font-work-sans text-xl md:text-2xl
      "
      >
        <ReactMarkdown>{content.startText1}</ReactMarkdown>
        <div className="bg-orange bg-opacity-25 py-2 px-2 md:py-8 md:px-16">
          <ReactMarkdown>{content.startTextItems}</ReactMarkdown>
        </div>
        <ReactMarkdown>{content.startText2}</ReactMarkdown>
        <Button label="Enter Field Guide" link="/guide/" />
      </div>
    </Layout>
  );
}

export default GuideIndexPage;
