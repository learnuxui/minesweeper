import PropTypes from "prop-types";
import React from "react";

const propTypes = {
    cellData: PropTypes.object.isRequired,
};
class PlaceHolder extends React.Component {
    render() {
        const { cellData } = this.props;
        if (!cellData.isOpen) {
            return (
                <div></div>
            );
        }
        if (cellData.neighbors === 0 && !cellData.isMine && !cellData.markAsMine) {
            return (
                ""
            );
        }
        return null;
    }
}
PlaceHolder.propTypes = propTypes;

export default PlaceHolder;