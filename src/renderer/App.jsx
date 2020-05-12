import React, { Component } from "react"
import TitleBar from "./components/TitleBar"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TitleBar />
      </div>
    );
  }
}