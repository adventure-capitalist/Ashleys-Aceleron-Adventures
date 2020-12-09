import React, { Component } from 'react';
class BingoSquare extends Component {
  
    render() { 
        return ( 
            
                  <div className={this.props.selected ? "selected" : ""} onClick={this.props.onClick}>{this.props.value}</div>
         );
    }
}
 
export default BingoSquare;