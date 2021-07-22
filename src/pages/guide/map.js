import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Layout from '../../components/Layout';
import Map from '../../components/Map';

function GuideMapPage() {
  const [mapActive, setMapActive] = useState(false);
  const [mapWidth, setMapWidth] = useState(false);
  const [mapHeight, setMapHeight] = useState(false);
  useEffect(() => {
    window.setTimeout(() => {
      const width = document.querySelector('#map-container').clientWidth;
      const height = document.querySelector('#map-container').clientHeight;
      setMapWidth(width);
      setMapHeight(height);
      setMapActive(true);
    }, 100);
  });

  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-48">
        <div className="flex">
          <div className="font-work-sans text-5xl w-1/2">
            In the map, you have five places to visit. (blurb or directions on
            interacting with map?)
          </div>
          <div id="map-container" className="w-1/2">
            {mapActive && <Map width={mapWidth} height={mapHeight} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GuideMapPage;
