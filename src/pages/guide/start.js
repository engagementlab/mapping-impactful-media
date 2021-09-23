import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Image from '../../components/Image';

import SubHeader from '../../components/SubHeader';
import './start.scss';

function GuideIndexPage() {
  const introContent = useStaticQuery(graphql`
    query GuideIntroQuery {
      elApi {
        allGuideText {
          startText1
          startText2
          startText3
          startTextItems
          startTextIntentions
        }
      }
    }
  `);
  const content = introContent.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-2/5 flex-shrink-0">
          <SubHeader text="Our Vision, Our Values" color="bg-peach" />
          <Image
            id="girl-img"
            imgId="girl-2"
            width={753}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
          />
        </div>
        <div
          id="guide-start"
          className="px-5 font-work-sans text-xl md:text-2xl
      "
        >
          <ReactMarkdown>{content.startText1}</ReactMarkdown>
          <div className="bg-orange bg-opacity-25 my-16 py-2 px-2 xl:mx-24 xl:py-8 md:px-16">
            <ReactMarkdown>{content.startTextItems}</ReactMarkdown>
          </div>
          <ReactMarkdown>{content.startText2}</ReactMarkdown>
        </div>
      </div>

      <div
        className="flex flex-col xl:flex-row mb-14 lg:mt-12 text-xl md:text-2xl font-work-sans
      "
      >
        <div className="xl:w-2/6 flex-shrink-0 px-5 lg:ml-16">
          <ReactMarkdown>{content.startText3}</ReactMarkdown>
        </div>
        <div
          id="guide-intentions"
          className="px-5 lg:mt-12 font-work-sans text-xl md:text-2xl
      "
        >
          <div className="bg-orange bg-opacity-25 py-8 px-2 xl:mx-24 xl:py-8 md:px-16">
            <h3 className="font-bourbon uppercase text-3xl pt-8">
              The following intentions drove the creation of this field guide:
            </h3>
            <br />
            <ReactMarkdown>{content.startTextIntentions}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <Button label="Continue" link="/guide/faq" />
      </div>
    </Layout>
  );
}

export default GuideIndexPage;
