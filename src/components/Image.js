import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cloudinary } from '@cloudinary/base';
import {
  AdvancedImage,
  accessibility,
  responsive,
  lazyload,
} from '@cloudinary/react';

// Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: `engagement-lab-home`,
  },
  url: {
    secure: true,
  },
});
class Image extends Component {
  render() {
    // Instantiate a CloudinaryImage object for the image with public ID;
    // append dir prefix if missing
    const prefix =
      this.props.imgId.indexOf(`mapping-impactful-media/img/`) > -1
        ? ``
        : `mapping-impactful-media/img/`;
    const cloudImage = cld.image(`${prefix}${this.props.imgId}`);

    // Merge classes
    let allClasses = this.props.className ? this.props.className : ``;
    if (responsive) allClasses = `${allClasses} cld-responsive`;

    // Create image transforms
    cloudImage.addTransformation(
      this.props.transforms ||
        `w_${this.props.width ? this.props.width : `auto`},f_auto,dpr_auto`
    );

    return (
      <AdvancedImage
        id={this.props.id}
        className={allClasses}
        cldImg={cloudImage}
        alt={this.props.alt}
        plugins={[lazyload()]}
      />
    );
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  imgId: PropTypes.string.isRequired,
  transforms: PropTypes.string,
  width: PropTypes.number,
};

export default Image;
