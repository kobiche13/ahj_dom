let gameFieldCells;
let lastCellNumber;
/*
setInterval(() => {
  const checkGoblin = document.querySelector('.goblin');
  if (checkGoblin !== null) {
    checkGoblin.classList.remove('goblin');
  }
  gameFieldCells = Array.from(document.querySelectorAll('.game-field_cell'));
  const randomCellNumber = Math.floor(Math.random() * gameFieldCells.length);
  if (lastCellNumber === randomCellNumber) {
    gameFieldCells.splice(randomCellNumber, 1);
  }
  gameFieldCells[randomCellNumber].classList.add('goblin');
  lastCellNumber = randomCellNumber;
}, 1000);*/
export function gameGoblin(){
  const checkGoblin = document.querySelector('.goblin');
  if (checkGoblin !== null) {
    checkGoblin.classList.remove('goblin');
  }
  gameFieldCells = Array.from(document.querySelectorAll('.game-field_cell'));
  const randomCellNumber = Math.floor(Math.random() * gameFieldCells.length);
  if (lastCellNumber === randomCellNumber) {
    gameFieldCells.splice(randomCellNumber, 1);
  }
  gameFieldCells[randomCellNumber].classList.add('goblin');
  lastCellNumber = randomCellNumber;
}