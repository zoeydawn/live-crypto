import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { subscribeToBfx } from '../actions';

import OrderBook from './OrderBook';
import Trades from './Trades';
import Ticker from './Ticker';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribeToBfx();
  }

  render() {
    const { orderBook, trades, ticker } = this.props;

    return (
      <div className="layout">
        <div className="left-container">
          <Ticker ticker={ticker} />
          <OrderBook orderBook={orderBook} />
        </div>
        <Trades trades={trades} />
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
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
  subscribeToBfx(socket) {
    dispatch(subscribeToBfx(socket));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
