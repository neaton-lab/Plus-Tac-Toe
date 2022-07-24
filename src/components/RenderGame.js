import React from "react";
import "./Region"
import Region from "./Region";

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        // Bind the position to easily usable values
        this.x_pos = props.x_pos;
        this.y_pos = props.y_pos;
    }

    claim = (player) => {
        this.props.sendClaim(this.x_pos, this.y_pos, player);
    }

    render() {
        return (
            <button className="bg-white hover:bg-slate-300 text-black h-[40px] md:h-[90px] w-[40px] md:w-[90px] border-2 md:border-4 border-black text-3xl md:text-5xl text-center -mt-1 -mr-1 p-0" 
            onClick={() => {
                this.setState({value: 'X'});
                this.claim('X');
            }}
            >
                {this.state.value}
            </button>
        );
    }
}

class Grid {
    constructor() {
        // Initialize a 2D array
        this.grid = [];
        for (var i = 0 ; i < 9 ; i++) {
            this.grid[i] = [];
            for (var j = 0 ; j < 9 ; j++) {
                this.grid[i][j] = '';
            }
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.grid = new Grid();
        this.initRegions(this);
    }

    initRegions = (board) => {
        board.regions = [];
        board.regions[0] = new Region(0, 0, 2, 2, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(3, 5, 2, 2, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(6, 8, 2, 2, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(0, 0, 3, 5, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(3, 5, 3, 5, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(6, 8, 3, 5, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(0, 0, 6, 8, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(3, 5, 6, 8, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
        board.regions[0] = new Region(6, 8, 6, 8, board.sendClaimer.bind(board), board.getRegionWinner.bind(board));
    }
    
    getClaim = (x_pos, y_pos, player) => {
        this.grid.grid[x_pos][y_pos] = player;
        console.log(this.grid.grid);
    }
    
    renderSquare(x_pos, y_pos) {
        return <Square 
                x_pos={x_pos}
                y_pos={y_pos}
                sendClaim={this.getClaim.bind(this)}
                />;
    }

    // Used to send the value of a square to a region for checking
    sendClaimer = (x_pos, y_pos) => {
        return this.grid.grid[x_pos][y_pos];
    }

    // Easy way to get the winner of a region
    getRegionWinner = () => {
        return this.winner;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="mb-[10px] text-3xl">{status}</div>
                <div className="flex justify-center">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(0, 3)}
                    {this.renderSquare(0, 4)}
                    {this.renderSquare(0, 5)}
                    {this.renderSquare(0, 6)}
                    {this.renderSquare(0, 7)}
                    {this.renderSquare(0, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(1, 3)}
                    {this.renderSquare(1, 4)}
                    {this.renderSquare(1, 5)}
                    {this.renderSquare(1, 6)}
                    {this.renderSquare(1, 7)}
                    {this.renderSquare(1, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(2, 3)}
                    {this.renderSquare(2, 4)}
                    {this.renderSquare(2, 5)}
                    {this.renderSquare(2, 6)}
                    {this.renderSquare(2, 7)}
                    {this.renderSquare(2, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(3, 3)}
                    {this.renderSquare(3, 4)}
                    {this.renderSquare(3, 5)}
                    {this.renderSquare(3, 6)}
                    {this.renderSquare(3, 7)}
                    {this.renderSquare(3, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(4, 0)}
                    {this.renderSquare(4, 1)}
                    {this.renderSquare(4, 2)}
                    {this.renderSquare(4, 3)}
                    {this.renderSquare(4, 4)}
                    {this.renderSquare(4, 5)}
                    {this.renderSquare(4, 6)}
                    {this.renderSquare(4, 7)}
                    {this.renderSquare(4, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(5, 0)}
                    {this.renderSquare(5, 1)}
                    {this.renderSquare(5, 2)}
                    {this.renderSquare(5, 3)}
                    {this.renderSquare(5, 4)}
                    {this.renderSquare(5, 5)}
                    {this.renderSquare(5, 6)}
                    {this.renderSquare(5, 7)}
                    {this.renderSquare(5, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(6, 0)}
                    {this.renderSquare(6, 1)}
                    {this.renderSquare(6, 2)}
                    {this.renderSquare(6, 3)}
                    {this.renderSquare(6, 4)}
                    {this.renderSquare(6, 5)}
                    {this.renderSquare(6, 6)}
                    {this.renderSquare(6, 7)}
                    {this.renderSquare(6, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(7, 0)}
                    {this.renderSquare(7, 1)}
                    {this.renderSquare(7, 2)}
                    {this.renderSquare(7, 3)}
                    {this.renderSquare(7, 4)}
                    {this.renderSquare(7, 5)}
                    {this.renderSquare(7, 6)}
                    {this.renderSquare(7, 7)}
                    {this.renderSquare(7, 8)}
                </div>
                <div className="flex justify-center">
                    {this.renderSquare(8, 0)}
                    {this.renderSquare(8, 1)}
                    {this.renderSquare(8, 2)}
                    {this.renderSquare(8, 3)}
                    {this.renderSquare(8, 4)}
                    {this.renderSquare(8, 5)}
                    {this.renderSquare(8, 6)}
                    {this.renderSquare(8, 7)}
                    {this.renderSquare(8, 8)}
                </div>
            </div>
        );
    }
}

class RenderGame extends React.Component {
    render() {
        return (
            <div className="">
                <div className="">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        );
    }
}

export default RenderGame;