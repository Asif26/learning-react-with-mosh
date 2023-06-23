import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag:['tage1','tage2','tage3','tage3']
  };
  render() {
    return (
      <>
        <span className={this.getBageClasses()}> {this.formatCount()} </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {this.state.tag.map((tag, key) => <li key={`index-${key}`}>{tag}</li>)}
        </ul>
      </>
    );
  }
  getBageClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
