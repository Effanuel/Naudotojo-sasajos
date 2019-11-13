const setSymbol = (i, j, symbol) => {
  $(`#tile${i}${j}`).text(symbol);
};

class TicTacToe {
  constructor() {
    this.state = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];
    this.player_move = "X";
  }
  get getState() {
    return this.state;
  }
  updatePlayerMove() {
    this.player_move == "X"
      ? (this.player_move = "O")
      : (this.player_move = "X");
  }
  setState(i, j, symbol) {
    if (this.state[i][j] == " ") {
      this.state[i][j] = symbol;
      setSymbol(i, j, symbol);

      const player_state = this.checkState();
      if (player_state == "X" || player_state == "O")
        alert(`${player_state} WON`);
      else if (player_state == "TIE") alert("TIE");
      else this.updatePlayerMove();
    }
  }
  checkState() {
    const same = array => {
      if (array.includes(" ")) return false;
      return array.every((val, i, arr) => val === arr[0]);
    };
    const state = this.state;
    const ver1 = [state[0][0], state[1][0], state[2][0]];
    const ver2 = [state[0][1], state[1][1], state[2][1]];
    const ver3 = [state[0][2], state[1][2], state[2][2]];
    const diag1 = [state[0][0], state[1][1], state[2][2]];
    const diag2 = [state[0][2], state[1][2], state[0][2]];

    const spread_state = [...state[0], ...state[1], ...state[2]];
    if (!spread_state.includes(" ")) {
      return "TIE";
    }

    if (
      same(state[0]) ||
      same(state[1]) ||
      same(state[2]) ||
      same(ver1) ||
      same(ver2) ||
      same(ver3) ||
      same(diag1) ||
      same(diag2)
    )
      return this.player_move;

    return "."; // Continue game
  }

  //
  //
  //

  resetGame() {
    this.state = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];
    this.player_move = "X";

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $(`#tile${i}${j}`).text("");
      }
    }
  }

  max() {
    // POSSIBLE VALUES
    // -1 LOSE
    // 0 TIE
    // 1 WIN

    let maxv = -2,
      px,
      py,
      m,
      min_return;

    const player_state = this.checkState();

    if (player_state == "X") return [-1, 0, 0];
    else if (player_state == "O") return [1, 0, 0];
    else if (player_state == "TIE") return [0, 0, 0];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.state[i][j] == " ") {
          this.state[i][j] = "O";
          min_return = this.min();
          m = min_return[0];
          px = min_return[1];
          py = min_return[2];

          if (m > maxv) {
            maxv = m;
            px = i;
            py = j;
          }
          this.state[i][j] = " ";
        }
      }
    }
    return [maxv, px, py];
  }
  min() {
    // POSSIBLE VALUES
    // -1 LOSE
    // 0 TIE
    // 1 WIN

    let minv = 2,
      qx,
      qy,
      m,
      max_return;

    const player_state = this.checkState();

    if (player_state == "X") return [-1, 0, 0];
    else if (player_state == "O") return [1, 0, 0];
    else if (player_state == "TIE") return [0, 0, 0];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.state[i][j] == " ") {
          this.state[i][j] = "X";
          max_return = this.max();
          m = max_return[0];
          qx = max_return[1];
          qy = max_return[2];

          if (m < minv) {
            minv = m;
            qx = i;
            qy = j;
          }
          this.state[i][j] = " ";
        }
      }
    }
    return [minv, qx, qy];
  }

  play() {
    let m, qx, qy, px, py, min_return, max_return;
    while (true) {
      setTimeout(function() {
        console.log("TIMEOUT");
      }, 5000);
      $("[id^=tile]").click(function() {
        px = this.id[4];
        px = this.id[5];
        qx = px;
        qy = px;
        break;
      });
    }
    // // while (true) {
    //   this.resetGame();
    //   const player_state = this.checkState();
    //   if (player_state == "X") alert("PLAYER X WON");
    //   else if (player_state == "O") alert("PLAYER Y WON");
    //   else if (player_state == "TIE") alert("TIE");
    //   if (this.player_move == "X") {
    //     min_return = this.min();
    //     m = min_return[0];
    //     qx = min_return[1];
    //     qy = min_return[2];
    //     while (true) {
    //       console.log("hello");
    //       $("[id^=tile]").click(function() {
    //         px = this.id[4];
    //         px = this.id[5];
    //         qx = px;
    //         qy = px;
    //         break;
    //       });
    //     }
    //   } else {
    //     max_return = this.max();
    //     m = max_return[0];
    //     px = max_return[1];
    //     py = max_return[2];
    //     setSymbol(px, py, "O");
    //     this.updatePlayerMove();
    //   }
    // }
  }
}

tic = new TicTacToe();
tic.play();

// $(function() {
//   tic = new TicTacToe();
//   $("[id^=tile]").click(function() {
//     const i = this.id[4];
//     const j = this.id[5];
//     tic.setState(i, j, tic.player_move);
//   });
// });
