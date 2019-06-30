/******************************************
Treehouse Techdegree:
FSJS Project 4 - OOP Game App
Developer: Preston Carter
https://github.com/preston-carter
app.js
******************************************/

//Wait to run the script until the content has fully loaded.
$(function() {

  /***
    Initialize a new instance of the game and start when user clicks 'Start Game'
  ***/
  const game = new Game();
  $('#btn__reset').click( e => {
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); 
  });



});
