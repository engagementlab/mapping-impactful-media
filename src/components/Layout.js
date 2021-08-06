import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mapping Impactful Media Literacy Practices</title>
        <link rel="canonical" href="https://mappingimpactfulml.org/" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
