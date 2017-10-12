import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const Disconnect = ({ isConnected, disconnect, connect }) => (
  <div className="button-container">
    {
      isConnected ?
        <Button onClick={disconnect}>disconnect</Button> :
        <Button onClick={connect}>connect</Button>
    }
  </div>
);

Disconnect.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  connect: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
};

export default Disconnect;
