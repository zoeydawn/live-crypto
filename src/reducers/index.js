import { combineReducers } from 'redux';

const sampleReducer = (state = 0) => state;

export default combineReducers({
  zero: sampleReducer,
});
