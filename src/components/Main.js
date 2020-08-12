import PropTypes from "prop-types";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};
class Main extends React.Component {
  render() {
    const { game } = this.props;
    const { grid } = game;
    if (grid) {
      return (
        <div className="container">
          <div className="content">
            <div>
              <Header {...this.props} />
              <Content {...this.props} />
              <Footer {...this.props}/>
            </div>
          </div>
        </div>
      );
    }
    return (<div>Loading</div>);
  }
}
Main.propTypes = propTypes;

export default Main;