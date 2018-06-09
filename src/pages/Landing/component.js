import React from 'react';

import { Redirect } from 'react-router';

class LandingPageComponent extends React.Component {
  render() {
    return <Redirect to="/skills" />;
  }
}


export const LandingPage = LandingPageComponent;