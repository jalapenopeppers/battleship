const Player = require('./player.js');
import { DOMInteraction } from './dominteraction.js';

const Gameloop = (() => {
  const p1 = Player('P1', false);
  const p2 = Player('Computer', true);
  let currentPlayer = 'p1';

  function checkWinner() {
    // returns true if someone has one, returns false if not
    if (p1.hasWon === false) {
      p2.hasWon = true;
      // show winner visually in DOM
      console.log('p2 has won!');
      return true;
    }
    else if (p2.hasWon === false) {
      p1.hasWon = true;
      // show winner visually in DOM
      console.log('p1 has won!');
      return true;
    }
    else {
      // no one has won, next turn
      if (this.currentPlayer === 'p1') {
        this.currentPlayer = 'p2';
        if (p2.isBot) {
          console.log('p2 is a bot, make an attack automatically');
          // make attack
          p1.receiveMove();
          // refresh squares manually
          DOMInteraction.refreshGrid('.p1-grid-container', p1);
          this.checkWinner(); // checks for winner and switches back to p1 if no one has won
        }
      } else {
        this.currentPlayer = 'p1';
      }
    }
    console.log(`currentPlayer shoudl now be ${this.currentPlayer}`);
    return false;
  }

  // Give player obj references to DOMInteraction module
  DOMInteraction.setUp(p1, p2);

  // place ships
  DOMInteraction.changeInstructionsTo('Place your ships on the left board below.');
  p1.placeShip([1, 1], 3, 'vertical');
  p1.placeShip([2, 1], 2, 'horizontal');
  p2.placeShip([1, 1], 3, 'vertical');
  p2.placeShip([2, 1], 2, 'horizontal');

  DOMInteraction.createGrids();

  // while (!checkWinner()) {
  //   // get player 1 input and send to player 2 board
  //   DOMInteraction.changeInstructionsTo('Fire a shot Player 1!');
    

  //   // get player 2 input and send to player 1 board
  // }

  return {
    currentPlayer,
    checkWinner,
  }
})();

export {Gameloop};