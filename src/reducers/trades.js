export default function trades(state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'INITIAL_TRADES':
      return action.payload;
    case 'ADD_TRADE':
      return [action.payload, ...state].slice(0, 120);
    default:
      return state;
  }
}
