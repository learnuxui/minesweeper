import PropTypes from "prop-types";
import React from "react";
import { startOver } from "../actions/GamePlayActions";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};
class Level extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        const { dispatch } = this.props;
        dispatch(startOver(event.target.value));
    }
    render() {
        const { game } = this.props;
        const { levels } = game;
        return (
            <div>
                <select onChange={this.onChange}>
                    <option value={levels.EASY}>Easy</option>
                    <option value={levels.MODRATE}>Moderate</option>
                    <option value={levels.HARD}>Hard</option>
                </select>
            </div>
        );
    }
}
Level.propTypes = propTypes;

export default Level;