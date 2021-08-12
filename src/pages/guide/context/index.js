import React from 'react';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';

function GuideContextPage() {
  return (
    <Layout>
      <div
        className="container mx-auto px-4 flex flex-col font-work-sans text-2xl md:text-4xl text-center
      "
      >
        <p>
          Before you enter into this space, we have provided some background,
          context, and information that will help your journey here be
          meaningful, transparent, and equity-driven.
        </p>
      </div>
      <div
        className="container mx-auto flex flex-col lg:flex-row justify-evenly px-5 mb-48
      "
      >
        <div className="lg:w-2/6 flex-shrink-0 text-center lg:mr-5">
          <Button
            label="Who Is This Guide For?"
            link="/guide/context/who"
            hoverColor="hover:bg-peach"
            margin="my-4"
          />
          <Button
            label="How To Use This Guide"
            link="/guide/context/how"
            hoverColor="hover:bg-peach"
            margin="my-4"
          />
          <Button
            label="How Do We Define Our Terms?"
            link="/guide/context/terms"
            hoverColor="hover:bg-peach"
            margin="my-4"
          />
        </div>
        <div className="text-center lg:ml-5 lg:w-2/6">
          <Button
            label="Process v. Outcomes: A Note"
            link="/guide/context/process"
            hoverColor="hover:bg-peach"
            margin="my-4"
          />
          <Button
            label="Standing on the Shoulders Of Media Literacy's Giants"
            link="/guide/context/standing"
            hoverColor="hover:bg-peach"
            margin="my-4"
            className="max-w-xl"
          />
          <Button
            label="What Else You Need To Know"
            link="/guide/context/what-else"
            hoverColor="hover:bg-peach"
            margin="my-4"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center">
        <a href="/guide/intentions/" className="group flex content-center">
          <svg
            viewBox="0 0 20 35"
            width="20"
            height="35"
            className="inline-block transform transition-transform ease-in-out group-hover:-translate-x-2"
          >
            <path
              d="M 25.235 4.466 L 34.534 29.434 L 8.57 35.356 L 25.235 4.466 Z"
              fill="#F19757"
              transform="matrix(-0.880713, 0.473651, -0.473651, -0.880713, 44.35582, 27.079313)"
            />
          </svg>
          <span className="inline-block px-6 text-4xl text-pewter group-hover:text-sunny">
            back
          </span>
        </a>
        <a href="/guide/map/" className="group flex content-center">
          <span className="inline-block px-6 text-4xl text-pewter group-hover:text-sunny">
            forward
          </span>
          <svg
            viewBox="0 0 20 35"
            width="20"
            height="35"
            className="inline-block transform transition-transform ease-in-out rotate-180 group-hover:translate-x-2"
          >
            <path
              d="M 25.235 4.466 L 34.534 29.434 L 8.57 35.356 L 25.235 4.466 Z"
              fill="#F19757"
              transform="matrix(-0.880713, 0.473651, -0.473651, -0.880713, 44.35582, 27.079313)"
            />
          </svg>
        </a>
      </div>
    </Layout>
  );
}

export default GuideContextPage;
