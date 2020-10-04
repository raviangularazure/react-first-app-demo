import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; // This is Object destructuring. So that you don't need to type this.props.onReset for eg. You can directly type onReset
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            onDelete={onDelete} // We are simply bubbling up the event to parent 'App' component
            onIncrement={onIncrement}
          >
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
