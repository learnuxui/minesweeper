import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
    cellData: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};
class Mine extends React.Component {
    render() {
        const { cellData, game } = this.props;
        const { gameOver } = game;
        if (cellData.isMine && cellData.isOpen && gameOver && !cellData.markAsMine) {
            return (
                <div className="mine"><FontAwesomeIcon icon={faBomb} /></div>
            );
        }
        return null;
    }
}
Mine.propTypes = propTypes;

export default Mine;