import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import Button from '../components/Button';

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
        className="container mx-auto mt-14 mb-14 xl:mt-48 flex md:flex-row items-center font-work-sans text-xl md:text-2xl"
      >
        <div className="w-1/3">Images here</div>
        <div className="flex flex-col justify-center mx-12 text-center">
          <h2 className="font-bourbon text-3xl max-w-xl">
            Mapping Impactful Media Literacy Practices: The Report
          </h2>
          <ReactMarkdown>
            {content.elApi.allMimReportPages[0].blurb}
          </ReactMarkdown>
          <Button
            label="Download Full Report"
            link={content.elApi.allMimReportPages[0].reportFile.publicUrl}
          />
        </div>
        <div className="w-1/3">Images here</div>
      </div>
    </Layout>
  );
}
export default ReportPage;
