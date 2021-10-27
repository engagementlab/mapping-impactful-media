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
        className="flex flex-col
      "
      >
        <div className="lg:w-2/5 flex-shrink-0">
          <SubHeader text="Our Vision, Our Values" color="bg-peach" />
        </div>
        <div
          id="guide-start"
          className="flex flex-col items-center font-work-sans text-xl md:text-2xl
      "
        >
          <ReactMarkdown className="lg:w-2/3">
            {content.startText1}
          </ReactMarkdown>
          <Image
            id="girl-img"
            imgId="girl-2"
            width={753}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
          />
          <div className="bg-orange bg-opacity-25 my-16 py-2 xl:py-8 md:px-16">
            <ReactMarkdown>{content.startTextItems}</ReactMarkdown>
          </div>
          <ReactMarkdown className="lg:w-2/3">
            {content.startText2}
          </ReactMarkdown>
          <div
            className="flex flex-col mb-14 lg:mt-12 text-xl md:text-2xl font-work-sans w-2/3
      "
          >
            <ReactMarkdown>{content.startText3}</ReactMarkdown>
            <div
              id="guide-intentions"
              className="lg:mt-12 font-work-sans text-xl md:text-2xl
      "
            >
              <div className="bg-orange bg-opacity-25 py-8 px-2 xl:py-8 md:px-16">
                <h3 className="font-bourbon uppercase text-3xl pt-8">
                  The following intentions drove the creation of this field
                  guide:
                </h3>
                <br />
                <ReactMarkdown>{content.startTextIntentions}</ReactMarkdown>
              </div>
            </div>
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
