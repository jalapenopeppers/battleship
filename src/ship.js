function Ship(length) {
  let shipLength = length;
  let hits = 0;
  let hasSunk = false;

  function hit() {
    hits++;
    isSunk();
    return hits;
  }
  function isSunk() {
    hasSunk = (hits >= shipLength) ? true : false;
    return hasSunk;
  }

  return {
    hit,
    isSunk,
  }
}

module.exports = Ship;