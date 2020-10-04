import React, { Component } from "react";

// This is a stateless functional component. You can also do it as a component class like in other places. You cannot use lifecyle hooks in stateless functions. Its just a function.
const NavBar = ({totalCounters}) => { // Object destructuring
  return ( // No render() required, just return out of the function the JSX
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Count of Active Counters
        <span className="badge badge-pill bage-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
