import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../style/App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello there. </h1>
      </div>
    );
  }
}

export default hot(module)(App);