import * as actionTypes from '../actions/action';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      console.log('[Reducer.js] - INCREMENT');
      return newState;
    case actionTypes.DECREMENT:
      console.log('[Reducer.js] - Decrement');
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      console.log('[Reducer.js] - ADD');
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBTRACT:
      console.log('[Reducer.js] - SUBTRACT');
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }
  return state;
};

export default reducer;
