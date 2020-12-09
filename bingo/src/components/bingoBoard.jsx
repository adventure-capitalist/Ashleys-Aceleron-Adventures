import React, { Component } from 'react';
import BingoSquare from './bingoSquare'


class BingoBoard extends Component {
    render() { 
        let rows = [];
    for(let i = 0; i < 5; i++) {
      let cols = [];
      for(let j = 0; j < 5; j++) {
        const ind = j + i * 5;
        cols.push(
          <td key={"col" + j} className={this.props.selectedSquares[ind] ? 'selected' : ''}>
            <BingoSquare
              value={this.props.squareValues[ind]} 
              selected={this.props.selectedSquares[ind]} 
              onClick={() => this.props.onClick(ind)}
              />
          </td>);
      }
      rows.push(
        <tr key={"row" + i}>{cols}</tr>
      )
    }
        return ( 
                
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        )
}
}
 
export default BingoBoard;