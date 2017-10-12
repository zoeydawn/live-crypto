import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const Disconnect = ({ isConnected }) => (
  <div className="button-container">
    {
      isConnected ?
        <Button>disconnect</Button> :
        <Button>connect</Button>
    }
  </div>
);

Disconnect.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default Disconnect;
