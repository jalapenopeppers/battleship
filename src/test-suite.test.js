const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');

test('Ship hit function works', () => {
  let ship = Ship(3);
  expect(ship.hit()).toBe(1);
});

test('Ship isSunk function works', () => {
  let ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('Gameboard can place ships at specific coords', () => {
  let gameboard = Gameboard();
  gameboard.placeShip([1, 1], 4, 'vertical');
  expect(gameboard.isShipAtCoord([1, 1])).toBe(true);
  expect(gameboard.isShipAtCoord([1, 2])).toBe(true);
  expect(gameboard.isShipAtCoord([1, 3])).toBe(true);
  expect(gameboard.isShipAtCoord([1, 4])).toBe(true);
});

test('Gameboard processes attacks correctly', () => {

});

test('Gameboard records missed attacks', () => {

});

test('Gameboard correctly determines whether all ships are sunk', () => {

});