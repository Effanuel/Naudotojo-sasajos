const setSymbol = (i, j, symbol) => {
  $(`#tile${i}${j}`).text(symbol);
};

class TicTacToe {
  constructor() {
    this.state = [['', '', ''], ['', '', ''], ['', '', '']];
    this.player_move = 'X';
  }
  get getState() {
    return this.state;
  }
  updatePlayerMove() {
    this.player_move == 'X'
      ? (this.player_move = 'O')
      : (this.player_move = 'X');
  }
  setState(i, j, symbol) {
    if (this.state[i][j] == '') {
      this.state[i][j] = symbol;
      setSymbol(i, j, symbol);
      this.checkState();
      this.updatePlayerMove();
    }
  }
  checkState() {
    const same = array => {
      if (array.includes('')) return false;
      return array.every((val, i, arr) => val === arr[0]);
    };
    const state = this.state;
    const ver1 = [state[0][0], state[1][0], state[2][0]];
    const ver2 = [state[0][1], state[1][1], state[2][1]];
    const ver3 = [state[0][2], state[1][2], state[2][2]];
    const diag1 = [state[0][0], state[1][1], state[2][2]];
    const diag2 = [state[0][2], state[1][1], state[0][2]];
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
      this.resetGame();
  }
  resetGame() {
    this.state = [['', '', ''], ['', '', ''], ['', '', '']];
    this.player_move = 'X';

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $(`#tile${i}${j}`).text('');
      }
    }
  }
}

tic = new TicTacToe();

$(function() {
  tic = new TicTacToe();
  $('[id^=tile]').click(function() {
    const i = this.id[4];
    const j = this.id[5];
    tic.setState(i, j, tic.player_move);
  });
});
