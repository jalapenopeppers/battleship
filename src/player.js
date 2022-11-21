const Gameboard = require('./gameboard.js');

function Player(_name, isBot = false) {
  // should know if he won
  // should know which gameboard hes using
  // should be able to make moves on gameboard
  // should alter behavior if he is a bot
  let hasWon = null;
  let gameboard = Gameboard();

  function placeShip(coord, length, orientation = 'horizontal') {
    gameboard.placeShip(coord, length, orientation);
  }
  function autoPlaceShips() {
    gameboard.autoPlaceShips();
  }
  function receiveMove(coord = null) {
    // this function can be called with no args if
    //   the opposing player is a bot
    if (coord === null) {
      /* 
        Quick and dirty way to make bot pick a valid coord.
        Refactor so it randomly picks one of the available coords from
          an array pf available coords, reducing computations.
      */
      do {
        coord = [Math.floor(Math.random() * 10 + 1),
          Math.floor(Math.random() * 10 + 1)];
      } while (this.gameboard.receiveAttack(coord) === null);
    }
    let returnVal = gameboard.receiveAttack(coord);
    if (gameboard.areAllShipsSunk()) {
      // other player wins
      this.hasWon = false;
    }
    return returnVal;
  }
  function reset() {
    this.hasWon = null;
    this.gameboard.reset();
  }
  
  const returnedObj = {
    hasWon,
    gameboard,
    isBot,
    placeShip,
    autoPlaceShips,
    receiveMove,
    reset,
    get name() { return _name },
    set name(newName) {
      if ([...newName].length <= 20) {
        _name = newName;
      } else {
        console.log('Name is too long, reduce to 20 characters or less.');
      }
    },
  }

  return returnedObj;
}

module.exports = Player;