import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Image from '../../components/Image';
import Layout from '../../components/Layout';

function GuideEndPage() {
  const query = useStaticQuery(graphql`
    query GuideEndQuery {
      elApi {
        allGuideLastSection {
          intro
          reflect
          readMore
          share
        }
      }
    }
  `);
  const content = query.elApi.allGuideLastSection[0];
  const headerColors = [
    `text-orange`,
    `text-peach`,
    `text-bee`,
    `text-pink`,
    `text-hibiscus`,
  ];
  const header = `j o u r n e y`.split(` `);
  const header2 = `c o m p l e t e !`.split(` `);
  let colorI = -1;
  let colorI2 = 1;

  return (
    <Layout>
      <div className="w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bourbon">
          <p className="md:inline-block">
            {header.map((h, i) => {
              colorI++;
              if (colorI > 4) colorI = 0;
              return (
                <span key={i} className={`px-1 ` + headerColors[colorI]}>
                  {h}
                </span>
              );
            })}
          </p>

          <p className="md:inline-block ml-4">
            {header2.map((h, i) => {
              colorI2++;
              if (colorI2 > 4) colorI2 = 0;
              return (
                <span key={i} className={`px-1 ` + headerColors[colorI2]}>
                  {h}
                </span>
              );
            })}
          </p>
        </h2>
      </div>
      <div className="container mx-auto max-w-5xl mb-28 px-4 flex flex-col items-center text-center">
        <div className="md:w-5/12">
          (Placeholder)
          <Image
            id="girl-img"
            imgId="girl-2"
            width={541}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
          />
        </div>
        <ReactMarkdown className="text-4xl">{content.intro}</ReactMarkdown>
      </div>
      <div
        className="container mx-auto mb-28 flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-1/2 flex-shrink-0">
          <div className="w-full flex justify-center">
            <ReactMarkdown className="font-work-sans text-3xl leading-10">
              {content.reflect}
            </ReactMarkdown>
          </div>
        </div>
        <Image
          imgId="girl-2"
          width={753}
          alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it.`}
        />
      </div>
      <div
        className="container mx-auto mb-28 flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-1/2 flex-shrink-0">
          <Image
            imgId="professor"
            width={726}
            alt={`A cartoonish drawing of a professorial-looking person in front of a chalkboard. They are holding a red book with the title "Civic Media", and the chalkboard has the words "How can media literacy be used to empower diverse voices?" on it.`}
          />
        </div>
        <div className="lg:mt-32"></div>
        <ReactMarkdown className="font-work-sans text-3xl leading-10">
          {content.readMore}
        </ReactMarkdown>
      </div>

      <div className="w-full flex flex-col text-center items-center">
        <ReactMarkdown className="md:w-2/5 font-work-sans text-3xl leading-10">
          {content.share}
        </ReactMarkdown>
        <Image
          imgId="boy-1"
          width={597}
          alt="A cartoonish drawing of a boy tending a garden"
          className="mt-9"
        />
      </div>
    </Layout>
  );
}

export default GuideEndPage;
