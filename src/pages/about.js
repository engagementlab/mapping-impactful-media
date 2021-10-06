import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ReactHtmlParser from 'react-html-parser';
import ReactMarkdown from 'react-markdown';
import Image from '../components/Image';
import Layout from '../components/Layout';

import './about.scss';

function AboutPage() {
  const aboutContent = useStaticQuery(graphql`
    query AboutQuery {
      elApi {
        allMimAboutPages {
          intro
          assumptions
          phase1Html
          phase2Html
          phase3Html
          contactHtml
        }
      }
    }
  `);

  // We have to split phase 2/3 strings for layout purposes
  const { phase2Html } = aboutContent.elApi.allMimAboutPages[0];
  const phase2SplitAt = phase2Html.indexOf(`</h2>`) + 1;
  const { phase3Html } = aboutContent.elApi.allMimAboutPages[0];
  const phase3SplitAt = phase3Html.indexOf(`</h2>`) + 1;

  const phase2Heading = phase2Html.substring(0, phase2SplitAt + 5);
  const phase2Content = phase2Html.substring(phase2SplitAt + 5);
  const phase3Heading = phase3Html.substring(0, phase3SplitAt + 5);
  const phase3Content = phase3Html.substring(phase3SplitAt + 5);

  return (
    <Layout>
      <div id="about">
        <div className="container mx-auto flex justify-center mt-14 mb-14 xl:mt-16 xl:ml-90 text-2xl md:text-4xl text-sunny">
          <h1 className="font-bourbon text-center w-full md:w-8/12 lg:w-4/12">
            Mapping Impactful Media Literacy Practices
          </h1>
        </div>
        <div className="container mx-auto p-5 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/4 xl:w-5/12 xl:pt-32 xl:ml-36 font-work-sans">
            <ReactMarkdown>
              {aboutContent.elApi.allMimAboutPages[0].intro}
            </ReactMarkdown>
          </div>
          <div className="xl:ml-48">
            <Image
              imgId="boy-1"
              width={420}
              alt="A cartoonish drawing of a boy tending a garden"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="lg:w-3/4 xl:w-1/3 px-6 lg:px-24 py-16 font-work-sans bg-pink">
            <ReactMarkdown>
              {aboutContent.elApi.allMimAboutPages[0].assumptions}
            </ReactMarkdown>
          </div>
        </div>

        {/* <!-- Phases --> */}
        <h4 className="mb-28 mt-28 lg:ml-80 font-work-sans text-2xl lg:w-2/5 text-center">
          To address these assumptions, this project advances an “ecosystem
          approach” to research that is comprised of the following three phases:
        </h4>

        <div className="relative xl:w-3/4 xl:left-64">
          <Image
            className="relative z-10"
            imgId="girl-1"
            width={234}
            alt={`A cartoonish drawing of a young woman carrying a bag full of carrots and bread. The bag has the words "Save the Earth" on it.`}
          />
          <div className="relative h-40 -mt-64 w-full md:w-1/2 xl:w-2/5 bg-peach" />
          <div className="relative z-10 font-geotica text-9xl text-right md:text-left md:ml-64 xl:ml-80 -mt-20">
            1
          </div>
          <div className="p-4 xl:p-0 mt-14 md:ml-64 xl:ml-80 xl:w-2/5 font-work-sans leading-9">
            {ReactHtmlParser(aboutContent.elApi.allMimAboutPages[0].phase1Html)}
          </div>
        </div>

        <div className="relative xl:w-3/4 xl:left-64">
          <Image
            className="relative z-10"
            imgId="professor"
            width={480}
            alt={`A cartoonish drawing of a professorial-looking person in front of a chalkboard. They are holding a red book with the title "Civic Media", and the chalkboard has the words "How can media literacy be used to empower diverse voices?" on it.`}
          />
          <div className="relative h-40 -mt-64 md:w-1/2 md:left-1/2 bg-coral">
            <h1 className="font-geotica text-9xl text-right md:text-center md:w-9/12 pt-20">
              2
            </h1>
          </div>
          <div className="relative mt-14 md:left-1/2 md:w-1/3 lg:w-1/4 font-work-sans">
            {ReactHtmlParser(phase2Heading)}
          </div>
          <div className="p-4 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 font-work-sans leading-9">
            {ReactHtmlParser(phase2Content)}
          </div>
        </div>

        <div className="relative xl:w-3/4 xl:left-64">
          <Image
            className="relative z-10 md:left-1/3 lg:left-1/2 xl:top-36"
            imgId="girl-2"
            width={541}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
          />
          <div className="relative h-40 -mt-64 md:w-1/3 bg-bee">
            <div className="relative z-10 font-geotica text-9xl text-right lg:text-left pt-20 pr-5 lg:pl-40">
              3
            </div>
          </div>
          <div className="relative p-4 xl:p-0 mt-14 md:ml-64 xl:ml-80 md:w-1/2 lg:w-1/4 font-work-sans">
            {ReactHtmlParser(phase3Heading)}
          </div>
          <div className="p-4 mt-0 xl:mt-14 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 font-work-sans leading-9">
            {ReactHtmlParser(phase3Content)}
          </div>
        </div>
        <div className="p-4 mt-0 xl:mt-14 md:ml-64 xl:w-2/5 font-work-sans leading-9">
          <h2 className="relative mt-20">Contact</h2>
          {ReactHtmlParser(aboutContent.elApi.allMimAboutPages[0].contactHtml)}
        </div>
      </div>
    </Layout>
  );
}
export default AboutPage;
