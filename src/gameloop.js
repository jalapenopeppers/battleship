const Player = require('./player.js');
import { DOMInteraction } from './dominteraction.js';

const Gameloop = (() => {
  const p1 = Player('P1', false);
  const p2 = Player('Computer', true);

  function checkWinner() {
    // returns true if someone has one, returns false if not
    if (p1.hasWon === false) {
      p2.hasWon === true;
      // show winner visually in DOM
      return true;
    }
    else if (p2.hasWon === false) {
      p1.hasWon === true;
      // show winner visually in DOM
      return true;
    }
    return false;
  }

  // place ships
  DOMInteraction.changeInstructionsTo('Place your ships on the left board below.');
  p1.placeShip([1, 1], 3, 'vertical');
  p1.placeShip([2, 1], 2, 'horizontal');
  p2.placeShip([1, 1], 3, 'vertical');
  p2.placeShip([2, 1], 2, 'horizontal');

  DOMInteraction.createGrids(p1, p2);

  // while (!checkWinner()) {
  //   // get player 1 input and send to player 2 board
  //   DOMInteraction.changeInstructionsTo('Fire a shot Player 1!');
    

  //   // get player 2 input and send to player 1 board
  // }

  return {
    p1,
    p2,
  }
})();

export {Gameloop};