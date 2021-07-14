import * as React from "react"

import Image from '../components/Image'
import Button from '../components/Button'
import Layout from "../components/Layout"

// markup
const AboutPage = () => {
    return (
      <Layout>
      <div id="about">
        <div
          class="container mx-auto flex justify-center mt-14 mb-14 xl:mt-48 xl:ml-90 text-2xl md:text-4xl text-sunny"
        >
          <h1 class="font-bourbon text-center w-full md:w-8/12 lg:w-4/12">
            Mapping Impactful Media Literacy Practices
          </h1>
        </div>
        <div class="container mx-auto p-5 flex flex-col-reverse md:flex-row">
          <div
            class="w-full md:w-3/4 xl:w-5/12 xl:pt-32 xl:ml-36 leading-9 list-inside"
          >
            {/* <SvelteMarkdown source={content.intro} /> */}
          </div>
          <div class="xl:ml-48">
            {/* <Image
              imgId="boy-1"
              width={420}
              alt="A cartoonish drawing of a boy tending a garden"
            /> */}
          </div>
        </div>


        <div class="flex justify-center">
          <div class="lg:w-3/4 xl:w-1/3 px-6 lg:px-24 py-16 bg-pink">
            {/* <SvelteMarkdown source={content.assumptions} /> */}
          </div>
        </div>

        {/* <!-- Phases --> */}
        <h4 class="mb-28 mt-28 lg:ml-80 font-work-sans text-2xl lg:w-2/5 text-center">
          To address these assumptions, this project advances an “ecosystem approach”
          to research that is comprised of the following three phases:
        </h4>

        <div class="relative xl:w-3/4 xl:left-64">
          <div class="relative h-40 -mt-64 w-full md:w-1/2 xl:w-2/5 bg-peach" />

          <div
            class="relative z-10 font-geotica text-9xl text-right md:text-left md:ml-64 xl:ml-80 -mt-20"
          >
            1
          </div>
          <div class="p-4 xl:p-0 mt-14 md:ml-64 xl:ml-80 xl:w-2/5 leading-9">

          </div>
        </div>

        <div class="relative xl:w-3/4 xl:left-64">
          <div class="relative h-40 -mt-64 md:w-1/2 md:left-1/2 bg-coral">
            <h1
              class="font-geotica text-9xl text-right md:text-center md:w-9/12 pt-20"
            >
              2
            </h1>
          </div>
          <div class="relative mt-14 md:left-1/2 md:w-1/3 lg:w-1/4">

          </div>
          <div class="p-4 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 leading-9">

          </div>
        </div>

        <div class="relative xl:w-3/4 xl:left-64">
          <div class="relative h-40 -mt-64 md:w-1/3 bg-bee">
            <div
              class="relative z-10 font-geotica text-9xl text-right lg:text-left pt-20 pr-5 lg:pl-40"
            >
              3
            </div>
          </div>
          <div
            class="relative p-4 xl:p-0 mt-14 md:ml-64 xl:p-0 xl:ml-80 md:w-1/2 lg:w-1/3"
          >

          </div>
          <div class="p-4 mt-0 xl:mt-14 md:ml-64 xl:p-0 xl:ml-80 xl:w-2/5 leading-9">

          </div>
        </div>
      </div>
      </Layout>
  )
}

export default AboutPage