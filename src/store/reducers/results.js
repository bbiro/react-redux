import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  result: [],
};

const delete_result = (state, action) => {
  const updatedArray = state.result.filter((result) => result.id !== action.resultElId);
  return updateObject(state, { result: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      console.log('[Reducer.js] - Store');
      return updateObject(state, { result: state.result.concat({ id: new Date(), value: action.result }) });
    // return {
    //   ...state,
    //   result: state.result.concat({ id: new Date(), value: action.result }),
    // };
    case actionTypes.DELETE_RESULT:
      console.log('[Reducer.js] - Delete');
      return delete_result(state, action);
    // return {
    //   ...state,
    //   result: updatedArray,
    // };
  }
  return state;
};

export default reducer;
