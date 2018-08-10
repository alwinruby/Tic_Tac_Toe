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

  function boxClick(numId){
    box = document.getElementById(numId);
    ctx =box.getContext("2d");

    switch (numId) {
      case "canvas1": num = 1;
        break;
      case "canvas1": num = 2;
        break;
      case "canvas1": num = 3;
        break;
      case "canvas1": num = 4;
        break;
      case "canvas1": num = 5;
        break;
      case "canvas1": num = 6;
        break;
      case "canvas1": num = 7;
        break;
      case "canvas1": num = 8;
        break;
      case "canvas1": num = 9;
        break;
    }

    //4. Drawing the shapes on the canvases
    if(filled[num-1] == false) {
      if(gameOver == false) {
        if(turn%2 !=  0) {
          ctx.beginPath();
          ctx.moveTo(15, 15);
          ctx.lineTo(85, 85);
          ctx.moveTo(85, 15);
          ctx.lineTo(15, 85);
          ctx.strokeStyle = "dodgerblue";
          ctx.stroke();
          ctx.closePath();
          symbol[num - 1] = 'X';
        }
        else {
          ctx.beginPath();
          ctx.arc(50, 50, 35, 0, 2 * Mat.PI, false);
          ctx.strokeStyle = "dodgerblue";
          ctx.stroke();
          ctx.closePath();
          symbol[num - 1] = 'O';
        }
        turn++;
        filled[num - 1] = true;
      }
      else {

      }
    }
    else {

    }
  }

}
