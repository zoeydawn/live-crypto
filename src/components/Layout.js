import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { subscribeToBfx, unsubscribeToBfx, resubscribeToBfx } from '../actions';

import OrderBook from './OrderBook';
import Trades from './Trades';
import Ticker from './Ticker';
import Disconnect from './Disconnect';

class Layout extends Component {
  state = { connected: true };

  componentDidMount() {
    this.props.subscribeToBfx();
  }

  disconnect = () => {
    this.props.unsubscribeToBfx();
    this.setState({ connected: false });
  }

  connect = () => {
    this.setState({ connected: true });
    this.props.resubscribeToBfx();
  }

  render() {
    const { orderBook, trades, ticker } = this.props;
    console.log('orderBook:', orderBook);
    return (
      <div className="layout">
        <div className="left-container">
          <div className="top-container">
            <Ticker ticker={ticker} />
            <Disconnect
              isConnected={this.state.connected}
              connect={this.connect}
              disconnect={this.disconnect}
            />
          </div>
          <OrderBook orderBook={orderBook} />
        </div>
        <Trades trades={trades} />
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
  resubscribeToBfx: PropTypes.func.isRequired,
  unsubscribeToBfx: PropTypes.func.isRequired,
  orderBook: PropTypes.array.isRequired,
  trades: PropTypes.array.isRequired,
  ticker: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  orderBook: state.orderBook,
  trades: state.trades,
  ticker: state.ticker,
});

const mapDispatchToProps = dispatch => ({
  subscribeToBfx() {
    dispatch(subscribeToBfx());
  },
  resubscribeToBfx() {
    dispatch(resubscribeToBfx());
  },
  unsubscribeToBfx() {
    dispatch(unsubscribeToBfx());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
