import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - constructor");
    // Perfect place to set the state of this component from props e.g. this.state = this.props.something
  }

  componentDidMount(){
    console.log('App - Mounted')
    // Place to make Api calls to setup data.
  }

  componentDidUpdate(){
    console.log('App - Updated');
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c; // The map returns a new array after setting the value = 0 for all items of the array. Similar to yield.
    });

    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // creates a fresh copy of the array. But objects inside the array point to same reference. So we also clone that particular object again using spread operator
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // creates a fresh copy of the object. No reference
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App; // Just creating an export of App class. Nothing fancy
