import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
        <a
            href={this.props.link}
            className={`inline-block border-2 border-black px-10 py-4 my-10 font-bourbon text-sm hover:bg-strawberry hover:text-white transition-all ${this.props.className}`}
        >
            {this.props.label}
          </a>
    );
  }
}
Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
