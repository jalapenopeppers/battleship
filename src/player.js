const Gameboard = require('./gameboard.js');

function Player(name) {
  // should know if he won
  // should know which gameboard hes using
  // should be able to make moves on gameboard
  // should alter behavior if he is a bot
  let hasWon = null;
  let gameboard = Gameboard();
  
  function placeShip(coord, length, orientation = 'horizontal') {
    gameboard.placeShip(coord, length, orientation);
  }
  function receiveMove(coord = null) {
    // this function can be called with no args if
    //   the opposing player is a bot
    if (coord === null) {
      coord = [Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1)];
    }
    gameboard.receiveAttack(coord);
    if (gameboard.areAllShipsSunk()) {
      // other player wins
      this.hasWon = false;
    }
  }
  
  return {
    placeShip,
    receiveMove,
    hasWon,
  }
}

module.exports = Player;