import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../App";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class AppContainer extends Component {
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <div>
        <App {...this.props} />        
      </div>
    );
  }
}

AppContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { game } = state;
  return {
    game
  };
}

export default connect(mapStateToProps)(AppContainer);
