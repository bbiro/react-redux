import * as actionTypes from './action';

const initialState = {
  counter: 0,
  result: [],
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
    case actionTypes.SUBTRACT:
      console.log('[Reducer.js] - Store');
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      console.log('[Reducer.js] - Delete');
      const updatedArray = state.result.filter((result) => result.id !== action.resultElId);
      return {
        ...state,
        result: updatedArray,
      };
  }
  return state;
};

export default reducer;
