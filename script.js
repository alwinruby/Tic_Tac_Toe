/*
Five parts to game
1. Initial states
2. Anonymous function
*/
window.onload = function() {
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

  //2. New Game button
  var n = document.getElementById("new");
  n.addEventListener("click", newGame);

  //newGame function
  function newGame(){
    document.location.reload();
  }

  //3. canvas click + retrieving the box's Number
  //canvas click event
  document.getElementById("tic").addEventListener("click", function(e)
  {
    boxClick(e.target.id);
  });

}
