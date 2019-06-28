import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rst}) => {
  return (
    <div className="counter-block">
      <div className="counter">{counter}</div>
      <div className="btn-block">
        <button onClick={inc} className="btn btn-plus">
          <img src="./img/Plus.png" alt="Plus" />
        </button>
        <button onClick={dec} className="btn btn-minus">
          <img src="./img/Minus.png" alt="Minus" />
        </button>
        <button onClick={rst} className="btn btn-reset">
          <img src="./img/Reset.png" alt="Reset" />
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);