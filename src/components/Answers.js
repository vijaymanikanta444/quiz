import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    return (
      <div>
        {/* {this.props.data[this.props.n].Ans.map((ans, i) => (
          //   <h1>{ans}</h1>;
          <div class="form-check">
            <input
              key={i}
              class="form-check-input"
              type="radio"
              name="radio"
              id={i}
              value={ans}
              onClick={this.props.radio}
              //   checked={this.props.answer === 'e.target.value'}
              //   checked={this.props.answer === { ans }}
            />
            <label class="form-check-label" for="exampleRadios1">
              {ans}
            </label>
          </div>
        ))} */}
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id={0}
              value={this.props.data[this.props.n].Ans[0]}
              onClick={this.props.radio}
              checked={this.props.answer === 'e.target.value'}
            />
            <label className="form-check-label" for="exampleRadios1">
              {this.props.data[this.props.n].Ans[0]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id={1}
              value={this.props.data[this.props.n].Ans[1]}
              onClick={this.props.radio}
              checked={this.props.answer === 'e.target.value'}
            />
            <label className="form-check-label" for="exampleRadios1">
              {this.props.data[this.props.n].Ans[1]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id={2}
              value={this.props.data[this.props.n].Ans[2]}
              onClick={this.props.radio}
              //   checked={this.props.answer === 'e.target.value'}
            />
            <label className="form-check-label" for="exampleRadios1">
              {this.props.data[this.props.n].Ans[2]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radio"
              id={3}
              value={this.props.data[this.props.n].Ans[3]}
              onClick={this.props.radio}
              //   checked={this.props.answer === 'e.target.value'}
            />
            <label className="form-check-label" for="exampleRadios1">
              {this.props.data[this.props.n].Ans[3]}
            </label>
          </div>

          {/* <h1>{this.props.data[1].Ans[0]}</h1>
          <h1>{this.props.data[1].Ans[1]}</h1>
          <h1>{this.props.data[1].Ans[2]}</h1>
    <h1>{this.props.data[1].Ans[3]}</h1> */}
        </div>
      </div>
    );
  }
}
