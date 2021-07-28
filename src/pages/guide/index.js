import React from 'react';
import Button from '../../components/Button';
import Image from '../../components/Image';

import Layout from '../../components/Layout';

function GuideIndexPage() {
  return (
    <Layout>
      <div className="container mx-auto flex justify-center mb-14">
        <h1 className="font-bourbon text-center w-full md:w-8/12 lg:w-3/4 text-2xl md:text-4xl text-sunny">
          Field Guide To <br />
          Equitable Media Literacy Practice
        </h1>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="px-5 md:px-0 text-center">
          <Image
            imgId="guide-landing"
            width={606}
            alt="A cartoon-like drawing of a map, containing imagery of trees, a river, mountains, and a drawn path over a trail."
          />
          <Button label="Enter" link="/guide/welcome" />
        </div>
      </div>
    </Layout>
  );
}

export default GuideIndexPage;
