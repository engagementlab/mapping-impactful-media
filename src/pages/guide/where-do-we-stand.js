import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Image from '../../components/Image';
import Layout from '../../components/Layout';
import SubHeader from '../../components/SubHeader';
import GuideFooter from '../../components/GuideFooter';

function GuidePage() {
  const query = useStaticQuery(graphql`
    query Guide5Query {
      elApi {
        allGuideSection5 {
          intro
          introSection2
          questions
          enabling
          capacity
          margins
          marginsPrompt
        }
      }
    }
  `);
  const content = query.elApi.allGuideSection5[0];
  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-16 flex flex-col items-center">
        <SubHeader
          text="5. Where Do We Stand?"
          color="bg-hibiscus"
          className="text-center w-full md:w-8/12"
        />
        <div className="flex flex-col xl:flex-row justify-between mt-28 mb-24">
          <div className="flex flex-col w-full xl:w-1/2 p-4 flex-shrink-0 items-center">
            <div>
              <ReactMarkdown className="font-work-sans text-2xl px-4">
                {content.intro}
              </ReactMarkdown>
            </div>

            <div className="px-6 py-4 mt-28 bg-hibiscus font-bourbon text-2xl">
              Goal: ???????????
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mx-4 mt-9 lg:mt-0">
              <ReactMarkdown className="font-work-sans text-2xl px-4">
                {content.introSection2}
              </ReactMarkdown>
            </div>
            <div className="w-11/12 rounded-55 bg-hibiscus bg-opacity-25 mt-4 p-6 lg:p-12">
              <ReactMarkdown className="font-work-sans text-xl list">
                {content.questions}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row p-4">
          <div className="w-full lg:w-1/2 p-4 flex-shrink-0 items-center">
            <ReactMarkdown className="font-work-sans md:text-2xl">
              {content.enabling}
            </ReactMarkdown>
          </div>
          <div className="mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
            <Image
              imgId="where-do-we-stand-1"
              width={650}
              alt="A cartoonish drawing of a man and woman looking at a map in front of two buildings."
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row p-4">
          <div className="w-full lg:w-1/2 flex-shrink-0 mr-4 lg:p-8 lg:ml-16 mt-9 lg:mt-0">
            <Image
              imgId="where-do-we-stand-2"
              width={700}
              alt={`A drawing of three rectangular cards, each with the face of one of three young people followed by the words "Name", "Age", and "Title", each of which have blank areas under them.`}
            />
          </div>
          <div className="p-4 items-center">
            <ReactMarkdown className="font-work-sans md:text-2xl">
              {content.capacity}
            </ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-28 mb-24">
          <div className="w-full lg:w-1/2 p-4 flex-shrink-0">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.margins}
            </ReactMarkdown>
          </div>
          <div className="relative rounded-55 bg-pink bg-opacity-25 p-5 mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.marginsPrompt}
            </ReactMarkdown>
          </div>
        </div>
        <GuideFooter link="/guide/complete" />
      </div>
    </Layout>
  );
}

export default GuidePage;
