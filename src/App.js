import PropTypes from "prop-types";
import React from "react";
import Main from "./components/Main";
import { startOver } from "./actions/GamePlayActions";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startOver());
    document.addEventListener("contextmenu", this.handleContextMenu);
    
  }
  handleContextMenu = (e) => {
    e.preventDefault();
  }
  render() {
      return (
        <div className="App">
            <Main {...this.props}/>
        </div>
      );
  }
}
App.propTypes = propTypes;
export default App;