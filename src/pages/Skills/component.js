import React from 'react';

import { connect } from 'react-redux';
import Grid from '@material-ui/core/Button';

import './styles.css';

class SkillsPageComponent extends React.Component {
  render() {
    return (
      <div className="skills-page">
        <h5>Skills</h5>
      </div>
    );
  }
}

export const SkillsPage = connect()(SkillsPageComponent);