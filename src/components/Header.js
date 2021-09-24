import React, { Component } from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import Image from './Image';

const links = [
  [`/report`, `Report`],
  [`/guide`, `Guide`],
  [`/about`, `About`],
  [`/team`, `Team`],
];

class Header extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="flex justify-center">
        <nav className="w-full xl:mx-20 my-7 mb-24 flex flex-col md:flex-row">
          <div className="w-full flex justify-center md:justify-start">
            <a href="/">
              <Image
                imgId="logo.png"
                alt="Logo with text 'Mapping Impactful Media Literacy Practices'"
                width={305}
                lazy={false}
              />
            </a>
          </div>
          <div className="px-4 mt-4 w-full flex items-center">
            <ul className="flex justify-between w-full font-work-sans text-xl list-none">
              <Location>
                {({ location }) =>
                  links.map((link) => {
                    // Field guide condition works differently
                    if (
                      link[0] === `/guide` &&
                      location.pathname.indexOf(`guide`) > -1
                    ) {
                      return (
                        <li key={link[0]}>
                          <Link
                            to={link[0]}
                            className="hover:text-peach transition-colors underline"
                          >
                            {link[1]}
                          </Link>
                        </li>
                      );
                    } else if (
                      location.pathname === `${link[0]}` ||
                      location.pathname === `${link[0]}/`
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
      </div>
    );
  }
}

export default Header;
