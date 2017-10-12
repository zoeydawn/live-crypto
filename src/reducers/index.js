import { combineReducers } from 'redux';

import orderBook from './orderBook';
import trades from './trades';
import ticker from './ticker';

export default combineReducers({
  orderBook,
  trades,
  ticker,
});
