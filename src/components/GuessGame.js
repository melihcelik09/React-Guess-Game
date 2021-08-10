import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
class guessGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessNum: "",
      result: "",
      randomNum: this.generateRandomNum().join(""),
      randomList: this.generateRandomNum(),
      counter: 0,
    };
    this.getGuess = this.getGuess.bind(this);
  }
  getGuess(guess) {
    this.setState({ guessNum: Number(guess.target.value) });
  }

  generateRandomNum() {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 1; i < nums.length; i++) {
      var j = Math.floor(Math.random() * i);
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    var randomNum = nums.slice(0, 4);
    return randomNum;
  }

  checkButton = () => {
    var arrayLength = 4;
    var guessArray = [];
    var guess = this.state.guessNum;
    var rndLst = this.state.randomList;

    while (guess > 0) {
      let lastDigit = guess % 10;
      guessArray.unshift(lastDigit);
      guess = Math.floor(guess / 10);
    }
    var sameorder = 0,
      diforder = 0;
    for (var a = 0; a < arrayLength; a++) {
      for (var b = 0; b < arrayLength; b++) {
        if (rndLst[a] === guessArray[b] && a === b) {
          sameorder++;
        }
        if (rndLst[a] === guessArray[b] && a !== b) {
          diforder--;
        }
      }
    }

    if (sameorder == arrayLength) {
      this.setState({ result: `+${guessArray.length}` });
      alert("Congratulations! The answer is " + rndLst.join(""));
      this.setState({ counter: (this.state.counter += 1) });
    } else if (diforder == "-4") {
      this.setState({ result: `${diforder}` });
      this.setState({ counter: (this.state.counter += 1) });
    } else if (
      (sameorder == "2" || sameorder == "3" || sameorder == "1") &&
      diforder == "0"
    ) {
      this.setState({ result: `+${sameorder}` });
      this.setState({ counter: (this.state.counter += 1) });
    } else if (
      (diforder == "-2" || diforder == "-3" || diforder == "-1") &&
      sameorder == "0"
    ) {
      this.setState({ result: `${diforder}` });
      this.setState({ counter: (this.state.counter += 1) });
    } else if (diforder == "0" && sameorder == "0") {
      this.setState({ result: "0" });
      this.setState({ counter: (this.state.counter += 1) });
    } else {
      this.setState({ result: `+${sameorder} ${diforder}` });
      this.setState({ counter: (this.state.counter += 1) });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <h1 className="display-4 mb-4">Guess the four digit number!!</h1>
          <Table bordered style={{ width: 1100, height: 200 }}>
            <thead>
              <tr>
                <td>Write your guess:</td>
                <td className="d-flex">
                  <input
                    onChange={this.getGuess}
                    maxLength="4"
                    required
                  ></input>
                  <Button
                    onClick={this.checkButton}
                    className="ml-2"
                    variant="dark"
                  >
                    Check It!
                  </Button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Result:</td>
                <td>
                  <input
                    style={{ height: 37 }}
                    readOnly
                    value={this.state.result}
                    className="d-flex"
                  ></input>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Guess Counter:</td>
                <td>
                  <p className="d-flex">{this.state.counter}</p>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Container>
      </div>
    );
  }
}
export default guessGame;
