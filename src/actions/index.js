/* global WebSocket:true */
/* eslint no-undef: "error" */

const messages = {
  ticker: {
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tETHBTC',
  },
  book: {
    event: 'subscribe',
    channel: 'book',
    symbol: 'tETHBTC',
    prec: 'P2',
    freq: 'F1',
    len: 25,
  },
  trades: {
    event: 'subscribe',
    channel: 'trades',
    symbol: 'tETHBTC',
  },
};

export function subscribeToBfx() {
  return (dispatch) => {
    const socket = new WebSocket('wss://api.bitfinex.com/ws/2');

    socket.onopen = () => {
      socket.send(JSON.stringify(messages.ticker));
      socket.send(JSON.stringify(messages.book));
      socket.send(JSON.stringify(messages.trades));
    };

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log('msg:', msg);
      switch (data.event) {
        case 'info':
          console.log('info');
          break;
        case 'subscribed':
          console.log('subscribed');
          break;
        default:
          console.log('data:', data);
      }
    };
    socket.onclose = () => {
      console.log('disconnected from Bitfinex');
    };

    socket.onerror = (msg) => {
      console.error(msg.message);
    };
  };
}
