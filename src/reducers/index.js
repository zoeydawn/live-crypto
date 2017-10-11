import { combineReducers } from 'redux';

import orderBook from './orderBook';
import trades from './trades';

export default combineReducers({
  orderBook,
  trades,
});
