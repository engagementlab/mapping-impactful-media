import React from 'react';

function CMSRedirect() {
  setTimeout(() => {
    window.location = `https://api.elab.emerson.edu/cms/mapping-impactful-media`;
  }, 2000);

  return (
    <div className="flex justify-center items-center absolute w-full h-full">
      <h1 className="font-bourbon text-5xl">
        Sending you to Engagement Lab CMS...
      </h1>
    </div>
  );
}

export default CMSRedirect;
