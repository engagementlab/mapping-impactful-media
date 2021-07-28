import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="flex justify-center w-full p-10 mt-16 bg-sunny">
        <div className="w-full md:w-1/2">
          <h3 className="font-bourbon">
            Mapping Impactful Media Literacy Practices
          </h3>
          <p className="pt-5 font-work-sans">
            Contact: Paul Mihailidis
            <br />
            paul_mihailidis@emerson.edu ​ ​
          </p>
          <ul className="pt-5 font-work-sans"></ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
