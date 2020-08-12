import PropTypes from "prop-types";
import React from "react";
const propTypes = {
    game: PropTypes.object.isRequired,
};
class GameOver extends React.Component {
    render() {
        const { gameOver } = this.props.game;
        if (gameOver) {
            return (
                    <div className="blink"> Game Over </div>
            );
        }
        return null;
    }
}
GameOver.propTypes = propTypes;

export default GameOver;