const Ship = require('./ship.js');

function Gameboard() {
  let shipList = [];
  let missedShots = [];
  let allShots = [];
  let hitShots = [];
  let shipLengthsToPlace = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  function getShip(coord) {
    let returnVal = null;
    shipList.forEach(shipObj => {
      shipObj.shipCoords.forEach(shipCoord => {
        if (shipCoord[0] === coord[0] &&
          shipCoord[1] === coord[1]) {
          returnVal = shipObj;
        }
      });
    });
    return returnVal;
  }
  // Checks if ship is in a valid location, ie:
  //   Ship is within board bounds
  //   Ship does not overlap another ship
  //   Ship is not adjacent to another ship
  // Returns true if valid, false if not.
  function isShipLocationValid(coord, length, orientation) {
    if ((orientation === 'horizontal' && coord[0] + length - 1 > 10) ||
      (orientation === 'vertical' && coord[1] + length - 1 > 10) ||
      coord[0] < 1 || coord [1] < 1) {
      // console.log('ship out of bounds');
      return false;
    }
    let invalidCoords = [];
    // Find all invalid coords
    for (let i = 0; i < shipList.length; i++) {
      let shipCoords = shipList[i].shipCoords;
      for (let j = 0; j < shipCoords.length; j++) {
        let shipCoord = shipCoords[j];
        if (!isCoordInArray(shipCoord, invalidCoords)) {
          // The coord
          invalidCoords.push(shipCoord);
        }
        if (!isCoordInArray([shipCoord[0] - 1, shipCoord[1] - 1], invalidCoords)) {
          // Top left
          invalidCoords.push([shipCoord[0] - 1, shipCoord[1] - 1]);
        }
        if (!isCoordInArray([shipCoord[0], shipCoord[1] - 1], invalidCoords)) {
          // Top mid
          invalidCoords.push([shipCoord[0], shipCoord[1] - 1]);
        }
        if (!isCoordInArray([shipCoord[0] + 1, shipCoord[1] - 1], invalidCoords)) {
          // Top right
          invalidCoords.push([shipCoord[0] + 1, shipCoord[1] - 1]);
        }
        if (!isCoordInArray([shipCoord[0] - 1, shipCoord[1]], invalidCoords)) {
          // Mid left
          invalidCoords.push([shipCoord[0] - 1, shipCoord[1]]);
        }
        if (!isCoordInArray([shipCoord[0] + 1, shipCoord[1]], invalidCoords)) {
          // Mid right
          invalidCoords.push([shipCoord[0] + 1, shipCoord[1]]);
        }
        if (!isCoordInArray([shipCoord[0] - 1, shipCoord[1] + 1], invalidCoords)) {
          // Bottom left
          invalidCoords.push([shipCoord[0] - 1, shipCoord[1] + 1]);
        }
        if (!isCoordInArray([shipCoord[0], shipCoord[1] + 1], invalidCoords)) {
          // Bottom mid
          invalidCoords.push([shipCoord[0], shipCoord[1] + 1]);
        }
        if (!isCoordInArray([shipCoord[0] + 1, shipCoord[1] + 1], invalidCoords)) {
          // Bottom right
          invalidCoords.push([shipCoord[0] + 1, shipCoord[1] + 1]);
        }
      }
    }
    // Find coords occupied by ship
    let shipCoordsToPlace = [];
    if (orientation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        shipCoordsToPlace.push([coord[0] + i, coord[1]]);
      }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        shipCoordsToPlace.push([coord[0], coord[1]+ i]);
      }
    } else {
      console.log('Ship orientation is invalid');
    }
    // Determine if any of the ship coords is an invalid coord
    for (let i = 0; i < shipCoordsToPlace.length; i++) {
      if (isCoordInArray(shipCoordsToPlace[i], invalidCoords)) {
        return false;
      }
    }
    return true;
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Place ship in gameboard. Returns true if successful, false if not.
  function placeShip(coord, length, orientation = 'horizontal') {
    if (isShipLocationValid(coord, length, orientation)) {
      // ship is in valid location, place it
      let shipCoords = [];
      if (orientation === 'horizontal') {
        for (let i = 0; i < length; i++) {
          shipCoords.push([coord[0] + i, coord[1]]);
        }
      } else if (orientation === 'vertical') {
        for (let i = 0; i < length; i++) {
          shipCoords.push([coord[0], coord[1] + i]);
          // console.log([coord[0], coord[1] + i]);
        }
      }
      shipList.push({
        shipCoords,
        'shipObj': Ship(length),
      });
      return true;
    } else {
      console.log('Ship location is invalid');
      return false;
    }
  }
  // Place all ships automatically
  function autoPlaceShips() {
    let localShipLengths = shipLengthsToPlace.slice();
    let availableCoords = [];
    for (let y = 1; y <= 10; y++) {
      for (let x = 1; x <= 10; x++) {
        // Get all coords on 10x10 board first
        availableCoords.push([x, y]);
      }
    }
    while (localShipLengths.length > 0) {
      // Automatically place ships until none are left
      let currentShipLength = localShipLengths.shift();
      let orientation = 'horizontal';
      if (Math.random() >= 0.5) orientation = 'vertical';
      let shipPlaced = false;
      while (!shipPlaced) {
        let randIndex = getRandomIntInclusive(0, availableCoords.length - 1);
        let coordToTest = availableCoords[randIndex];
        availableCoords.splice(randIndex, 1);
        // console.log(`coordToTest: ${coordToTest} length: ${currentShipLength} orientation: ${orientation}`);
        // console.log(`available coords: ${availableCoords}`);
        // console.log(`lcoalShipLengths: ${localShipLengths}`);
        shipPlaced = placeShip(coordToTest, currentShipLength, orientation);
      }
      // console.log('GOT HERE');
    }
  }
  function isShipAtCoord(coord) {
    let ship = getShip(coord);
    return ((ship !== null) ? true : false);
  }
  function isAttackValid(coord) {
    for (let i = 0; i < allShots.length; i++) {
      let item = allShots[i];
      if (item[0] === coord[0] && item[1] === coord[1]) {
        // coordinate was already shot so it is invalid
        return false;
      }
    }
    if (coord[0] < 1 || coord[0] > 10 ||
      coord[1] < 1 || coord[1] > 10) {
        // coordinate is out of bounds so its invalid
        return false;
    } else {
      return true;
    }
  }
  function receiveAttack(coord) {
    // loop through each shipObj in ship list
    // compare given coord to each ship coord
    // if coords match, call hit() on that ship obj and return true
    // if no coords match, add the coord to missedShots list
    // return false if shot was missed
    // returns null if coordinate is invalid
    if (!isAttackValid(coord)) return null;

    allShots.push(coord);
    for (let i = 0; i < shipList.length; i++) {
      let shipDataEntry = shipList[i];
      for (let j = 0; j < shipDataEntry.shipCoords.length; j++) {
        let shipCoord = shipDataEntry.shipCoords[j];
        if (coord[0] === shipCoord[0] &&
          coord[1] === shipCoord[1]) {
          shipDataEntry.shipObj.hit();
          hitShots.push(coord);
          return true;
        }
      }
    }
    missedShots.push(coord);
    return false;
  }
  function areAllShipsSunk() {
    for (let i = 0; i < shipList.length; i++) {
      let shipDataEntry = shipList[i];
      if (shipDataEntry.shipObj.isSunk() === false) {
        return false;
      }
    }
    return true;
  }
  // A helper function for searching for a coord within an array of coords
  function isCoordInArray(coord, arr) {
    for (let i = 0; i < arr.length; i++) {
      let testCoord = arr[i];
      if (testCoord[0] === coord[0] &&
        testCoord[1] === coord[1]) {
        return true;
      }
    }
    return false;
  }
  function reset() {
    shipList.splice(0, shipList.length);
    missedShots.splice(0, missedShots.length);
    allShots.splice(0, allShots.length);
    hitShots.splice(0, hitShots.length);
  }
  
  return {
    placeShip,
    autoPlaceShips,
    isShipAtCoord,
    receiveAttack,
    isAttackValid,
    areAllShipsSunk,
    isCoordInArray,
    reset,
    shipList,
    hitShots,
    missedShots,
  }
}

module.exports = Gameboard;