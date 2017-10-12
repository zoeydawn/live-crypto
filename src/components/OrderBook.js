import React, { Component, PropTypes } from 'react';

export default class OrderBook extends Component {
  renderBids(arr) {
    let total = 0;
    return arr.sort((a, b) => (
      b[0] - a[0]
    )).map((sortedArr, i) => {
      total += sortedArr[2];
      return (
        <div className="row" key={`bids-${i}`}>
          <div className="cell">{sortedArr[1]}</div>
          <div className="cell center">{Math.round(sortedArr[2] * 10) / 10}</div>
          <div className="cell right-floated">{Math.round(total * 10) / 10}</div>
          <div className="cell right-floated">{sortedArr[0]}</div>
        </div>
      );
    });
  }

  renderAsks(arr) {
    let total = 0;
    return arr.sort((a, b) => (
      a[0] - b[0]
    )).map((sortedArr, i) => {
      total += sortedArr[2];
      return (
        <div className="row" key={`asks-${i}`}>
          <div className="cell">{sortedArr[0]}</div>
          <div className="cell center">{Math.round(Math.abs(total) * 10) / 10}</div>
          <div className="cell right-floated">{Math.round(Math.abs(sortedArr[2]) * 10) / 10}</div>
          <div className="cell right-floated">{sortedArr[1]}</div>
        </div>
      );
    });
  }

  render() {
    const { orderBook } = this.props;
    const bids = [];
    const asks = [];
    orderBook.forEach((order) => {
      if (order[2] < 0) {
        asks.push(order);
      } else {
        bids.push(order);
      }
    });
    // console.log('bids:', bids);
    // console.log('asks:', asks);
    return (
      <div className="order-book">
        <div className="bids">
          <div className="row">
            <div className="cell">count</div>
            <div className="cell center">amount</div>
            <div className="cell right-floated">total</div>
            <div className="cell right-floated">price</div>
          </div>
          {this.renderBids(bids)}
        </div>
        <div className="asks">
          <div className="row">
            <div className="cell">price</div>
            <div className="cell center">totol</div>
            <div className="cell right-floated">amount</div>
            <div className="cell right-floated">count</div>
          </div>
          {this.renderAsks(asks)}
        </div>
      </div>
    );
  }
}

OrderBook.propTypes = {
  orderBook: PropTypes.array.isRequired,
};
