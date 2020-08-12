import PropTypes from "prop-types";
import React from "react";
import { faFlag, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {
    cellData: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};
class FlagMark extends React.Component {
    render() {
        const { cellData, game } = this.props;
        const { gameOver } = game;
        if(cellData && cellData.markAsMine && !gameOver) {
            return (
                <div className="mine"><FontAwesomeIcon icon={faFlag} /></div>
            );
        }
        if(cellData && cellData.markAsMine && gameOver) {
            if(cellData.isMine) {
                return (
                    <div className="mine"><FontAwesomeIcon icon={faCheck} /></div>
                );
            } else {
                return (
                    <div className="mine"><FontAwesomeIcon icon={faTimes} /></div>
                );
            }
            
        }
        return null;
    }
}
FlagMark.propTypes = propTypes;

export default FlagMark;