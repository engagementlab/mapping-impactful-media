import React from 'react';
import Image from '../../components/Image';
import Layout from '../../components/Layout';
import Map from '../../components/Map';

function GuideMapPage() {
  return (
    <Layout>
        <div className="container mx-auto mt-14 mb-14 xl:mt-48">

            <div className="absolute">

            <Image
                id="map-bg"
                imgId="map"
                alt="A cartoonish drawing of a small town"
                width={922}
            />
            </div>
            <div className="absolute">
                <Map />
            </div>
        </div>
    </Layout>
  );
}

export default GuideMapPage;
