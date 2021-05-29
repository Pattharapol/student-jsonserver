import React, { Component } from "react";
import Student from "./components/Student";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8080/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ students: data }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Student students={this.state.students}/>
      </div>
    );
  }
}

export default App;
