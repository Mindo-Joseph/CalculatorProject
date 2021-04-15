import '../App.css';
import React, { Component } from 'react';
import Display from './Display';
import buttons from '../buttons/buttonstate';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import styles from './styles.module.css';
import Navbar from './Navbar';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-main">
        <Navbar />
        <div className={styles.contentCalc}>
          <div className={styles.intro}>
            <h3>Lets do some math</h3>
          </div>
          <div>
            <div className={styles.app}>
              <Display total={total} next={next} operation={operation} />
              <ButtonPanel data={this.state} buttons={buttons} clickHandler={this.handleClick} />
            </div>
          </div>

        </div>
      </div>

    );
  }
}
export default Calculator;
