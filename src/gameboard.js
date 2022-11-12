const Ship = require('./ship.js');

function Gameboard() {
  let shipList = [];
  function getShip(coord) {
    shipList.forEach(shipObj => {
      shipObj.shipCoords.forEach(shipCoord => {
        if (shipCoord === coord) {
          return shipObj;
        }
      });
    });
    return null;
  }

  function placeShip(coord, length, orientation = 'horizontal') {
    if (coord[0] + length <= 10 && coord[1] + length <= 10) {
      // ship is in valid location, place it
      let shipCoords = []
      if (orientation === 'horizontal') {
        for (let i = 0; i < length; i++) {
          shipCoords.push([coord[0] + i, coord[1]]);
        }
      } else if (orientation === 'vertical') {
        for (let i = 0; i < length; i++) {
          shipCoords.push([coord[0], coord[1] + i]);
          console.log([coord[0], coord[1] + i]);
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
    return (getShip(coord) !== null) ? true : false;
  }
  
  return {
    placeShip,
    isShipAtCoord,
  }
}

module.exports = Gameboard;