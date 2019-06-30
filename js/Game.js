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
    return this.activePhrase;
  }
 }
