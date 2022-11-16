import {Gameloop} from './gameloop.js';

function GridSquare (coord) {
  
  return {
    get coord() {return coord},
    set coord(newCoord) {coord = newCoord},
  }
}

const DOMInteraction = (() => {
  let acceptGridinput = true;
  let p1Obj = {};
  let p2Obj = {};
  // let currentPlayer = '';

  function setUp(newp1Obj, newp2Obj) {
    p1Obj = newp1Obj;
    p2Obj = newp2Obj;
    // currentPlayer = newCurrentPlayer;
  }
  function changeInstructionsTo(str) {
    let instructionsText = document.querySelector('.instructions-display-container');
    instructionsText.textContent = str;
  }
  function createGrids() {
    const p1Container = document.querySelector('.p1-grid-container');
    for(let i = 1; i <= 10; i++) {
      for(let j = 1; j <= 10; j++) {
        let gridSquareObj = GridSquare([j, i]);
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        let isShipAtSpot = p1Obj.gameboard.isShipAtCoord(gridSquareObj.coord);
        if (isShipAtSpot) {
          gridSquare.classList.add('ship-spot');
        }
        if (p2Obj.isBot === false) {
          // if p2 is a human, make p1's board clickable
          gridSquare.addEventListener('click', (e) => {
            if (acceptGridinput && Gameloop.currentPlayer === 'p2') {
              let result = p1Obj.receiveMove(gridSquareObj.coord);
              if (result === true) {
                //its a hit
                e.currentTarget.classList.add('hit');
                Gameloop.checkWinner();
              } else if (result === false) {
                //its a miss
                e.currentTarget.classList.add('miss');
              } else {
                //coord was invalid
                
              }
              console.log(gridSquareObj.coord);
            }
          });
        }
        p1Container.appendChild(gridSquare);
      }
    }
    const p2Container = document.querySelector('.p2-grid-container');
    for(let i = 1; i <= 10; i++) {
      for(let j = 1; j <= 10; j++) {
        let gridSquareObj = GridSquare([j, i]);
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridSquare.addEventListener('click', (e) => {
          console.log(`currentPlayer = ${Gameloop.currentPlayer}`);
          if (acceptGridinput && Gameloop.currentPlayer === 'p1') {
            let result = p2Obj.receiveMove(gridSquareObj.coord);
            if (result === true) {
              //its a hit
              e.currentTarget.classList.add('hit');
              Gameloop.checkWinner();
            } else if (result === false) {
              //its a miss
              e.currentTarget.classList.add('miss');
              Gameloop.checkWinner();
            } else {
              //coord was invalid
              console.log('You alreayd clicked that stupid');
            }
            console.log(gridSquareObj.coord);
          }
        });
        p2Container.appendChild(gridSquare);
      }
    }
  }
  // Refreshes grid after a bot has moved, can only be called after createGrids has been called
  function refreshGrid(gridContainerSelector, playerObj) {
    let gridSquaresArr = document.querySelectorAll(`${gridContainerSelector} .grid-square`);
    let indexCounter = 0; // used to access gridSquaresArr
    console.log(playerObj.gameboard.hitShots);
    console.log(playerObj.gameboard.missedShots);
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        let coord = [j, i];
        if (playerObj.gameboard.isCoordInArray(coord, playerObj.gameboard.hitShots)) {
          gridSquaresArr[indexCounter].classList.add('hit');
        } else if (playerObj.gameboard.isCoordInArray(coord, playerObj.gameboard.missedShots)) {
          gridSquaresArr[indexCounter].classList.add('miss');
        }
        indexCounter++;
      }
    }
  }
  return {
    setUp,
    changeInstructionsTo,
    createGrids,
    refreshGrid,
  }
})();

export {DOMInteraction};