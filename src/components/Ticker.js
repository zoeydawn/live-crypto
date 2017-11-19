import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';

const Ticker = ({ ticker }) => {
  if (!ticker.length) {
    return null;
  }

  return (
    <div className="ticker">
      <div className="left-tick">
        <h1>BTC/USD</h1>
        <p>
          <span id="last-price">{ticker[6]}{' '}{' '}</span>
          <Icon name={ticker[5] > 0 ? 'arrow up' : 'arrow down'} />
          {(Math.round(ticker[5] * 1000) / 10)}%
        </p>
        <p>vol: {ticker[7]}</p>
      </div>
      <div className="right-tick">
        <p>high: {ticker[8]}</p>
        <p>low: {ticker[9]}</p>
        <p>bid: {ticker[0]}</p>
        <p>ask: {ticker[2]}</p>
      </div>
    </div>
  );
}


Ticker.propTypes = {
  ticker: PropTypes.array.isRequired,
};

export default Ticker;
