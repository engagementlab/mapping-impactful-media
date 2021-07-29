import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <a
        href={this.props.link}
        className={`${this.props.className} ${
          this.props.small ? `` : `text-3xl py-6 tracking-widest`
        } ${
          this.props.color ? `hover:` + this.props.color : `hover:bg-strawberry`
        } ${
          this.props.margin !== undefined ? `my-` + this.props.margin : `my-10`
        } inline-block border-2 border-black px-10 py-4 font-bourbon text-sm hover:text-white transition-all`}
      >
        {this.props.label}
      </a>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.number,
  small: PropTypes.bool,
};

export default Button;
