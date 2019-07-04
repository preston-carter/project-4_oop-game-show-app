/******************************************
Treehouse Techdegree:
FSJS Project 4 - OOP Game App
Developer: Preston Carter
https://github.com/preston-carter
app.js
******************************************/

/***
  Initialize a new instance of the game and start when user clicks 'Start Game'
***/
let game;
$('#btn__reset').click( () => {
  game = new Game();
  game.startGame();
  $('#overlay').removeClass('win').removeClass('lose');
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
/*
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
$('.key').click( (e) => {
      let button = $(e.target);
      game.handleInteraction(button);
      console.log(button);
});
