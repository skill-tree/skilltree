import React from 'react';

import { connect } from 'react-redux';
import { toggleFlag, getData } from '../../redux/actions';

import { Input } from '../../common/Input';

import './styles.css';

class LandingPageComponent extends React.Component {
  render() {
    console.log('flag', this.props.flag);
    console.log('data', this.props.data);
    return (
      <div className="landing-page">
        <h5>Landing Page</h5>
        <p>{this.props.flag.toString()}</p>
        <Input />
        <button onClick={this.props.getData}>Click to toggle flag</button>
      </div>
    );
  }
}

const mapStateToProps = ({ flag, data }) => {
  return {
    flag,
    data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFlag: () => dispatch(toggleFlag()),
    getData: () => dispatch(getData())
  };
};

export const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageComponent);
