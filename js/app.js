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
let keyPressed = [];
const $menu = $('#overlay');
let $menuH1 = $('#overlay h1');
const $keyButton = $('.key');

$('#btn__reset').click( () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
/*
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
$keyButton.click( (e) => {
  let button = e.target;
  game.handleInteraction(button);
});
/*
* Handles keyboard key release
*/
$(document).keyup( (e) => {
  let keyPress = e.key;
  if ( $menu.is(':visible') ) {
    e.preventDefault;
  }
  else if ( !keyPressed.includes(keyPress) ) {
    $keyButton.each( (index, key) => {
      if ( $(key).text() === keyPress ) {
        game.handleInteraction(key);
      }
    });
    keyPressed.push(keyPress);
  }
});
