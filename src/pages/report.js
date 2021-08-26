import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

function ReportPage() {
  const content = useStaticQuery(graphql`
    query ReportQuery {
      elApi {
        allMimReportPages {
          blurb
          image {
            publicId
          }
          reportFile {
            publicUrl
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div id="report">Coming soon</div>
    </Layout>
  );
}
export default ReportPage;
