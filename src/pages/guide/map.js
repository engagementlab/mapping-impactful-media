import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Map from '../../components/Map';

function GuideMapPage() {
  const [mapActive, setMapActive] = useState(false);
  const [mapWidth, setMapWidth] = useState(false);
  const [mapHeight, setMapHeight] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const width = document.querySelector(`#map-container`).clientWidth;
      const height = document.querySelector(`#map-container`).clientHeight;
      setMapWidth(width);
      setMapHeight(height);
      setMapActive(true);
      clearTimeout(timeout);
    }, 500);
  });

  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-48 xl:w-11/12">
        <div className="flex flex-col xl:flex-row">
          <div className="px-5 xl:px-0 font-work-sans text-3xl xl:text-5xl w-full xl:w-5/12 leading-10 xl:leading-64">
            <p>
              In the map, you have&nbsp;
              <span className="text-orange">five places</span> to visit.
            </p>
            <p className="mt-9">
              These five places are designed sequentially, but feel free to
              visit them in any particular order that you like.
            </p>
          </div>
          <div id="map-container" className="w-full xl:w-7/12 xl:ml-12">
            {mapActive && <Map width={mapWidth} height={mapHeight} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GuideMapPage;
