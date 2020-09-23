import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.previous}>
          Previous
        </button>
        <button className="btn" onClick={this.props.submit}>
          submit
        </button>
        <button className="btn" onClick={this.props.next}>
          next
        </button>
        <button className="btn" onClick={this.props.submit}>
          show Answer
        </button>
      </div>
    );
  }
}
