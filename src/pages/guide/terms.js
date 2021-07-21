import { graphql, useStaticQuery } from 'gatsby';
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

import Layout from '../../components/Layout';

class Term extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector('.panel_content').scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { activeTab, activateTab, bgColor, index, term } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height + 40 : 0}px`,
    };
    return (
      <div
        className={`mt-9 rounded-55 bg-${bgColor} bg-opacity-50`}
        role="tabpanel"
        aria-expanded={isActive}
      >
        <button
          className="p-6 box-border appearance-none cursor-pointer focus:outline-none text-center w-full"
          onClick={activateTab}
        >
          <p className="inline-block text-footnote font-bourbon text-3xl uppercase">
            {term.name}
          </p>
        </button>
        <div
          className="panel_content overflow-x-auto overflow-y-hidden transition-max-height duration-300 ease-in-out font-work-sans text-3xl px-16"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <div className="overflow-hidden">{term.answer}</div>
        </div>
      </div>
    );
  }
}

// Term.propTypes = {
//   alt: PropTypes.string.isRequired,
// };

function GuideTermsPage() {
  const [activeTab, setActiveTab] = useState();
  const bgColors = ['orange', 'peach', 'pink', 'hibiscus', 'bee'];
  let bgColorI = -1;

  function activateTab(index) {
    setActiveTab(activeTab === index ? -1 : index);
  }

  const termsContent = useStaticQuery(graphql`
    query TermsPageQuery {
      elApi {
        allGuideTermsPage {
          terms {
            name
            answer
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-14 xl:mt-48 flex flex-col max-w-5xl">
        <h1 className="font-work-sans text-center text-4xl mb-7">
          Click the questions or terms below to learn how each is defined and
          used in this field guide.
        </h1>
        {termsContent.elApi.allGuideTermsPage[0].terms.map((term, i) => {
          bgColorI++;
          if (bgColorI > bgColors.length) bgColorI = 0;
          return (
            <Term
              key={i}
              activeTab={activeTab}
              activateTab={activateTab.bind(null, i)}
              bgColor={bgColors[bgColorI]}
              index={i}
              term={term}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default GuideTermsPage;
