import React, { Component } from "react";
class Counter extends Component {
  /*state = {
    count: this.props.counter.value,
    //count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  /*handleIncrement = () => {
    //this.state.count++;
    //console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };*/

  render() {
    //console.log("props", this.props.counter.value);
    this.getBadgeClasses();
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          </ul>*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
