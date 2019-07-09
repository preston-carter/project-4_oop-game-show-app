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
       new Phrase('without science everything is a miracle'),
       new Phrase('you cannot blame gravity for falling in love'),
       new Phrase('not all those who wander are lost'),
       new Phrase('science is magic that works'),
       new Phrase('i solemnly swear that i am up to no good'),
       new Phrase('do not let the muggles get you down'),
       new Phrase('after all this time'),
       new Phrase('one can never have enough socks'),
       new Phrase('you are a wizard harry'),
       new Phrase('moonlight drowns out all but the brightest stars'),
       new Phrase('all is well that ends better'),
       new Phrase('a wizard is never late'),
       new Phrase('science the shit out of it'),
       new Phrase('come on tars'),
       new Phrase('this is no time for caution')
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
    $menu.slideUp();
    game.gameReset();
    keyPressed.length = 0;
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  /*
  * Handles all user interaction and associated methods when a user
  * selects a letter: captures letter, checks against phrase,
  * displays if matched, removes life if not, checks if game is won,
  * checks if game is over
  */
  handleInteraction(button) {
      let $letter = $(button).text();
      $(button).prop('disabled', true);
      if ( this.activePhrase.checkLetter($letter) ) {
        this.activePhrase.showMatchedLetter($letter);
        $(button).addClass('chosen');
      }
      else {
        this.removeLife();
        $(button).addClass('wrong');
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
    $menu.slideDown();
    if ( this.missed < 5 && this.checkForWin() ) {
      $menu.removeClass('start').addClass('win');
      $menuH1.text('Congrats, you win!');
    }
    else {
      $menu.removeClass('start').addClass('lose');
      $menuH1.text("You're out of lives, better luck next time!");
    }
    /*
    * When game is complete, reset the game board so that clicking
    * 'start game' will load a new game
    */
  }
  gameReset() {
    $('#phrase ul li').remove();
    $keyButton.each( (index, key) => {
      $(key).prop('disabled', false);
      $(key).removeClass('chosen');
      $(key).removeClass('wrong');
      $(key).addClass('key');
    });
    $('.tries img').each( (index, img) => {
      $(img).attr('src','images/liveHeart.png');
    });
    $menu.removeClass('win').removeClass('lose');
  }
 }
