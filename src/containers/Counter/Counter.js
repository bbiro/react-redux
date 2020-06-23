import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label='Increment' clicked={this.props.onIncrementCounter} />
        <CounterControl label='Decrement' clicked={this.props.onDecrementCounter} />
        <CounterControl label='Add 10' clicked={this.props.onAdd5Counter} />
        <CounterControl label='Subtract 10' clicked={this.props.onSubtract5} />
        <hr />
        <button onClick={this.props.onStoreResult.bind(this, this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.result.map((strResult) => (
            <li key={strResult.id} onClick={this.props.onDeleteResult.bind(this, strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    result: state.result.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd5Counter: () => dispatch({ type: actionTypes.ADD, value: 10 }),
    onSubtract5: () => dispatch({ type: actionTypes.SUBTRACT, value: 10 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
