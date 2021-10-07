import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
// import Button from '../components/Button';
import Image from '../components/Image';

function ReportPage() {
  const content = useStaticQuery(graphql`
    query ReportQuery {
      elApi {
        allMimReportPages {
          blurb
          reportFile {
            publicUrl
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div
        id="report"
        className="container mx-auto mt-14 mb-14 xl:mt-16 flex flex-col md:flex-row items-center font-work-sans text-xl md:text-2xl"
      >
        {/* Desktop+ */}
        <div className="w-1/2 hidden xl:block">
          <Image
            imgId="report-4"
            width={227}
            alt="A cartoonish drawing of a boy tending a garden in front of a large orange circle."
          />
          <Image
            imgId="report-2"
            width={227}
            alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it. All of this is on top of a peach-colored circle.`}
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center mx-12">
          <h2 className="w-full font-bourbon text-3xl">
            Mapping Impactful
            <br />
            Media Literacy Practices:
            <br />
            The Report
          </h2>

          {/* Mobile only */}
          <div className="w-full xl:hidden flex flex-row">
            <Image
              imgId="report-4"
              width={175}
              alt="A cartoonish drawing of a boy tending a garden in front of a large orange circle."
            />
            <Image
              imgId="report-2"
              width={175}
              alt={`A cartoonish drawing of the side-view of the bottom three-quarters of a woman's head. On the other top quarter above her head are drawings of a wifi signal symbol, flowers and plants, and circles, as well as a red thought bubble that has the words "How does this make me feel?" in it. All of this is on top of a peach-colored circle.`}
            />
          </div>
          <ReactMarkdown className="text-center leading-10 xl:mx-20">
            {content.elApi.allMimReportPages[0].blurb}
          </ReactMarkdown>
          {/* <Button
            label="Download Full Report"
            link={content.elApi.allMimReportPages[0].reportFile.publicUrl}
            className="xl:w-1/2"
          /> */}
        </div>
        <div className="w-1/2 hidden xl:block">
          <Image
            imgId="report-3"
            width={227}
            alt={`A cartoonish drawing of a young woman carrying a bag full of carrots and bread. The bag has the words "Save the Earth" on it. The drawing is on top of a pink circle.`}
          />
          <Image
            imgId="report-1"
            width={227}
            alt={`A cartoonish drawing of a professorial-looking person in front of a chalkboard. They are holding a red book with the title "Civic Media", and the chalkboard has the words "How can media literacy be used to empower diverse voices?" on it. The drawing is on top of a yellow circle.`}
          />
        </div>
      </div>
    </Layout>
  );
}
export default ReportPage;
