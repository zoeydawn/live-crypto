import React, { PropTypes } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Disconnect = ({ isConnected, disconnect, connect }) => (
  <div className="button-container">
    {
      isConnected ?
        <Button onClick={disconnect}><Icon name="stop" />stop</Button> :
        <Button onClick={connect}><Icon name="refresh" />reload</Button>
    }
  </div>
);

Disconnect.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  connect: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
};

export default Disconnect;
