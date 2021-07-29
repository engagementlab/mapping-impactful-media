import React, { Component } from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import Image from './Image';

const links = [
  // ['/', 'Home'],
  [`/about`, `About`],
  [`/team`, `Team`],
  [`/guide`, `Field Guide`],
];

class Header extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <nav className="container xl:mx-20 my-7 mb-24 flex flex-row">
        <div className="w-3/4">
          <a href="/">
            <Image
              imgId="logo.png"
              alt="Logo with text 'Mapping Impactful Media Literacy Practices'"
              width={305}
            />
          </a>
        </div>
        <div className="flex items-center w-full">
          <ul className="flex justify-evenly w-full font-work-sans">
            <Location>
              {({ location }) =>
                links.map((link) => {
                  if (
                    location.pathname.indexOf(`${link[0]}/`) > -1 ||
                    location.pathname === `${link[0]}`
                  ) {
                    return (
                      <li key={link[0]} className="underline">
                        {link[1]}
                      </li>
                    );
                  }
                  return (
                    <li key={link[0]}>
                      <Link
                        to={link[0]}
                        className="hover:text-peach transition-colors"
                      >
                        {link[1]}
                      </Link>
                    </li>
                  );
                })
              }
            </Location>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
