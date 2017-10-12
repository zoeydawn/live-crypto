import React, { PropTypes } from 'react';
import moment from 'moment';

const Trades = ({ trades }) => (
  <div className="trades">
    <div className="row">
      <div className="trade-cell">time</div>
      <div className="trade-cell">price</div>
      <div className="trade-cell right-floated">amount</div>
    </div>
    {
      trades.map((trade, i) => (
        <div className={`row ${trade[2] > 0 ? 'sell' : 'buy'}`} key={`trades-${i}`}>
          <div className="trade-cell">{moment(trade[1]).format('h:mm:ss')}</div>
          <div className="trade-cell">{trade[3]}</div>
          <div className="trade-cell right-floated">{Math.abs(trade[2])}</div>
        </div>
      ))
    }
  </div>
);

Trades.propTypes = {
  trades: PropTypes.array.isRequired,
};

export default Trades;
