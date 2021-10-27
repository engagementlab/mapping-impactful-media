import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubHeader extends Component {
  render() {
    return (
      <h1
        className={`inline-block px-5 py-11 font-bourbon text-4xl tracking-widest ${this.props.className} ${this.props.color}`}
      >
        {this.props.text}
      </h1>
    );
  }
}
SubHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SubHeader;
