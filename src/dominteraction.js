import {Gameloop} from './gameloop.js';

function GridSquare (coord) {
  
  return {
    get coord() {return coord},
    set coord(newCoord) {coord = newCoord},
  }
}

const DOMInteraction = (() => {
  let acceptGridinput = true;

  function changeInstructionsTo(str) {
    let instructionsText = document.querySelector('.instructions-display-container');
    instructionsText.textContent = str;
  }
  function createGrids(p1Obj, p2Obj) {
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
            if (acceptGridinput) {
              let result = p1Obj.receiveMove(gridSquareObj.coord);
              if (result === true) {
                //its a hit
                e.currentTarget.classList.add('hit');
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
          if (acceptGridinput) {
            let result = p2Obj.receiveMove(gridSquareObj.coord);
            if (result === true) {
              //its a hit
              e.currentTarget.classList.add('hit');
            } else if (result === false) {
              //its a miss
              e.currentTarget.classList.add('miss');
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
  return {
    changeInstructionsTo,
    createGrids,
  }
})();

export {DOMInteraction};