import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { subscribeToBfx } from '../actions';

class Layout extends Component {
  componentDidMount() {
    this.props.subscribeToBfx();
  }

  render() {
    return (
      <div>
        <h1>Redux Express</h1>
      </div>
    );
  }
}

Layout.propTypes = {
  subscribeToBfx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  zero: state.zero,
});

const mapDispatchToProps = dispatch => ({
  subscribeToBfx(socket) {
    dispatch(subscribeToBfx(socket));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
