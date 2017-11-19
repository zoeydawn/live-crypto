export default function connected(state = false, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'CONNECTED': {
      return true;
    }
    case 'DISCONNECTED':
      return false;
    default:
      return state;
  }
}
