import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'

import { subscribeToBfx, unsubscribeToBfx } from '../actions';

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
    this.props.subscribeToBfx();
  }

  render() {
    const { orderBook, trades, ticker } = this.props;

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
        <div className="footer">
          <a
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://donovanmoore.tech/"
          >
            Created by Donovan Moore
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/donbobvanbirt/live-crypto"
          >
            <Icon name="github" size="large" />Github
          </a>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
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
  unsubscribeToBfx() {
    dispatch(unsubscribeToBfx());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
