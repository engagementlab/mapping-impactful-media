import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BackToMap from './BackToMap';

class GuideFooter extends Component {
  render() {
    return (
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="mt-10 md:mt-0 md:w-1/2 lg:w-5/12">
          <BackToMap />
        </div>
        <div className="md:flex-grow text-center lg:text-left">
          <a
            href={this.props.link}
            className="inline-block border-2 px-24 py-7 max-w-sm border-black font-bourbon text-3xl  tracking-widest hover:bg-strawberry hover:text-white transition-all"
          >
            Next
          </a>
        </div>
      </div>
    );
  }
}
GuideFooter.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GuideFooter;
