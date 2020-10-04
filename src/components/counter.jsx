import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    console.log("Counters - UnMount"); // e.g. delete a counter and see.
  }
  
  render() {
    return (
      <React.Fragment>
        {/*Replacement for <div></div> to avoid additional divs in html*/}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let spanClasses = "badge m-2 badge-";
    spanClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return spanClasses;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
