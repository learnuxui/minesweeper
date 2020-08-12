import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faSync } from "@fortawesome/free-solid-svg-icons";
import GameOver from "./GameOver";
import Level from "./Level";
import { startOver } from "../actions/GamePlayActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};
class Header extends React.Component {
    constructor() {
        super();
        this.handleStartOver = this.handleStartOver.bind(this);
    }
    handleStartOver(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(startOver());
    }
    render() {
        const { game } = this.props;
        const { mineMarked, totalMines, score } = game;
        return (
            <div className="game__bar">
                <GameOver {...this.props} />
                <div className="options">
                    <Level {...this.props} />
                    <div className="white"><FontAwesomeIcon icon={faFlag} />&nbsp;&nbsp;{totalMines - mineMarked.length}</div>
                    <div className="white">Score &nbsp;:&nbsp; {score}</div>
                    <div className="white" onClick={this.handleStartOver}><FontAwesomeIcon icon={faSync} /></div>
                </div>
            </div>
        );
    }
}
Header.propTypes = propTypes;

export default Header;