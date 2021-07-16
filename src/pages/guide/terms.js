import React, { useRef, useState } from 'react';
import Image from '../../components/Image';

import Layout from '../../components/Layout';

function GuideTermsPage() {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');
  }
  return (
    <Layout>

 <div className="container mx-auto mt-14 mb-14 xl:mt-48 flex flex-col max-w-5xl">
     <div className="bg-peach rounded-55">

      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none text-center w-full"
        onClick={toggleAccordion}
        >
        <p className="inline-block text-footnote font-bourbon text-3xl uppercase">what does equity mean to us?</p>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-x-auto overflow-y-hidden transition-max-height duration-700 ease-in-out font-work-sans text-3xl px-16"
        >
        <div className="pb-10 overflow-hidden">Equity is the quality or value of being impartial, just, and fair. For this field guide, we see equity as a way to frame systemic and structural challenges to creating an impartial, just, and fair experience or environment.  In this guide, the word equity is frequently to refer to processes and goals that align with fairness and justice.</div>
          </div>
      </div>
    </div>
    </Layout>
  );
}

export default GuideTermsPage;
