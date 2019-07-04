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
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  });
