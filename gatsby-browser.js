import './src/styles/global.css';
module.exports = {
  shouldUpdateScroll: ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    window.scrollTo(0, 0);

    return false;
  },
};
