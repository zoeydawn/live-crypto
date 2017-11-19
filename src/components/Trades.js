import React, { PropTypes } from 'react';
import moment from 'moment';
import { Icon, Loader } from 'semantic-ui-react';

const Trades = ({ trades }) => {
  if (!trades.length) {
    return (
      <Loader active inline="centered" />
    );
  }

  return (
    <div className="trades">
      <div className="row">
        <div className="icon-column" />
        <div className="trade-cell">time</div>
        <div className="trade-cell">price</div>
        <div className="trade-cell right-floated">amount</div>
      </div>
      {
      trades.map((trade, i) => {
        const isBuy = trade[2] > 0;
        return (
          <div className={`row ${isBuy ? 'buy' : 'sell'}`} key={`trades-${i}`}>
            <div className={`icon-column ${isBuy ? 'buyIcon' : 'sellIcon'}`}>
              <Icon name={isBuy ? 'chevron up' : 'chevron down'} />
            </div>
            <div className="trade-cell">{moment(trade[1]).format('h:mm:ss')}</div>
            <div className="trade-cell">{trade[3]}</div>
            <div className="trade-cell right-floated">{Math.abs(trade[2])}</div>
          </div>
        );
      })
    }
    </div>
  );
};

Trades.propTypes = {
  trades: PropTypes.array.isRequired,
};

export default Trades;
