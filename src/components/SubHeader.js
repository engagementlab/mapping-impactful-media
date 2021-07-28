import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubHeader extends Component {
  render() {
    return (
      <h2
        className={`inline-block px-5 py-11 font-bourbon text-4xl tracking-widest ${this.props.color}`}
      >
        {this.props.text}
      </h2>
    );
  }
}
SubHeader.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SubHeader;
