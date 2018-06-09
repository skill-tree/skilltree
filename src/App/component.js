import React, { Component } from 'react';

import { UserProfilePage } from '../pages/UserProfile';
import { LandingPage } from '../pages/Landing';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfilePage />
        <LandingPage />
      </div>
    );
  }
}