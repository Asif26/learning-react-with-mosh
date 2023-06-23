import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["Hello", "Hi", "Janu"],
  };
  IfHandeler() {
    if (this.state.tag.length === 0) return <p>"Their is no tag"</p>;
    return (
      <ul>
        {this.state.tag.map((tag, key) => (
          <li key={`index-${key}`}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
//   doHandlerIncrement = ()=>{
//     this.handleIncrement({id:1})
//   }
  render() {
    return (
      <>
        <span className={this.getBageClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => 
            this.handleIncrement({id:1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.IfHandeler()}
        {this.state.tag.length === 0 && "Please Input tag"}
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
