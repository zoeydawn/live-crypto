export default function orderBook(state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'ADD_ORDER': {
      console.log('action.payload[0]:', action.payload[0]);
      const filteredState = state.filter(order => (
        order[0] !== action.payload[0]
      ));
      return [...filteredState, action.payload];
    }
    case 'INITIAL_ORDERS':
      return action.payload;
    default:
      return state;
  }
}
