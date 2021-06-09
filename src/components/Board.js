import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    const { squares, winningSquares } = this.props;
    return (
      <Square
        value={squares[i]}
        winnerClass={winningSquares && winningSquares.includes(i) ? 'square--winner' : ''}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    // Based on previosu hardcoded values of Game state.squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // Output squares in format [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    const rows = Array(Math.sqrt(this.props.squares.length)).fill(null);
    const cells = rows;
    const rowsWrap = rows.map((row, i) => {
      const cellsWrap = cells.map((cell, j) => {
        const square = (rows.length * i) + j;
        // TODO refactor square component so we can remove renderSquare.
        return (
          // eslint-disable-next-line react/no-array-index-key
          <span key={square}>{this.renderSquare(square)}</span>
        );
      });
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="board-row" key={i}>{cellsWrap}</div>
      );
    });
    return (
      <div>{rowsWrap}</div>
    );
  }
}

export default Board;
