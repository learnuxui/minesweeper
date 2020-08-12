import PropTypes from "prop-types";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    cellData: PropTypes.object.isRequired,
};
class CheatBoard extends Component {

    renderMine() {
      const { cellData } = this.props;
      if(cellData.isMine) {
        return (
          <div className="mine"><FontAwesomeIcon icon={faBomb} /></div>
        );
      }
      return null;
    }

    renderPlaceHolder() {
      const { cellData } = this.props;

      if(cellData.neighbors === 0 && !cellData.isMine) {
        return (
          <div>E</div>
        );
      }
      return null;
    }

    renderCount() {
      const { cellData } = this.props;
      const count = cellData.neighbors;
      if(!(cellData.isMine) && count > 0) {
        return (
          <div> {count} </div> 
        );
      }
      return null;
    }
    render() {
        const { cellData } = this.props;
        const className = ((cellData.row + cellData.col) % 2 === 0 ? "cell even" : "cell odd");
          return (
            <div className={`${className}`}>
               {this.renderMine()}
               {this.renderCount()}
               {this.renderPlaceHolder()}
            </div>
          );
      }
}
CheatBoard.propTypes = propTypes;

export default CheatBoard;