import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ReactMarkdown from 'react-markdown';

import Image from '../components/Image';
import Button from '../components/Button';
import Layout from '../components/Layout';

function IndexPage() {
  const homeContent = useStaticQuery(graphql`
    query HomeQuery {
      elApi {
        allMimHomePages {
          intro
          about
          facebook
          partners
        }
        allMimPeople(where: { showOnHome: true }) {
          name
          title
          bio
          image {
            publicId
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <div className="lg:mx-20 xl:ml-96 flex flex-col-reverse lg:flex-row items-center">
          <h1 className="w-3/4 lg:w-1/3 font-work-sans font-bold text-orange text-3xl md:text-6xl">
            Exploring Media literacy practices for just and equitable futures.
          </h1>
          <div>
            <Image
              imgId="map"
              alt="A cartoonish drawing of an aerial map of a town, showing a library, parks, a city hall, several signs, and people doing various activities."
              width={600}
            />
          </div>
        </div>

        {/* // <!-- Intro --> */}
        <div className="my-10 p-10 xl:px-20 xl:mx-72 xl:w-5/12 bg-peach md:text-xl text-center">
          <ReactMarkdown>
            {homeContent.elApi.allMimHomePages[0].intro}
          </ReactMarkdown>
        </div>

        {/* // <!-- About --> */}
        <div className="mx-auto p-5 xl:mt-48 xl:ml-90 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-3/4 xl:w-5/12 xl:pt-32 xl:ml-36 leading-9">
            <ReactMarkdown>
              {homeContent.elApi.allMimHomePages[0].about}
            </ReactMarkdown>
            <Button label={`Learn More`} link="/about" small={true} />
          </div>
          <div className="xl:ml-48">
            <Image
              imgId="boy-2"
              width={311}
              alt={`A young person with brown skin and pink hair is holding up a white sign with orange letters that spell out "No Justice, No Peace!"`}
            />
          </div>
        </div>

        {/* <!-- Word Cloud --> */}
        <div className="mx-auto p-5 xl:w-1/2 font-bourbon text-2xl text-center">
          <span className="bg-peach px-3">Care</span>
          &nbsp;
          <span className="bg-bee text-white px-10">Equity</span>
          <div className="my-4">
            <span className="bg-bee text-white px-3">Civic Agency</span>
            &nbsp; &nbsp; &nbsp;
            <span className="bg-hibiscus">Critical Consciousness</span>
          </div>
          <div className="my-4">
            <span className="bg-hibiscus">Anti-Racism</span>
            &nbsp; &nbsp; &nbsp;
            <span className="bg-peach px-2">Imagination</span>
          </div>
          <div className="my-4">
            <span className="bg-bee text-white px-1">Anti-Oppression</span>
            &nbsp; &nbsp; &nbsp;
            <span className="bg-peach px-1">Community</span>
          </div>
          <div className="my-4">
            <span className="bg-hibiscus px-2">Movement Building</span>
            &nbsp; &nbsp; &nbsp;
            <span className="bg-bee text-white px-2">Emancipation</span>
          </div>
          <div className="my-4">
            <span className="bg-peach px-2">Creative Initiatives</span>
          </div>
        </div>

        {/* <!-- Team --> */}
        <div className="my-20 pb-10 w-full xl:ml-96 xl:w-5/12 bg-hibiscus">
          <h2 className="relative -top-8 text-3xl md:text-5xl font-work-sans">
            Meet the Team
          </h2>
          <p className="p-5 leading-9">
            Mapping impactful media literacy practices involve the dedicated
            efforts of critical media literacy scholars, practitioners and
            activists from across the United States. The lead research team is
            made up of four scholars and supported by our advisory group, design
            team, and research partners in Australia.
          </p>
          <Button
            label="See the full team"
            link="/team"
            className="mx-10"
            small={true}
          />
        </div>

        {/* <!-- Partners --> */}
        <div className="relative w-full md:w-1/2 z-10 h-24 font-work-sans bg-yellow bg-opacity-75 text-3xl md:text-5xl">
          <h2 className="relative -top-8 mt-20">Partners</h2>
        </div>
        <div className="relative -top-5 w-full lg:w-10/12 xl:w-11/12 lg:ml-20 p-5 bg-geranium">
          <div className="flex flex-col items-center">
            <div className="xl:w-1/3 leading-9 text-center">
              <ReactMarkdown>
                {homeContent.elApi.allMimHomePages[0].partners}
              </ReactMarkdown>
            </div>
            <h3
              className="font-bold font-work-sans pt-20 text-2xl
      "
            >
              Lead Partner
            </h3>
            <Image
              className="self-center pt-16"
              imgId="namle"
              width={425}
              alt="Logo for National Association for Media Literacy Education (NAMLE)"
            />

            <h3
              className="font-bold font-work-sans pt-20 text-2xl
      "
            >
              Research Partners
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-around w-full h-96 lg:h-60">
              <Image
                imgId="emerson"
                width={243}
                alt="Logo for Emerson College"
              />
              <Image
                imgId="syracuse"
                width={263}
                alt="Logo for Syracuse University"
              />
              <Image
                imgId="iowa"
                width={136}
                alt="Logo for University of Iowa"
              />
              <Image
                imgId="amla"
                width={177}
                alt="Logo for The Australian Media Literacy Alliance"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
