export default function orderBook(state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, action.payload];
    default:
      return state;
  }
}
