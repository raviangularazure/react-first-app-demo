import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <React.Fragment> {/*Replacement for <div></div> to avoid additional divs in html*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag."}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  handleIncrement(){
    console.log('Increment clicked ')
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let spanClasses = "badge m-2 badge-";
    spanClasses += this.state.count === 0 ? "warning" : "primary";
    return spanClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
