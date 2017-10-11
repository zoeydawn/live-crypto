import { combineReducers } from 'redux';

let sampleReducer = (state = 0) => state;

export default combineReducers({
  zero: sampleReducer
});
