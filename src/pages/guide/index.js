import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Button from '../../components/Button';
import Image from '../../components/Image';
import Layout from '../../components/Layout';

function GuideIndexPage() {
  const content = useStaticQuery(graphql`
    query GuideWelcomeQuery {
      elApi {
        allGuideText {
          welcome
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="px-5 md:px-0 flex justify-center flex-shrink-0 flex-col lg:w-2/5 items-center">
          <h1 className="font-bourbon text-center w-full md:w-8/12 lg:w-3/4 text-2xl md:text-4xl text-sunny">
            Field Guide To <br />
            Equitable Media Literacy Practice
          </h1>
          <Image
            imgId="guide-landing"
            width={606}
            alt="A cartoon-like drawing of a map, containing imagery of trees, a river, mountains, and a drawn path over a trail."
          />
        </div>
        <div className="flex flex-col mb-14 font-work-sans text-2xl md:text-3xl lg:ml-16 text-center items-center">
          <svg
            viewBox="0 0 97 171"
            width="97.284px"
            height="171.5px"
            className="block mt-8"
          >
            <g transform="matrix(0.921229, 0, 0, 0.92529, -43.433609, -13.628546)">
              <path
                style={{ fill: `#F19757` }}
                d="M 143.79 95.92 C 139.67 108.88 133.81 121.11 128.14 133.42 C 119.47 152.25 110.05 170.71 100.19 189.1 C 99.76 188.87 99.24 188.78 99.08 188.49 C 82.41 156.64 65.85 124.74 53.75 90.78 C 49.56 79.02 46.37 67.17 49.48 54.44 C 56.49 25.78 84.95 10.12 109.75 15.93 C 109.78 18.14 107.81 18.09 106.62 18.2 C 103.38 18.48 102.82 20.38 102.83 23.09 C 102.84 27.11 102.97 31.13 102.61 35.15 C 102.36 37.88 101.19 39.61 98.44 40.13 C 89.58 41.92 82.62 46.22 79.04 54.91 C 74.97 64.8 79.24 76.6 88.93 82.35 C 97.72 87.58 110.33 85.22 116.93 77.12 C 123.92 68.53 123.75 56.32 116.55 48.37 C 113.9 45.44 110.87 43.11 107.11 41.78 C 105.73 41.29 104.16 41 103.6 39.32 C 103.21 36.15 104.85 34.57 107.8 34.13 C 109.15 33.93 110.71 33.97 110.99 32.27 C 111.69 27.97 114.7 27.32 118.27 27.35 C 118.83 27.35 119.45 27.35 120.23 26.44 C 116.86 26.35 115.25 23.31 112.31 22.65 C 110.22 22.18 107.71 21.55 108.44 18.8 C 109.07 16.45 111.4 16.2 113.64 16.84 C 130.86 21.58 142.36 32.43 148.32 49.22 C 146 50.08 144.72 49.54 143.93 47.1 C 143.4 45.46 143.35 43.64 142 42.32 C 142.74 47.48 142.31 52.63 142.37 57.76 C 142.45 64.45 142.56 71.15 142.34 77.84 C 142.12 83.94 142.76 89.94 143.79 95.92 Z"
              />
              <path
                style={{ fill: `#F19757` }}
                d="M 143.79 95.92 C 141.26 91.69 140.98 87.08 141.04 82.27 C 141.21 68.32 141.1 54.36 141.1 40.06 C 143.32 42.04 145.59 43.33 144.87 46.78 C 144.37 49.2 146.78 48.88 148.3 49.21 C 152.79 60.3 152.33 71.38 148.28 82.46 C 145.91 84.02 146.45 86.47 146.36 88.73 C 145.87 91.26 145.08 93.68 143.79 95.92 Z"
              />
              <path
                style={{ fill: `#F19757` }}
                d="M 113.62 16.83 C 112.47 17.1 111.3 17.31 110.18 17.67 C 109.44 17.91 108.9 18.49 108.96 19.34 C 109.03 20.35 109.71 21.26 110.59 21.2 C 113.65 20.99 115.88 21.99 117.56 24.64 C 117.9 25.18 119.52 24.93 120.56 25.01 C 121.59 25.09 122.88 24.94 122.94 26.39 C 123 27.84 121.91 28.45 120.59 28.55 C 119.55 28.63 118.49 28.66 117.45 28.59 C 114.38 28.37 112.06 28.85 112.33 32.8 C 112.46 34.72 111.47 36.16 109.3 35.47 C 105.41 34.24 104.48 36.38 104.26 39.54 C 102.12 40.94 100.03 41.02 98.03 39.27 C 101.29 38.61 101.51 35.99 101.59 33.45 C 101.7 29.76 101.7 26.06 101.6 22.36 C 101.51 19.13 101.45 16.25 106.2 17.15 C 107.22 17.34 108.94 17.33 109.76 15.9 C 111.1 15.94 112.49 15.84 113.62 16.83 Z"
              />
              <path
                style={{ fill: `#F19757` }}
                d="M 146.37 88.74 C 146.58 86.52 141.84 82.78 148.29 82.47 C 148.12 84.7 147.36 86.75 146.37 88.74 Z"
              />
              <path
                style={{ fill: `#FEFEFE` }}
                d="M 98.02 39.28 C 100.1 39.37 102.17 39.46 104.25 39.55 C 117.17 44.11 123.46 52.02 123.25 63.48 C 123.03 75.3 113.73 85.28 102.09 86.19 C 89.43 87.18 78.56 78.84 76.62 66.66 C 74.73 54.82 82.16 43.29 93.66 40.25 C 95.09 39.87 96.56 39.6 98.02 39.28 Z"
              />
            </g>
          </svg>
          <ReactMarkdown>{content.elApi.allGuideText[0].welcome}</ReactMarkdown>
          <Button label="Enter" link="/guide/start" />
        </div>
      </div>
    </Layout>
  );
}

export default GuideIndexPage;
