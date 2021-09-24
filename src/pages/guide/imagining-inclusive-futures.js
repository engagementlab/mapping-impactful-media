import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import SubHeader from '../../components/SubHeader';
import Image from '../../components/Image';
import GuideFooter from '../../components/GuideFooter';

function GuidePage() {
  const query = useStaticQuery(graphql`
    query Guide3Query {
      elApi {
        allGuideSection3 {
          intro
          imagination
          exercise
          alternatives
          where1Blurb
          where2Blurb
          voice
          voicePrompt
          practicing
          practicingPrompt
        }
      }
    }
  `);
  const content = query.elApi.allGuideSection3[0];

  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-16 flex flex-col items-center">
        <SubHeader
          text="3. Imagining (More) Inclusive Futures"
          color="bg-pink"
          className="text-center w-full md:w-8/12"
        />
        <div className="flex flex-col items-center mt-28 mb-24">
          <div className="w-full p-4 flex-shrink-0 itemsz-center">
            <ReactMarkdown className="font-work-sans text-2xl px-4">
              {content.intro}
            </ReactMarkdown>
          </div>
          <div className="rounded-55 bg-pink bg-opacity-25 p-5 mx-4 mt-10 xl:mt-20 lg:p-16">
            <div className="relative mt-9 lg:mt-0">
              <svg
                viewBox="0 0 53 74"
                width="53"
                height="74"
                className="absolute -top-28"
              >
                <g transform="matrix(1, 0, 0, 1, -13.450001, -3.2)">
                  <g>
                    <path
                      className="st0"
                      fill="#FCE790"
                      d="M38.45,3.2c0.11,0,0.21,0,0.32,0c0.79,0.13,1.59,0.13,2.38,0c0.16,0,0.32,0,0.48,0
			c0.83,0.13,1.67,0.13,2.51,0.17c2.23,0.12,4.3,0.83,6.31,1.71c3.06,1.33,5.81,3.15,8.12,5.53c3.5,3.61,5.9,7.84,6.81,12.78
			c0.4,2.15,0.38,4.36,0.28,6.55c-0.08,1.8-0.15,3.59-0.66,5.34c-1.06,3.64-2.8,6.92-5.31,9.79c-0.99,1.13-2.13,2.1-3.19,3.15
			c-2.42,2.39-4.13,5.21-4.99,8.5c-0.09,0.33-0.19,0.65-0.41,0.92c-0.07,0.05-0.15,0.09-0.23,0.11c-2.56-0.15-5.13-0.04-7.69-0.07
			c-1.02-0.01-1.26-0.21-1.2-1.18c0.18-3.04,0.33-6.09,0.63-9.13c0.07-0.69,0.51-1.04,1.14-1.25c1.26-0.43,2.39-1.09,3.45-1.9
			c1.91-1.47,3.11-3.41,3.89-5.61c0.73-2.03,1.05-4.14,0.72-6.31c-0.22-1.43-1.42-2.34-2.74-1.99c-0.8,0.21-1.17,0.64-1.19,1.44
			c-0.03,1.12,0.13,2.24-0.02,3.36c-0.27,2.09-0.94,3.97-2.45,5.56c-2.06,2.18-5.87,2.72-8.56,1.24c-3.13-1.72-5.15-4.26-5.79-7.79
			c-0.09-0.52-0.05-1.04-0.07-1.56c-0.04-1.22-0.65-1.88-1.74-1.91c-1.22-0.03-2.09,0.73-2.18,1.91c-0.15,1.86,0.17,3.66,0.97,5.34
			c2.01,4.22,5.12,7.24,9.76,8.55c0.65,0.18,0.91,0.56,0.86,1.2c-0.12,1.51-0.24,3.01-0.36,4.52c-0.12,1.46-0.13,2.92-0.27,4.37
			c-0.09,0.97-0.21,1.13-1.19,1.14c-1.88,0.01-3.76,0.01-5.64,0c-0.64,0-1.27,0.05-1.9,0.09c-0.08-0.01-0.16-0.04-0.24-0.09
			c-0.27-0.27-0.36-0.63-0.45-0.98c-0.94-3.41-2.71-6.36-5.3-8.76c-1.53-1.42-2.99-2.88-4.22-4.55c-2.04-2.75-3.44-5.81-4.21-9.13
			c-0.24-1.01-0.21-2.07-0.3-3.11c-0.02-0.23,0.08-0.47-0.08-0.68c0-0.16,0-0.31,0-0.47c0.17-0.32,0.04-0.66,0.08-0.99
			c0-0.38,0-0.77,0-1.15c-0.04-0.33,0.09-0.68-0.08-1c0-0.16,0-0.31,0-0.47c0.15-0.74,0.11-1.49,0.2-2.24
			c0.48-4.34,2.37-8.09,5.08-11.45C23.45,8.09,28.21,5,34.06,3.63c1.19-0.28,2.41-0.25,3.61-0.35C37.93,3.25,38.2,3.35,38.45,3.2z"
                    ></path>
                    <path
                      className="st1"
                      fill="#F9E790"
                      d="M41.15,3.2c-0.79,0.25-1.59,0.25-2.38,0C39.56,3.2,40.36,3.2,41.15,3.2z"
                    ></path>
                    <path
                      className="st2"
                      fill="#F8E171"
                      d="M14.6,27.81c0,0.42,0,0.85,0,1.27c-0.06,0.1-0.1,0.1-0.15-0.01c0-0.42,0-0.84,0-1.25
			C14.5,27.71,14.55,27.71,14.6,27.81z"
                    ></path>
                    <path
                      className="st1"
                      fill="#F9E790"
                      d="M14.6,27.81c-0.05,0-0.1,0.01-0.15,0.01c0-0.31,0-0.63,0-0.94C14.71,27.15,14.58,27.49,14.6,27.81z"
                    ></path>
                    <path
                      className="st1"
                      fill="#F9E790"
                      d="M14.46,29.07c0.05,0,0.1,0,0.15,0.01c-0.02,0.32,0.11,0.65-0.15,0.93C14.46,29.7,14.46,29.38,14.46,29.07z"
                    ></path>
                    <path
                      className="st3"
                      fill="#74BBE2"
                      d="M50.96,57.58c0.85,0.01,1.69,0.04,2.54,0.01c0.54-0.02,0.75,0.13,0.74,0.7c-0.02,5.93-0.02,11.86,0,17.79
			c0,0.62-0.21,0.79-0.83,0.79c-6.03-0.02-12.07-0.01-18.1-0.01c-3.1,0-6.19-0.01-9.29,0.01c-0.61,0-0.82-0.15-0.82-0.79
			c0.02-5.9,0.02-11.81,0-17.71c0-0.65,0.22-0.8,0.83-0.78c1.03,0.04,2.06,0,3.09-0.01c0.05,0.02,0.09,0.02,0.14-0.01
			c1.8-0.1,3.6-0.11,5.39-0.02c1.96,0.09,3.89-0.5,5.82-0.27c3.44,0.41,6.9,0.14,10.35,0.3C50.86,57.6,50.91,57.6,50.96,57.58z"
                    ></path>
                    <path
                      className="st4"
                      fill="#F09D6F"
                      d="M50.82,57.57c-5.26,0.01-10.52,0.02-15.78,0.02c-1.93,0-3.86-0.02-5.79-0.02c0.29-0.2,0.62-0.12,0.93-0.12
			c2.2-0.01,4.39-0.03,6.59,0.01c0.71,0.01,0.87-0.23,0.9-0.9c0.14-2.83,0.24-5.67,0.6-8.49c0.14-1.07,0.14-1.06-0.97-1.38
			c-3.36-0.98-5.92-3.04-7.96-5.78c-1.3-1.75-2.2-3.68-2.57-5.84c-0.17-0.96-0.15-1.93-0.05-2.89c0.12-1.2,1.31-1.95,2.79-1.85
			c1.07,0.07,1.78,0.93,1.78,2.19c0.01,4.26,2.17,7.26,5.84,9.17c4.11,2.14,8.83-0.21,10.04-4.85c0.4-1.51,0.42-3.03,0.35-4.58
			c-0.08-1.61,0.52-2.29,1.91-2.4c1.21-0.1,2.5,0.9,2.65,2.13c0.56,4.51-0.67,8.48-3.86,11.78c-1.24,1.28-2.76,2.19-4.49,2.7
			c-0.61,0.18-0.81,0.51-0.85,1.13c-0.17,2.91-0.38,5.82-0.59,8.73c-0.08,1.06-0.06,1.12,1.01,1.12c2.22,0,4.45,0,6.67,0
			C50.26,57.45,50.56,57.39,50.82,57.57z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <ReactMarkdown className="font-work-sans text-2xl list">
              {content.imagination}
            </ReactMarkdown>
          </div>
        </div>

        <div className="lg:w-2/3 px-6 py-4 mt-28 bg-pink font-bourbon text-2xl">
          Goal: To Inspire Opportunities To Imagine Better Futures, With And For
          Media And Our World.
        </div>

        <div className="flex flex-col items-center w-full mt-28 p-4">
          <ReactMarkdown className="font-work-sans text-2xl">
            {content.exercise}
          </ReactMarkdown>
          <ReactMarkdown className="text-2xl mt-10">
            {content.alternatives}
          </ReactMarkdown>

          <div className="flex flex-col w-full font-work-sans">
            <div className="flex flex-col lg:flex-row w-full p-4 leading-7 text-2xl justify-center">
              <div className="flex flex-col text-center items-center lg:border-r-4 border-pink">
                <h4 className="bg-pink w-full py-4 px-4 font-bourbon">
                  Where Do We Learn About This?
                </h4>
                <ReactMarkdown className="container mt-9 lg:w-9/12 leading-9 tracking-wide">
                  {content.where1Blurb}
                </ReactMarkdown>
              </div>
              <div className="flex flex-col text-center items-center">
                <h4 className="bg-pink bg-opacity-80 w-full py-4 px-4 font-bourbon">
                  Where Could We Start To Learn About This?
                </h4>
                <ReactMarkdown className="container mt-9 lg:w-9/12 leading-9 tracking-wide">
                  {content.where2Blurb}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <div className="w-full p-4 items-center">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.voice}
            </ReactMarkdown>
          </div>
          <div className="relative rounded-55 bg-pink bg-opacity-25 p-5 mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
            <ReactMarkdown className="font-work-sans text-2xl list">
              {content.voicePrompt}
            </ReactMarkdown>
          </div>
        </div>

        <div className="flex flex-col my-7 p-4">
          <div className="flex flex-col p-4">
            <ReactMarkdown className="font-work-sans text-2xl">
              {content.practicing}
            </ReactMarkdown>
            <div className="flex w-full justify-center items-center">
              <Image
                imgId="imagining-inclusive-futures"
                width={300}
                alt={`A cartoonish drawing of Planet Earth`}
              />
            </div>
            <div className="relative rounded-55 bg-pink bg-opacity-25 p-5 mx-4 lg:p-16 lg:ml-16 mt-9 lg:mt-0">
              <ReactMarkdown className="font-work-sans text-2xl">
                {content.practicingPrompt}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <GuideFooter link="/guide/with-communities" />
      </div>
    </Layout>
  );
}

export default GuidePage;
