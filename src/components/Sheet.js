import React, { Component } from 'react';
import Questions from './Questions';
import Answers from './Answers';
import Buttons from './Buttons';

export default class Sheet extends Component {
  state = {
    data: [
      {
        Q: 'What is the current Year',
        Ans: ['2019', '2018', '2020', '2021'],
        selectedAnswer: '',
        correctAnswer: 2020,
      },
      {
        Q: 'What is the current Month',
        Ans: ['September', 'May', 'October', 'November'],
        selectedAnswer: '',
        correctAnswer: 'September',
      },
      {
        Q: 'What is the capital of INDIA',
        Ans: ['Delhi', 'Visakhapatnam', 'Kerala', 'Bangalore'],
        selectedAnswer: '',
        correctAnswer: 'Delhi',
      },
    ],
    selectedAnswer: [
      { q: 1, a: '' },
      { q: 2, a: '' },
      { q: 3, a: '' },
    ],
    n: 0,
    answer: '',
    // currentAnswer: '',
  };

  previous = () => {
    if (this.state.n > 0) {
      this.setState({ n: this.state.n - 1 });
    }
  };
  next = () => {
    if (this.state.n < this.state.data.length - 1) {
      this.setState({ n: this.state.n + 1, answer: '' });
    }
  };
  radio = (e) => {
    this.setState({ answer: e.target.value });
  };
  submit = () => {
    // const newData = this.state.data.map((value, i) => {
    //   if (i == this.state.n) {
    //     return { ...value, value: { selectedAnswer: this.state.answer } };
    //     // this.setState({ value: { selectedAnswer: this.state.answer } });
    //   }
    //   return value;
    // });
    alert(
      `The Correct Answer is ${this.state.data[this.state.n].correctAnswer}`
    );
  };
  show = () => {
    console.log('show');
    alert(
      `The Correct Answer is ${this.state.data[this.state.n].correctAnswer}`
    );
  };
  render() {
    // console.log(this.state.data[0]);

    return (
      <div>
        <Questions data={this.state.data} n={this.state.n} />
        <Answers
          data={this.state.data}
          n={this.state.n}
          //   answer={this.state.answer}
          radio={this.radio}
        />
        <Buttons
          previous={this.previous}
          next={this.next}
          submit={this.submit}
          show={this.show}
        />
      </div>
    );
  }
}
