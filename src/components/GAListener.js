import React from 'react';
import PropTypes from 'prop-types';

import ReactGA from 'react-ga';

const hasGAId = !!process.env.REACT_APP_GOOGLE_ANALYTICS;

if (hasGAId) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    if (hasGAId) {
      this.sendPageView(this.context.router.history.location);
      this.context.router.history.listen(this.sendPageView);
    }
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default GAListener;
