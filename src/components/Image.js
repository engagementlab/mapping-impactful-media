import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cloudinary } from '@cloudinary/base';
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
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
    let plugins = [];

    // Create image transforms
    cloudImage.addTransformation(this.props.transforms || `f_auto,dpr_auto`);

    // If lazyload not set to false, enable
    if (this.props.lazy === undefined)
      plugins.push(
        responsive([800, 1000, 1400]),
        lazyload(),
        placeholder(`blur`)
      );

    return (
      <AdvancedImage
        id={this.props.id}
        className={this.props.className}
        cldImg={cloudImage}
        alt={this.props.alt}
        plugins={plugins}
        style={{ maxWidth: this.props.width + `px` }}
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
  lazy: PropTypes.bool,
};

export default Image;
