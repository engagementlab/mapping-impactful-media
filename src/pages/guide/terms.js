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

 <div className="container mx-auto mt-14 mb-14 xl:mt-48 flex flex-col">
     <div className="bg-peach rounded-3xl">

      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
        >
        <p className="inline-block text-footnote font-bourbon text-3xl uppercase">what does equity mean to us?</p>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
        >
        <div className="pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi enim erit isdem istis fortasse iam utendum. Omnis enim est natura diligens sui. Duo Reges: constructio interrete. Ita multa dicunt, quae vix intellegam.

Summum ením bonum exposuit vacuitatem doloris; An hoc usque quaque, aliter in vita? Quae cum dixisset paulumque institisset, Quid est? Qua tu etiam inprudens utebare non numquam. Nulla erit controversia.

Scisse enim te quis coarguere possit? Quid est enim aliud esse versutum? Illum mallem levares, quo optimum atque humanissimum virum, Cn. Etenim semper illud extra est, quod arte comprehenditur.

Quonam, inquit, modo? Sed quid sentiat, non videtis. Bonum integritas corporis: misera debilitas. Id mihi magnum videtur.

Id Sextilius factum negabat. Illa tamen simplicia, vestra versuta. Confecta res esset. Eam tum adesse, cum dolor omnis absit; Memini vero, inquam; Sint modo partes vitae beatae. Illa videamus, quae a te de amicitia dicta sunt. Quam ob rem tandem, inquit, non satisfacit? Nescio quo modo praetervolavit oratio.
</div>
          </div>
      </div>
    </div>
    </Layout>
  );
}

export default GuideTermsPage;
