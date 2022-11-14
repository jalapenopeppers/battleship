const Player = require('./player.js');

const Gameloop = (() => {
  const p1 = Player();
  const p2 = Player();

  // place ships
  p1.placeShip([1, 1], 3, 'vertical');
  p1.placeShip([2, 1], 2, 'horizontal');
  p2.placeShip([1, 1], 3, 'vertical');
  p2.placeShip([2, 1], 2, 'horizontal');

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
  while (!checkWinner()) {
    // get player 1 input and send to player 2 board
    // get player 2 input and send to player 1 board
  }
})();

export {Gameloop};