import PropTypes from "prop-types";
import React from "react";
import { openCell, markFlag, endGame } from "../actions/GamePlayActions";
import Mine from "./Mine";
import PlaceHolder from "./PlaceHolder";
import Count from "./Count";
import FlagMark from "./FlagMark";
import { openMines } from "../actions/InitActions";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  cellData: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
};
class Cell extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleFlagMark = this.handleFlagMark.bind(this);
  }

  handleClick() {
    const { dispatch, cellData, game } = this.props;
    const { gameOver, mineMarked, totalMines } = game;
    if (cellData.isMine && !gameOver && totalMines > mineMarked.length && !cellData.markAsMine) {
      dispatch(openCell(cellData));
      // Show all the mines to user as game is over
      dispatch(openMines());
      dispatch(endGame());
      return;
    }
    if (!gameOver && !cellData.markAsMine) {
      dispatch(openCell(cellData));
    }
  }

  handleFlagMark() {
    const { dispatch, cellData, game } = this.props;
    const { gameOver, mineMarked=[], totalMines } = game;
    if (cellData.markAsMine || (!cellData.isOpen && !gameOver && mineMarked.length < totalMines)) {
      cellData.markAsMine = !cellData.markAsMine;
      dispatch(markFlag(cellData));
    }
  }

  getClassName() {
    const { cellData } = this.props;
    if (cellData.isOpen) {
      return ((cellData.row + cellData.col) % 2 === 0 ? "cell open--light" : "cell open--dark");
    }
    return ((cellData.row + cellData.col) % 2 === 0 ? "cell even" : "cell odd");
  }

  render() {
    const className = this.getClassName();
    return (
      <div className={`${className}`} onClick={this.handleClick} onContextMenu={this.handleFlagMark}>
        <Mine {...this.props} />
        <Count {...this.props} />
        <PlaceHolder {...this.props} />
        <FlagMark {...this.props} />
      </div>
    );
  }
}
Cell.propTypes = propTypes;

export default Cell;