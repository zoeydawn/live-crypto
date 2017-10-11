import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { subscribeToBfx } from '../actions';

import OrderBook from './OrderBook';
import Trades from './Trades';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribeToBfx();
  }

  render() {
    const { orderBook, trades } = this.props;

    return (
      <div className="layout">
        <OrderBook orderBook={orderBook} />
        <Trades trades={trades} />
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
  orderBook: PropTypes.array.isRequired,
  trades: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  orderBook: state.orderBook,
  trades: state.trades,
});

const mapDispatchToProps = dispatch => ({
  subscribeToBfx(socket) {
    dispatch(subscribeToBfx(socket));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
