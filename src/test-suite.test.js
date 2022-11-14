const Ship = require('./ship.js');
const Gameboard = require('./gameboard.js');
const Player = require('./player.js');

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
  expect(gameboard.isShipAtCoord([1, 5])).toBe(false);
});

test('Gameboard correctly identifies invalid attack attempts', () => {
  let gameboard = Gameboard();
  gameboard.placeShip([1, 1], 4, 'vertical');
  gameboard.receiveAttack([1, 1]);
  expect(gameboard.isAttackValid([1, 1])).toBe(false);
  expect(gameboard.isAttackValid([1, 2])).toBe(true);
  expect(gameboard.receiveAttack([1, 1])).toBe(null);
});

test('Gameboard processes attacks correctly', () => {
  let gameboard = Gameboard();
  gameboard.placeShip([1, 1], 4, 'vertical');
  expect(gameboard.receiveAttack([1, 1])).toBe(true);
  expect(gameboard.receiveAttack([1, 5])).toBe(false);
  expect(gameboard.missedShots[0]).toStrictEqual([1, 5]);
});

test('Gameboard correctly determines whether all ships are sunk', () => {
  let gameboard = Gameboard();
  gameboard.placeShip([1, 1], 4, 'vertical');
  gameboard.placeShip([2, 1], 2, 'vertical');
  gameboard.receiveAttack([1, 1]);
  gameboard.receiveAttack([1, 2]);
  gameboard.receiveAttack([1, 3]);
  gameboard.receiveAttack([1, 4]); // sinks first ship
  gameboard.receiveAttack([2, 1]);
  gameboard.receiveAttack([2, 2]); // sinks second ship
  gameboard.receiveAttack([2, 5]); // missed shot
  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test('Players can take turns attacking', () => {
  let p1 = Player();
  let p2 = Player();
  p1.placeShip([1, 1], 3, 'vertical');
  p2.placeShip([1, 1], 3, 'horizontal');
  p1.receiveMove([1, 1]);
  p2.receiveMove([1, 1]);
  p1.receiveMove([1, 2]);
  p2.receiveMove([2, 1]);
  expect(p1.hasWon).toBe(null); // no one has won yet
  p1.receiveMove([1, 3]); // p2 should win, p1 lost
  expect(p1.hasWon).toBe(false);
});

test('Players reset correctly when reset is called', ()  => {
  let p1 = Player();
  p1.placeShip([1, 1], 1, 'vertical');
  p1.receiveMove([1, 1]);
  expect(p1.hasWon).toBe(false);
  p1.reset();
  expect(p1.hasWon).toBe(null);
});

test('Changing player names works', () => {
  let p1 = Player('player1');
  expect(p1.name).toBe('player1');
  p1.name = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'; // too long, doesnt work
  expect(p1.name).toBe('player1');
  p1.name = 'another player';
  expect(p1.name).toBe('another player');
});