import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import SubHeader from '../../../components/SubHeader';

function GuideStandingPage() {
  //   const query = useStaticQuery(graphql`
  //     query GuideStandingQuery {
  //       elApi {
  //         allGuideText {
  //           who
  //         }
  //       }
  //     }
  //   `);
  //   const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="mb-28 flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-2/5 flex-shrink-0">
          <SubHeader text="Process v. Outcomes: A Note" color="bg-pink" />
          Coming soon.
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/context" />
      </div>
    </Layout>
  );
}

export default GuideStandingPage;
