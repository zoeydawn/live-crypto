import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import { subscribeToBfx, unsubscribeToBfx } from '../actions';

import OrderBook from './OrderBook';
import Trades from './Trades';
import Ticker from './Ticker';
import Disconnect from './Disconnect';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const {
      orderBook,
      trades,
      ticker,
      connected,
      subscribe,
      unsubscribe,
    } = this.props;

    return (
      <div className="layout">
        <div className="left-container">
          <div className="top-container">
            <Ticker ticker={ticker} />
            <Disconnect
              isConnected={connected}
              connect={subscribe}
              disconnect={unsubscribe}
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
  subscribe: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func.isRequired,
  orderBook: PropTypes.array.isRequired,
  trades: PropTypes.array.isRequired,
  ticker: PropTypes.array.isRequired,
  connected: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ orderBook, trades, ticker, connected }) => ({
  orderBook,
  trades,
  ticker,
  connected,
});

const mapDispatchToProps = dispatch => ({
  subscribe() {
    dispatch(subscribeToBfx());
  },
  unsubscribe() {
    dispatch(unsubscribeToBfx());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
