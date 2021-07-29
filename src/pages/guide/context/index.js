import React from 'react';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

function GuideContextPage() {
  return (
    <Layout>
      <div
        className="container mx-auto px-4 flex flex-col font-work-sans text-2xl md:text-4xl text-center
      "
      >
        <p>
          Before you enter into this space, we have provided some background,
          context, and information that will help your journey here be
          meaningful, transparent, and equity-driven.
        </p>
      </div>
      <div
        className="container mx-auto flex flex-col lg:flex-row justify-evenly px-5 mb-48
      "
      >
        <div className="lg:w-2/6 flex-shrink-0 text-center lg:mr-5">
          <Button
            label="Who Is This Guide For?"
            link="/guide/context/who"
            color="bg-peach"
            margin={5}
          />
          <Button
            label="How To Use This Guide"
            link="/guide/context/how"
            color="bg-peach"
            margin={5}
          />
          <Button
            label="How Do We Define Our Terms?"
            link="/guide/context/terms"
            color="bg-peach"
            margin={5}
          />
        </div>
        <div className="text-center lg:ml-5 lg:w-2/6">
          <Button
            label="Process v. Outcomes: A Note"
            link="/guide/context/process"
            color="bg-peach"
            margin={4}
          />
          <Button
            label="Standing on the Shoulders Of Media Literacy's Giants"
            link="/guide/context/standing"
            color="bg-peach"
            margin={4}
            className=" max-w-xl"
          />
          <Button
            label="What Else You Need To Know"
            link="/guide/context/what-else"
            color="bg-peach"
            margin={4}
          />
        </div>
      </div>
    </Layout>
  );
}

export default GuideContextPage;
