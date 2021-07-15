import React, {
  useEffect,
} from 'react';
import Image from '../../components/Image';

import Layout from '../../components/Layout';

function GuideIndexPage() {
  return (
    <Layout>
        <div className="flex flex-col">
            <Image imgId="guide-landing" width={606} alt="A cartoon-like drawing of a map, containing imagery of trees, a river, mountains, and a drawn path over a trail." />
        </div>
    </Layout>
  );
}

export default GuideIndexPage;
