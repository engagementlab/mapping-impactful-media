import React from 'react';
import Image from '../../components/Image';
import Layout from '../../components/Layout';
import Map from '../../components/Map';

function GuideMapPage() {
  return (
    <Layout>
        <div className="container mx-auto mt-14 mb-14 xl:mt-48">

            <div className="absolute">
                <Map />
            </div>
            <div className="absolute">

            <Image
              imgId="map"
              width={922}
            />
            </div>
        </div>
    </Layout>
  );
}

export default GuideMapPage;
