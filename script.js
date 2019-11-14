let winConditions =
[ [0,1,2], [3,4,5],
[6,7,8], [0,3,6],
[1,4,7], [2,5,8],
[0,4,8], [2,4,6] ]; // All the possible win conditions in the game
let gameOver = false;
let playerSwitch = true;

$('.playbox').click(function(e){
  if (gameOver) {
    return;
  }
  if(!$(this).hasClass('X') && !$(this).hasClass('O')) {
    console.log($(this));

    if (playerSwitch) {
      $(this).addClass('X');
      $(this).text('X');
    }

    else {
      $(this).addClass('O');
      $(this).text('O');
    }
  }
  playerSwitch = !playerSwitch;
  checkWin();
});

function checkWin () {
  if ( $('.X').length < 3 && $('.O').length < 3 ) { // You can never win as long as the amount of X's and O's are less than 3.
    return false;
  }

  for (let i = 0; i < winConditions.length; i++) {
    let player = null;
    let win = true;
    for (let id of winConditions[i]) {
      if ($('#' + id).hasClass('X')) { // if player X has placed on this tile
        if (player === null) {
          player = 'X';
        }
        else if (player !== 'X') { // if previous tiles weren't X
          win = false;
          break;
        }
      }
      else if ($('#' + id).hasClass('O')) { // Same thing as above, but for O
        if (player === null) {
          player = 'O';
        }
        else if (player !== 'O') {
          win = false;
          break;
        }
      } else { // nothing on this tile, impossible to win
        win = false;
      }
      if ( winConditions[winConditions.length - 1]) {

      }
    }
    if (win && player != null) { // Game Over !
      console.log('Player ' + player + ' has won!');
      console.log(winConditions[i]);

      $('#winalert').text('Player ' + player + ' has won!');
      gameOver = true;
      break;
    }
  }
}

for ( let i = 1; i < 10; i++ ) {
  console.log($('#'+ i).text)
}

function gameReset () {
  gameOver = false;
  $('#winalert').text('');
  playerSwitch = true;
  console.log("hej");

  $('.playbox').each(function(e) {

    $(this).removeClass('X');
    $(this).removeClass('O');
    $(this).text('');
  });
}

$('#reset').click(function(e){
  gameReset()
});
