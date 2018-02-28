const prompt = require("prompt");

class TicTacToe {
  /* initializes board and coordinates */
  constructor() {
    /* 1-3 is top row, 4-6 is mid row, 7-9 is bottom row */
    this.coordinates = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2]
    };
    this.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
  }

  /* prints out the board */
  printBoard() {
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i].join("|"));
    }
  }

  /** helper function that checks vertical columns for winner
   * @param {String} currentPlayer either "X" or "O"
   * @return {Bool} true if winner, false if not
   */
  checkVertical(currentPlayer) {
    for (let j = 0; j < this.board.length; j++) {
      if (
        this.board[0][j] === currentPlayer &&
        this.board[1][j] === currentPlayer &&
        this.board[2][j] === currentPlayer
      ) {
        return true;
      }
    }
    return false;
  }

  /** helper function that checks horizontal rows for winner
   * @param {String} currentPlayer either "X" or "O"
   * @return {Bool} true if winner, false if not
   */
  checkHorizontal(currentPlayer) {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] === currentPlayer &&
        this.board[i][1] === currentPlayer &&
        this.board[i][2] === currentPlayer
      ) {
        return true;
      }
    }
    return false;
  }

  /** helper function that checks diagonals for winner
   * @param {String} currentPlayer either "X" or "O"
   * @return {Bool} true if winner, false if not
   */
  checkDiagonal(currentPlayer) {
    if (
      (this.board[0][0] === currentPlayer &&
        this.board[1][1] === currentPlayer &&
        this.board[2][2] === currentPlayer) ||
      (this.board[0][2] === currentPlayer &&
        this.board[1][1] === currentPlayer &&
        this.board[2][0] === currentPlayer)
    ) {
      return true;
    } else {
      return false;
    }
  }

  /** helper function that checks if there is tie on board
   * @returns {Boolean} true if tie, false if not
   */
  checkTie() {
    let counter = 0;

    /* we increment counter for every non "-" character that we see */
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j] !== "-") {
          counter++;
        }
      }
    }

    /* if counter is 9, that means all the positions on the board are filled 
    and there still is no winner
    */
    if (counter === 9) {
      return true;
    } else {
      return false;
    }
  }

  /** helper function that updates board after every turn
   * @param {Integer} spot number that represents coordinate on board
   * @param {String} currentPlayer either "X" or "O" based on turn
   * @return {Boolean} true if valid move, false if invalid move
   */
  updateBoard(spot, currentPlayer) {
    /* if out of bounds, return false */
    if (spot < 1 || spot > 9) {
      return false;
    }

    /* get i & j from this.coordinates */
    const i = this.coordinates[spot][0];
    const j = this.coordinates[spot][1];

    /* only update board if it's valid entry */
    if (this.board[i][j] === "-") {
      this.board[i][j] = currentPlayer;
      return true;
    } else {
      return false;
    }
  }

  /* simulates computer's turn */
  playAI() {
    const random = Math.floor(Math.random() * 9) + 1;

    /* computer turn will be re-simulated if random spot isn't valid */
    if (this.updateBoard(random, "O")) {
      if (
        this.checkDiagonal("O") ||
        this.checkHorizontal("O") ||
        this.checkVertical("O")
      ) {
        this.printBoard();
        console.log("Uh-oh! The genius AI has beat you!");
        return;
      } else if (this.checkTie()) {
        this.printBoard();
        console.log("There is no winner. Thanks for playing!");
        return;
      } else {
        this.playGame();
      }
    } else {
      this.playAI();
    }
  }

  /* human's turn in Tic Tac Toe game  */
  playGame() {
    this.printBoard();
    prompt.start();
    prompt.get(["spot"], (err, result) => {
      console.log("Choose a spot (1-9): " + result.spot);

      /* board is only updated if it's a valid move */
      if (this.updateBoard(result.spot, "X")) {
        /* checks for winner or a tie before AI's turn */
        if (
          this.checkDiagonal("X") ||
          this.checkHorizontal("X") ||
          this.checkVertical("X")
        ) {
          this.printBoard();
          console.log("Congratulations! You are the winner!");
          return;
        } else if (this.checkTie()) {
          this.printBoard();
          console.log("There is no winner. Thanks for playing!");
          return;
        } else {
          this.playAI();
        }
      } else {
        console.log("Invalid move! Try again");
        this.playGame();
      }
    });
  }
}

const newGame = new TicTacToe();

/* start game with human's turn */
newGame.playGame();
