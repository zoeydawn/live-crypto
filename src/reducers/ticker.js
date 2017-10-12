export default function ticker(state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'GOT_TICKER_DATA':
      return action.payload;
    default:
      return state;
  }
}
