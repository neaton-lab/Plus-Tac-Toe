import React from "react";
import "./Region";
import Region from "./Region";
import Board from "./Board";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Square({ turn, onClick, currentPlayers }) {
  const turnText = ["X", "O", "✓", "#"];
  const [myTurn, setMyTurn] = useState(-1);

  useEffect(() => {
    console.log("HMMM");
  }, [turn]);

  return (
    <button
      className="bg-white hover:bg-slate-300 h-[40px] w-[40px] md:h-[75px] md:w-[75px] lg:h-[90px] lg:w-[90px] border-2 md:border-4 border-black text-black text-3xl md:text-5xl text-center -mt-1 -mr-1 p-0"
      onClick={() => {
        setMyTurn(turn);
        onClick();
      }}
    >
      {myTurn === -1 ? "" : turnText[myTurn % currentPlayers]}

      {console.log(currentPlayers)}
    </button>
  );
}

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//     // Bind the position to easily usable values
//     this.x_pos = props.x_pos;
//     this.y_pos = props.y_pos;
//     this.turn = props.turn;
//     this.onClick = props.onClick;
//     this.turnText = ["X", "O", "✓", "#"];
//     this.currentPlayers = props.currentPlayers;
//   }

//   claim = (player) => {
//     this.props.sendClaim(this.x_pos, this.y_pos, player);
//   };

//   render() {
//     return (
//       <button
//         className="bg-white hover:bg-slate-300 text-black h-[40px] w-[40px] md:h-[75px] md:w-[75px] lg:h-[90px] lg:w-[90px] border-2 md:border-4 border-black text-3xl md:text-5xl text-center -mt-1 -mr-1 p-0"
//         onClick={() => {
//           this.onClick();
//         }}
//       >
//         {this.turnText[this.turn % this.currentPlayers]}
//         {console.log(this.turn)}
//       </button>
//     );
//   }
// }

class Grid {
  constructor() {
    // Initialize a 2D array
    this.grid = [];
    for (var i = 0; i < 9; i++) {
      this.grid[i] = [];
      for (var j = 0; j < 9; j++) {
        this.grid[i][j] = "";
      }
    }
  }
}

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.grid = new Grid();
    this.initRegions(this);
    console.log(props.state);
    this.turn = 0;
    this.turnText = ["X", "O", "✓", "#"];

    var size = 9;
    if (props.state.currentBoard === 0) {
      size = 5;
    }

    if (props.state.currentBoard === 3) {
      size = 11;
    }

    this.grid = [];
    for (var i = 0; i < size; i++) {
      this.grid[i] = [];
      for (var j = 0; j < size; j++) {
        this.grid[i][j] = "";
      }
    }
  }

  initRegions = (board) => {
    board.regions = [];
    board.regions[0] = new Region(
      0,
      2,
      0,
      2,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[1] = new Region(
      0,
      2,
      3,
      5,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[2] = new Region(
      0,
      2,
      6,
      8,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[3] = new Region(
      3,
      5,
      0,
      2,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[4] = new Region(
      3,
      5,
      3,
      5,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[5] = new Region(
      3,
      5,
      6,
      8,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[6] = new Region(
      6,
      8,
      0,
      2,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[7] = new Region(
      6,
      8,
      3,
      5,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
    board.regions[8] = new Region(
      6,
      8,
      6,
      8,
      board.sendClaimer.bind(board),
      board.getRegionWinner.bind(board)
    );
  };

  getClaim = (x_pos, y_pos, player) => {
    this.grid.grid[x_pos][y_pos] = player;
    console.log(this.grid.grid);
  };

  renderSquare(x_pos, y_pos) {
    return (
      <Square
        x_pos={x_pos}
        y_pos={y_pos}
        sendClaim={this.getClaim.bind(this)}
        turn={this.turn}
        onClick={() => {
          console.log("PRINTING CURRENT TURN");
          console.log(this.turn);
          this.forceUpdate();
          console.log("(" + x_pos + ", " + y_pos + ")");
          this.grid[x_pos][y_pos] = this.turnText[this.turn % this.props.state.currentPlayers];
          let winner = this.checkWinner();
          if (winner !== -1) {
            alert("Player " + this.turnText[winner] + " wins!");
          }
          this.turn++;
        }}
        currentPlayers={this.props.state.currentPlayers}
      />
    );
  }

  // Used to send the value of a square to a region for checking
  sendClaimer = (x_pos, y_pos) => {
    // console.log("(" + x_pos + ", " + y_pos + "): " + this.grid[x_pos][y_pos])
    return this.grid[x_pos][y_pos];
  };

  // Easy way to get the winner of a region
  getRegionWinner = () => {
    return this.winner;
  };

  // Returns the player index if there is a winner, otherwise return -1
  checkWinner = () => {
    // Initialization stuff
    let winCount = []
    let freeRegions = 9;
    for (let i = 0 ; i < this.props.state.currentPlayers ; i++) {
      winCount[i] = 0;
    }

    console.log(freeRegions);
    // Gather who has won what regions
    for (let i = 0 ; i < this.props.state.currentPlayers ; i++) {
      for (let j = 0 ; j < 9 ; j++) {
        console.log("Player: " + this.turnText[i % this.props.state.currentPlayers]);
        console.log("Region: " + j);
        let result  = this.regions[j].checkClaimed(this.turnText[i % this.props.state.currentPlayers]);
        if (result) {
          winCount[i]++;
          freeRegions--;
          console.log(freeRegions);
        }
        else if (this.regions[j].checkFull()) {
          console.log("Region " + j + " full.");
          freeRegions--;
          console.log(freeRegions);
        }
        console.log("");
      }
    }
    console.log("");
    // console.log("");
    // console.log("");

    console.log(freeRegions);
    // Still regions to win === no winner yet
    if (freeRegions !== 0) {
      return -1;
    }
    // Every region has a winner or is full, just need to find who has the most
    if (freeRegions === 0) {
      let maxIndex = 0;
      for (let i = 1 ; i < this.props.state.currentPlayers ; i++) {
        if (winCount[maxIndex] > winCount[i]) {
          maxIndex = i;
        }
      }
      return maxIndex;
    }
  }

  render() {
    const status = "Next player: X";
    const board = "Default";
    if (this.props.state.currentBoard % 3 === 0) {
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
          </div>
          <div className="flex justify-center">
            {this.renderSquare(1, 0)}
            {this.renderSquare(1, 1)}
            {this.renderSquare(1, 2)}
            {this.renderSquare(1, 3)}
            {this.renderSquare(1, 4)}
            {this.renderSquare(1, 5)}
            {this.renderSquare(1, 6)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(2, 0)}
            {this.renderSquare(2, 1)}
            {this.renderSquare(2, 2)}
            {this.renderSquare(2, 3)}
            {this.renderSquare(2, 4)}
            {this.renderSquare(2, 5)}
            {this.renderSquare(2, 6)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(3, 0)}
            {this.renderSquare(3, 1)}
            {this.renderSquare(3, 2)}
            {this.renderSquare(3, 3)}
            {this.renderSquare(3, 4)}
            {this.renderSquare(3, 5)}
            {this.renderSquare(3, 6)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(4, 0)}
            {this.renderSquare(4, 1)}
            {this.renderSquare(4, 2)}
            {this.renderSquare(4, 3)}
            {this.renderSquare(4, 4)}
            {this.renderSquare(4, 5)}
            {this.renderSquare(4, 6)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(5, 0)}
            {this.renderSquare(5, 1)}
            {this.renderSquare(5, 2)}
            {this.renderSquare(5, 3)}
            {this.renderSquare(5, 4)}
            {this.renderSquare(5, 5)}
            {this.renderSquare(5, 6)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(6, 0)}
            {this.renderSquare(6, 1)}
            {this.renderSquare(6, 2)}
            {this.renderSquare(6, 3)}
            {this.renderSquare(6, 4)}
            {this.renderSquare(6, 5)}
            {this.renderSquare(6, 6)}
          </div>
        </div>
      );
    } else if (this.props.state.currentBoard % 3 === 1) {
      return (
        <div>
          <div className="text-4xl pb-4">
            Next Player:{" "}
            {this.turnText[this.turn % this.props.state.currentPlayers]}
          </div>
          <div className="grid grid-cols-3 gap-2 bg-red-400">
            <div className="grid grid-cols-3 grid-rows-3 ">
              {this.renderSquare(0, 0)}
              {this.renderSquare(0, 1)}
              {this.renderSquare(0, 2)}
              {this.renderSquare(1, 0)}
              {this.renderSquare(1, 1)}
              {this.renderSquare(1, 2)}
              {this.renderSquare(2, 0)}
              {this.renderSquare(2, 1)}
              {this.renderSquare(2, 2)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 ">
              {this.renderSquare(0, 3)}
              {this.renderSquare(0, 4)}
              {this.renderSquare(0, 5)}
              {this.renderSquare(1, 3)}
              {this.renderSquare(1, 4)}
              {this.renderSquare(1, 5)}
              {this.renderSquare(2, 3)}
              {this.renderSquare(2, 4)}
              {this.renderSquare(2, 5)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(0, 6)}
              {this.renderSquare(0, 7)}
              {this.renderSquare(0, 8)}
              {this.renderSquare(1, 6)}
              {this.renderSquare(1, 7)}
              {this.renderSquare(1, 8)}
              {this.renderSquare(2, 6)}
              {this.renderSquare(2, 7)}
              {this.renderSquare(2, 8)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(3, 0)}
              {this.renderSquare(3, 1)}
              {this.renderSquare(3, 2)}
              {this.renderSquare(4, 0)}
              {this.renderSquare(4, 1)}
              {this.renderSquare(4, 2)}
              {this.renderSquare(5, 0)}
              {this.renderSquare(5, 1)}
              {this.renderSquare(5, 2)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(3, 3)}
              {this.renderSquare(3, 4)}
              {this.renderSquare(3, 5)}
              {this.renderSquare(4, 3)}
              {this.renderSquare(4, 4)}
              {this.renderSquare(4, 5)}
              {this.renderSquare(5, 3)}
              {this.renderSquare(5, 4)}
              {this.renderSquare(5, 5)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(3, 6)}
              {this.renderSquare(3, 7)}
              {this.renderSquare(3, 8)}
              {this.renderSquare(4, 6)}
              {this.renderSquare(4, 7)}
              {this.renderSquare(4, 8)}
              {this.renderSquare(5, 6)}
              {this.renderSquare(5, 7)}
              {this.renderSquare(5, 8)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(6, 0)}
              {this.renderSquare(6, 1)}
              {this.renderSquare(6, 2)}
              {this.renderSquare(7, 0)}
              {this.renderSquare(7, 1)}
              {this.renderSquare(7, 2)}
              {this.renderSquare(8, 0)}
              {this.renderSquare(8, 1)}
              {this.renderSquare(8, 2)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(6, 3)}
              {this.renderSquare(6, 4)}
              {this.renderSquare(6, 5)}
              {this.renderSquare(7, 3)}
              {this.renderSquare(7, 4)}
              {this.renderSquare(7, 5)}
              {this.renderSquare(8, 3)}
              {this.renderSquare(8, 4)}
              {this.renderSquare(8, 5)}
            </div>
            <div className="grid grid-cols-3 grid-rows-3 bg-red-400">
              {this.renderSquare(6, 6)}
              {this.renderSquare(6, 7)}
              {this.renderSquare(6, 8)}
              {this.renderSquare(7, 6)}
              {this.renderSquare(7, 7)}
              {this.renderSquare(7, 8)}
              {this.renderSquare(8, 6)}
              {this.renderSquare(8, 7)}
              {this.renderSquare(8, 8)}
            </div>
          </div>
        </div>
      );
    }
    if (this.props.state.currentBoard % 3 === 2) {
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
            {this.renderSquare(0, 9)}
            {this.renderSquare(0, 10)}
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
            {this.renderSquare(1, 9)}
            {this.renderSquare(1, 10)}
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
            {this.renderSquare(2, 9)}
            {this.renderSquare(2, 10)}
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
            {this.renderSquare(3, 9)}
            {this.renderSquare(3, 10)}
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
            {this.renderSquare(4, 9)}
            {this.renderSquare(4, 10)}
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
            {this.renderSquare(5, 9)}
            {this.renderSquare(5, 10)}
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
            {this.renderSquare(6, 9)}
            {this.renderSquare(6, 10)}
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
            {this.renderSquare(7, 9)}
            {this.renderSquare(7, 10)}
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
            {this.renderSquare(8, 9)}
            {this.renderSquare(8, 10)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(9, 0)}
            {this.renderSquare(9, 1)}
            {this.renderSquare(9, 2)}
            {this.renderSquare(9, 3)}
            {this.renderSquare(9, 4)}
            {this.renderSquare(9, 5)}
            {this.renderSquare(9, 6)}
            {this.renderSquare(9, 7)}
            {this.renderSquare(9, 8)}
            {this.renderSquare(9, 9)}
            {this.renderSquare(9, 10)}
          </div>
          <div className="flex justify-center">
            {this.renderSquare(10, 0)}
            {this.renderSquare(10, 1)}
            {this.renderSquare(10, 2)}
            {this.renderSquare(10, 3)}
            {this.renderSquare(10, 4)}
            {this.renderSquare(10, 5)}
            {this.renderSquare(10, 6)}
            {this.renderSquare(10, 7)}
            {this.renderSquare(10, 8)}
            {this.renderSquare(10, 9)}
            {this.renderSquare(10, 10)}
          </div>
        </div>
      );
    }
  }
}

export default function RenderGame(props) {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="">
      <div className=" px-12  flex items-center justify-center">
        <GameBoard state={location.state} />
      </div>
      <div>
        <div className="grid grid-cols-4 text-center text-2xl md:text-4xl pt-4">
          <h1 className="text-[#d12360]">Player 1: X</h1>
          <h1 className="text-[#2b76d4]">Player 2: O</h1>
          <h1 className="text-[#f5f431]">Player 3: ✓</h1>
          <h1 className="text-[#ff8100]">Player 4: #</h1>
        </div>
      </div>
      <div className="game-info">
        <div>{}</div>
        <ol>{}</ol>
      </div>
    </div>
  );
}
