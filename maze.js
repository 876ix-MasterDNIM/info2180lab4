var flag = false;  //Whether user crossed a boundary

//Runs the logic of the game on window load event
window.onload = function() {
  $('maze').onmouseleave = crossBoundary;
  $('start').onclick = startGame;
  $('end').onmouseover = gameOver;
  var boundaries = $$('div.boundary');
  boundaries.each(function(element) {
    element.onmouseover = crossBoundary;
  });
};

//Colors borders red if user crossed boundary
function crossBoundary() {
  flag = true;
  var boundaries = $$('div.boundary');
  boundaries.each(function(element) {
    element.addClassName('youlose');
  });
}

//Resets the game
function startGame() {
  flag = false;
  var boundaries = $$('div#maze div.boundary');
  boundaries.each(function(element) {
    element.removeClassName('youlose');
  });
}

//Ends the game and determines whether user lost or won
function gameOver() {
  if (flag) {
    $('status').innerHTML = 'You lose.';
  }
  else {
    $('status').innerHTML = 'You win.';
  }
}
