import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

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
      <div className="container mx-auto mt-14 mb-14 xl:mt-48 md:w-11/12">
        <div className="flex flex-col md:flex-row">
          <div className="font-work-sans text-5xl w-full md:w-1/2">
            In the map, you have&nbsp;
            <span className="text-orange">five places</span> to visit.
          </div>
          <div id="map-container" className="w-full md:w-1/2">
            {mapActive && <Map width={mapWidth} height={mapHeight} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GuideMapPage;
