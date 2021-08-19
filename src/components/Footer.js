import React, { Component } from 'react';
import Image from './Image';

class Footer extends Component {
  render() {
    return (
      <footer className="flex flex-col-reverse lg:flex-row justify-center w-full p-10 mt-16 bg-sunny">
        <div className="w-full md:w-3/4">
          <h3 className="lg:mx-20 font-bourbon">
            Mapping Impactful Media Literacy Practices
          </h3>

          <p className="lg:mx-20 italic text-sm leading-6">
            Initial support for the research project is made possible through a
            grant from Facebook. To ensure the independence and integrity of
            this research effort, NAMLE will maintain full authority regarding
            project strategy, budget, personnel decisions, or research
            activities. Facebook will not have direct control over the research
            design, methodology, analysis, or findings. NAMLE and any research
            authors will maintain exclusive copyright over all products and
            freely disseminate those products to advance the media literacy
            field.Initial support for the research project is made possible
            through a grant from Facebook.
          </p>
          <ul className="pt-5 font-work-sans"></ul>
        </div>
        <div>
          <Image
            className="self-center pt-16"
            imgId="namle"
            width={425}
            alt="Logo for National Association for Media Literacy Education (NAMLE)"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
