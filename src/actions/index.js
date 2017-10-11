/* global WebSocket:true */
/* eslint no-undef: "error" */

const messages = {
  ticker: {
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD',
  },
  book: {
    event: 'subscribe',
    channel: 'book',
    symbol: 'tBTCUSD',
    prec: 'P1',
    len: 25,
  },
  trades: {
    event: 'subscribe',
    channel: 'trades',
    symbol: 'tBTCUSD',
  },
};

function addToOrderBook(data) {
  return {
    type: 'ADD_ORDER',
    payload: data,
  }
}

function gotInitialOrders(data) {
  return {
    type: 'INITIAL_ORDERS',
    payload: data,
  }
}

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
      // console.log('data:', data);
      if (Array.isArray(data)) {
        // console.log('data', data);
        const dataArr = data[1];
        switch (dataArr.length) {
          case 10:
            // console.log('ticker', data);
            break;
          case 50:
            // console.log('book', data);
            // dataArr.forEach((arr) => {
            //   dispatch(addToOrderBook(arr));
            // });
            dispatch(gotInitialOrders(dataArr));
            break;
          case 3:
            // console.log('book', data);
            dispatch(addToOrderBook(dataArr))
            break;
          case 30:
            // console.log('trades', data);
            break;
          default:
            if (data[2] && data[2].length === 4) {
              // console.log('trades', data);
            } else {
              // console.log('nada:', data);
            }

        }
      }
      // switch (data.event) {
      //   case 'info':
      //     // console.log('info');
      //     break;
      //   // case 'subscribed':
      //   //   console.log('subscribed');
      //   //   console.log('data.channel:', data.channel);
      //   //   break;
      //   default:
      //     // console.log('data.event:', data.event);
      // }
    };
    socket.onclose = () => {
      console.log('disconnected from Bitfinex');
    };

    socket.onerror = (msg) => {
      console.error(msg.message);
    };
  };
}
