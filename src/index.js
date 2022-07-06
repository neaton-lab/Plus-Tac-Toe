import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i])
        {
            return;
        }
        squares[i] = this.state.xIsNext ? "✓" : "O"; // Make function call
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }


    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="board-row">
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                </div>
                <div className="board-row">
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                </div>
                <div className="board-row">
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                </div>
                <div className="board-row">
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                </div>
                <div className="board-row">
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                </div>
                <div className="board-row">
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                </div>
                <div className="board-row">
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                </div>
                <div className="board-row">
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                    {this.renderSquare(80)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(81).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? '✓' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }
      
      jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
      }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
            "Go to move #" + move :
            "Go to game start";
            return(
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner)
        {
            status = "Winner: " + winner;
        }
        else
        {
            status = "Next player: " + (this.state.xIsNext ? "✓" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Region {
    constructor() {
        this.left = 0;
        this.top = 0;
        this.right = 2;
        this.bottom = 2;
        this.tiles = [
            ['x', '', ''],
            ['x', 'x', 'x'],
            ['', '', '']
        ]
    }
    
    // Checks for if the row has been fully claimed
    checkRow = function(checkTarget) {
        // Check every row
        for (let i = this.top ; i <= this.bottom ; i++) {
            // Go through each row. It the tile isn't claimed, just move on to the next row. If the you're at the end of the row and they're all claimed, then return true
            for (let j = this.left ; j <= this.right ; j++) {
                if (this.tiles[i][j] !== checkTarget) {
                    break;
                }
                else if (j === this.right) {
                    return true;
                }
            }
        }
        // If no row fully claimed, return false
        return false;
    }
    // Checks for if the column has been fully claimed
    checkColumn = function(checkTarget) {
        // Check every column
        for (let i = this.left ; i <= this.right ; i++) {
            // Go through each column. It the tile isn't claimed, just move on to the next column. If the you're at the botton of the column and they're all claimed, then return true
            for (let j = this.top ; j <= this.botton ; j++) {
                if (this.tiles[j][i] !== checkTarget) {
                    break;
                }
                else if (j === this.bottom) {
                    return true;
                }
            }
        }
        // If no column fully claimed, return false
        return false;
    }
    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkRightDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            if (this.tiles[i+this.left][i+this.top] !== checkTarget) {
                return false;
            }
        }
        return true;
    }

    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkLeftDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            if (this.tiles[this.right-i][i+this.top] !== checkTarget) {
                return false;
            }
        }
        return true;
    }

    // Combines all of the other checks into one clean function call
    // Will return true if any happen to pass, otherwise return false
    checkClaimed = function() {
        return this.checkRow('x') || this.checkColumn('x') || this.checkLeftDown('x') || this.checkRightDown('x');
    }
}
