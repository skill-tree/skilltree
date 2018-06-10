import React, { Component } from "react";
import axios from "axios";
// import logo from './logo.svg';
// import './App.css';
var data = require("../../courses.json");
// for (var i = 0; i < data.length; i++) {
//   var obj = data[i];
//   console.log("obj is" + obj);
// }

class SearchPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "",
  object: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A value was submitted: " + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:3001/api")
      .then(function(response) {
        // console.log(response);
        // console.log(response.data.listings.listing[0].title)
        //for loop
        for (var i=0; i <101; i++){
          console.log(response.data.listings.listing[i].description.toLowerCase().includes("html"))
        }
 
        console.log(data.categories.developer[0].title)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <p>{data.categories.developer[0].title}</p>
        </form>
      </div>
    );
  }
}

export const SearchPage = SearchPageComponent;
