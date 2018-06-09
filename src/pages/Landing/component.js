import React from 'react';

import { connect } from 'react-redux';
import { toggleFlag } from '../../redux/actions';

import { Input } from '../../common/Input';

import './styles.css';

class LandingPageComponent extends React.Component {
  render() {
    console.log('flag', this.props.flag);
    return (
      <div className="landing-page">
        <h5>Landing Page</h5>
        <p>{this.props.flag.toString()}</p>
        <Input />
        <button onClick={this.props.toggleFlag}>Click to toggle flag</button>
      </div>
    );
  }
}

const mapStateToProps = ({ flag }) => {
  return {
    flag
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFlag: () => dispatch(toggleFlag())
  };
};

export const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageComponent);
