import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ReactHtmlParser from 'react-html-parser';
import ReactMarkdown from 'react-markdown';
import Image from '../components/Image';
import Layout from '../components/Layout';

function ReportPage() {
  //   const aboutContent = useStaticQuery(graphql`
  //     query ReportQuery {
  //       elApi {
  //         allMimAboutPages {
  //           intro
  //           assumptions
  //           phase1Html
  //           phase2Html
  //           phase3Html
  //         }
  //       }
  //     }
  //   `);

  return (
    <Layout>
      <div id="report">Coming soon</div>
    </Layout>
  );
}
export default ReportPage;
