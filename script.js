/*
Five parts to game
1. Initial states
2. Anonymous function
*/
window.onload = function functionName() {
  var num;
  var box;
  var ctx;
  var turn = 1;
  var filled;
  var symbol;
  var winner;
  var gameOver = false;
  filled = [false, false, false, false, false, false, false, false, false];
  symbol = ['', '', '', '', '', '', '', '', '',];
  winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  //winner[0] = [0, 1, 2]
  //winner[1] = [3, 4, 5]
  //winner[0][0] = 0
  //winner[0][1] = 1
  //winner[0][2] = 2
}
