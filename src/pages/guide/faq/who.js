import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import SubHeader from '../../../components/SubHeader';

function GuideWhoPage() {
  const query = useStaticQuery(graphql`
    query GuideWhoQuery {
      elApi {
        allGuideText {
          who
        }
      }
    }
  `);
  const content = query.elApi.allGuideText[0];
  return (
    <Layout>
      <div
        className="mb-28 flex flex-col lg:flex-row
      "
      >
        <div className="lg:w-2/5 flex-shrink-0">
          <SubHeader text="Who Is This Guide For?" color="bg-peach" />
          <Image
            id="professor-img"
            imgId="professor"
            width={592}
            alt={`A cartoonish drawing of a professorial-looking person in front of a chalkboard. They are holding a red book with the title "Civic Media", and the chalkboard has the words "How can media literacy be used to empower diverse voices?" on it.`}
          />
        </div>
        <div
          className="px-5 font-work-sans text-xl md:text-2xl markdown
      "
        >
          <ReactMarkdown>{content.who}</ReactMarkdown>
        </div>
      </div>
      <div className="text-center">
        <Button label="Back" link="/guide/faq" />
      </div>
    </Layout>
  );
}

export default GuideWhoPage;
