import React from 'react';

import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import './styles.css';

const styles = () => {
  paper
}

class SkillsPageComponent extends React.Component {
  render() {
    return (
      <div className="skills-page">
        <Grid container className="grid" spacing={24} padding={80}>
          <Grid md={8}>
            <Paper>Hey</Paper>
          </Grid>
          <Grid md={4}>
            <Paper>Sup</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const SkillsPage = connect()(
  withStyles(styles)(SkillsPageComponent)
);