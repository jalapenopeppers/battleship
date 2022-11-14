const Ship = require('./ship.js');

function Gameboard() {
  let shipList = [];
  let missedShots = [];
  let allShots = [];
  let hitShots = [];
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

  function placeShip(coord, length, orientation = 'horizontal') {
    if (coord[0] + length <= 10 && coord[1] + length <= 10) {
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
    } else {
      console.log('Ship location is invalid');
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
  
  return {
    placeShip,
    isShipAtCoord,
    receiveAttack,
    isAttackValid,
    areAllShipsSunk,
    shipList,
    missedShots,
  }
}

module.exports = Gameboard;