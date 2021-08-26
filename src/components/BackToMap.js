import React, { Component } from 'react';
import mapIcon from '../images/map.png';

class BackToMap extends Component {
  render() {
    return (
      <a href="/guide/map" className="group flex items-center">
        <span className="inline-block px-6 text-3xl text-pewter uppercase group-hover:text-sunny">
          back to map
        </span>
        <img
          src={mapIcon}
          alt="'Back to map' icon"
          className="inline-block transform transition-transform ease-in-out group-hover:scale-110"
        />
      </a>
    );
  }
}

export default BackToMap;
