/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }
   /*
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
   createPhrases() {
     const phrasesInit = [
       new Phrase('somewhere something incredible is waiting to be known'),
       new Phrase('you cannot blame gravity for falling in love'),
       new Phrase('not all those who wander are lost'),
       new Phrase('the only true wisdom is in knowing you know nothing'),
       new Phrase('it is during our darkest moments that we must focus to see the light')
     ];
     return phrasesInit;
   }
   /*
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
   getRandomPhrase() {
     let randomIndex = Math.floor(Math.random() * this.phrases.length);
     let randomPhrase = this.phrases[randomIndex];
     return randomPhrase;
   }
   /*
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    $('#overlay').hide();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /*
  * Handles all user interaction and associated methods when a user
  * selects a letter: captures letter, checks against phrase,
  * displays if matched, removes life if not, checks if game is won,
  * checks if game is over
  */
  handleInteraction(letter) {
      if ( phrase.checkLetter(letter) ) {
        phrase.showMatchedLetter(letter);
      }
      else {
        this.removeLife();
      }
      if ( this.checkForWin() ) {
        this.gameOver();
      }
  }
  /*
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
   if ( $('.hide').length > 0 ) {
     return false;
   }
   else {
     return true;
   }
 }
  /*
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed += 1;
    if ( this.missed == 1 ) {
      $('.tries:eq(4) img').attr('src','images/lostHeart.png');
    }
    if ( this.missed == 2 ) {
      $('.tries:eq(3) img').attr('src','images/lostHeart.png');
    }
    if ( this.missed == 3 ) {
      $('.tries:eq(2) img').attr('src','images/lostHeart.png');
    }
    if ( this.missed == 4 ) {
      $('.tries:eq(1) img').attr('src','images/lostHeart.png');
    }
    else if( this.missed == 5 ) {
      $('.tries:eq(0) img').attr('src','images/lostHeart.png');
      this.gameOver();
    }
  }
  /*
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver() {
    $('#overlay').show();
    if ( this.missed > 0 && this.checkForWin() ) {
      $('#overlay').removeClass('start').addClass('win');
      $('#overlay h1').text('Congrats, you win!');
    }
    else {
      $('#overlay').removeClass('start').addClass('lose');
      $('#overlay h1').text("You're out of lives, better luck next time!");
    }
  }
 }
