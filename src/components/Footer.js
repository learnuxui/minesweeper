import PropTypes from "prop-types";
import React from "react";
import { endGame } from "../actions/GamePlayActions";
import { openMines } from "../actions/InitActions";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import GameOver from "./GameOver";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};
class Footer extends React.Component {
    constructor() {
        super();
        this.handleFinish = this.handleFinish.bind(this);
    }
    handleFinish() {
        const { dispatch } = this.props;
        dispatch(openMines());
        dispatch(endGame());
    }
    render() {
        return (
            <div className="game__bar">
                <div className="options">
                    <button onClick={this.handleFinish}>
                        Finish
                    </button>
                    <div data-tip data-for="howToPlay" className="white"><FontAwesomeIcon icon={faInfo} /></div>
                    <ReactTooltip id="howToPlay" place="bottom" effect="solid">
                        <ul>
                            <li>Left-Click on the cell to open it.</li>
                            <li>Right-Click to mark/unmark a cell as mine.</li>
                            <li>Click Finish to check marked flags are correct.</li>
                        </ul>
                    </ReactTooltip>
                </div>
                <GameOver {...this.props} />
            </div>
        );
    }
}
Footer.propTypes = propTypes;

export default Footer;