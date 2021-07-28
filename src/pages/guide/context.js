import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';
import Button from '../../components/Button';

function GuideWelcomePage() {
  return (
    <Layout>
      <div
        className="container mx-auto mb-14 px-4 flex flex-col font-work-sans text-2xl md:text-4xl text-center
      "
      >
        <p>
          Before you enter into this space, we have provided some background,
          context, and information that will help your journey here be
          meaningful, transparent, and equity-driven.
        </p>
      </div>
      <div
        className="container mx-auto flex
      "
      >
        <div className="lg:w-1/2 flex-shrink-0 text-center">
          <Button
            label="who is this guide for?"
            link="/guide/start"
            className="my-0"
          />
          <Button label="who is this guide for?" link="/guide/start" />
          <Button label="who is this guide for?" link="/guide/start" />
        </div>
        <div className="text-center">
          <Button
            label="who is this guide for?"
            link="/guide/start"
            className="my-0"
          />
          <Button label="who is this guide for?" link="/guide/start" />
          <Button label="who is this guide for?" link="/guide/start" />
        </div>
      </div>
    </Layout>
  );
}

export default GuideWelcomePage;
