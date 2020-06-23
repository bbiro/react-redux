import * as actionTypes from '../actions/actionTypes';

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      console.log('[Reducer.js] - Store');
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result }),
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
