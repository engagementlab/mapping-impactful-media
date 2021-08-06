import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import SubHeader from '../../components/SubHeader';
import BackToMap from '../../components/BackToMap';
import Image from '../../components/Image';

function GuidePage() {
  const query = useStaticQuery(graphql`
    query Guide2Query {
      elApi {
        allGuideSection2 {
          intro
          caring
          caringBlurb
          caringForBlurb
          caringWith
          caringWithPrompt
          careful
          carefulPrompt
        }
      }
    }
  `);
  const content = query.elApi.allGuideSection2[0];
  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-48 flex flex-col items-center">
        <SubHeader
          text="2. Who Cares?"
          color="bg-orange"
          className="text-center w-full md:w-8/12"
        />
        <div className="flex flex-col xl:flex-row justify-between mt-28 mb-24">
          <div className="flex flex-col w-full xl:w-1/2 p-4 flex-shrink-0 items-center">
            <div>
              <Image
                imgId="boy-2"
                width={298}
                alt={`A young person with brown skin and pink hair is holding up a white sign with orange letters that spell out "No Justice, No Peace!"`}
              />
            </div>

            <div className="px-6 py-4 mt-28 bg-orange font-bourbon text-2xl">
              Goal: To develop a culture of care for media literacy learning
              environments through an emphasis on relationships
            </div>
          </div>
          <div>
            <ReactMarkdown className="font-work-sans text-2xl px-4">
              {content.intro}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex w-full p-4 leading-7 tracking-wider justify-center">
            <ReactMarkdown className="container w-11/12 lg:w-8/12 font-work-sans text-2xl ">
              {content.caring}
            </ReactMarkdown>
          </div>
          <div className="flex flex-col lg:flex-row w-full p-4 leading-7 text-2xl md:text-3xl">
            <div className="flex flex-col text-center items-center lg:border-r-4 border-orange">
              <h4 className="bg-orange bg-opacity-80 w-full py-4 font-bourbon">
                Caring About
              </h4>
              <ReactMarkdown className="container mt-9 lg:w-9/12 leading-9 tracking-wide font-work-sans">
                {content.caringBlurb}
              </ReactMarkdown>
            </div>
            <div className="flex flex-col text-center items-center">
              <h4 className="bg-peach w-full py-4 font-bourbon">Caring For</h4>
              <ReactMarkdown className="container mt-9 lg:w-9/12 leading-9 tracking-wide font-work-sans">
                {content.caringForBlurb}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full lg:w-1/2 p-4 flex-shrink-0">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.caringWith}
            </ReactMarkdown>
          </div>
          <div className="flex flex-col w-full xl:w-1/2 p-4 flex-shrink-0 items-center">
            <div className="w-full lg:w-1/2 p-4 flex-shrink-0">
              {/* <Image
                imgId="boy-2"
                width={298}
                alt={`A young person with brown skin and pink hair is holding up a white sign with orange letters that spell out "No Justice, No Peace!"`}
              /> */}
            </div>
            <div className="rounded-55 bg-orange bg-opacity-25 p-5 mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
              <ReactMarkdown className="font-work-sans md:text-2xl">
                {content.caringWithPrompt}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full lg:w-1/2 p-4 flex-shrink-0">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.careful}
            </ReactMarkdown>
          </div>
          <div className="flex flex-col w-full xl:w-1/2 p-4 flex-shrink-0 items-center">
            <div className="rounded-55 bg-orange bg-opacity-25 p-5 mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
              <ReactMarkdown className="font-work-sans md:text-2xl">
                {content.carefulPrompt}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="text-left w-full">
          <BackToMap />
        </div>
      </div>
    </Layout>
  );
}

export default GuidePage;
