var player1Turn = true;
var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
$(".box").click(function(){
  play(this);
});


function play(box){
  if($(box).text().length == 0)
  {
    if(player1Turn){
      $(box).html("X");
      gameBoard[num/3][num%3] = 'X';
    }
    else{
      $(box).html("O");
      gameBoard[num/3][num%3] = 'O';
    }
    player1Turn = !player1Turn;
  }
}
