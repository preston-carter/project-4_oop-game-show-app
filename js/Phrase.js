/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase;
   }
   /*
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const $phraseUL = $('#phrase ul');
    let charArr = this.phrase.split('');
    charArr.forEach(char => {
      if( char === ' ' ) {
        $phraseUL.append(`<li class="space"> </li>`);
      }
      else {
        $phraseUL.append(`<li class="hide letter ${char}">${char}</li>`);
      }
    });
  }
  /*
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    if ( this.phrase.includes(letter) ) {
      return true;
    }
    else {
      return false;
    }
  }
  /*
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    let matchedLetterLIs = $(`.${letter}`);
    matchedLetterLIs.removeClass('hide').addClass('show');

  }
 }
