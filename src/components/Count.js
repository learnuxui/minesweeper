import PropTypes from "prop-types";
import React from "react";

const propTypes = {
    cellData: PropTypes.object.isRequired,
};
class Count extends React.Component {
    render() {
        const { cellData } = this.props;
        const count = cellData.neighbors;
        if (!(cellData.isMine) && count > 0 && cellData.isOpen) {
            return (
                <div className={`count__color_${count}`}> {count} </div>
            );
        }
        return null;
    }
}
Count.propTypes = propTypes;

export default Count;