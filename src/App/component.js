import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Page components
import { UserProfilePage } from '../pages/UserProfile';
import { LandingPage } from '../pages/Landing';
import { SkillsPage } from '../pages/Skills';
// Common components
import { NavBar } from '../common/NavBar';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/profile" component={UserProfilePage} />
        </div>
      </Router>
    );
  }
}
