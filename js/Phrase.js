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
        $phraseUL.append(`<li class="hide letter" ${char}>${char}</li>`);
      }
    });
  }
 }
