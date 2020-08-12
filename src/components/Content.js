import PropTypes from "prop-types";
import React from "react";
import Cell from "./Cell";
import CheatBoard from "./CheatBoard";

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
};
class Content extends React.Component {

    renderItem(item, dummy) {
        const key = `${item.row}-${item.col}`;
        const { dispatch, game } = this.props;
        if(dummy) {
            return (
                <td key={key} className="cell"> <CheatBoard dispatch={dispatch} cellData={item} game={game}/> </td>
              );    
        }
        return (
          <td key={key} className="cell"> <Cell dispatch={dispatch} cellData={item} game={game}/> </td>
        );
    }
    renderRow(data, dummy) {
        return ( 
         <tr>
            {
            data.map( cell => { return this.renderItem(cell, dummy); } )}
           </tr>);
    }
    render() {
        const { game } = this.props;
        const { grid } = game;
        return (
            <div className="flex-test">
            <table cellPadding="0">
                <tbody>
                    {grid.map(row => {return this.renderRow(row);})}
                </tbody>
            </table>
            {/* uncomment below code to view CheatBoard view */}
            {/*            
             
            <p>SPACE</p>
            <table cellPadding="0">
                {grid.map(row => {return this.renderRow(row, true);})}
            </table>
           */}
            </div>
            
          );
      }

}
Content.propTypes = propTypes;

export default Content;