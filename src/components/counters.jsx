import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Destructing Arguments
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    // Does not handle, but bubbles up to parent.
    return (
      <div>
        <button 
          onClick={onReset} 
          className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
