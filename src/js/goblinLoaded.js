let gameFieldCells;
let lastCellNumber;

export default function gameGoblin(){
  setInterval(() => {
    const checkGoblin = document.querySelector('.goblin');//проверка есть ли гоблин
    if (checkGoblin !== null) {//если гоблин есть - удалить
      checkGoblin.classList.remove('goblin');
    }
    gameFieldCells = Array.from(document.querySelectorAll('.game-field_cell'));
    const randomCellNumber = Math.floor(Math.random() * gameFieldCells.length);
    if (lastCellNumber === randomCellNumber) {
      gameFieldCells.splice(randomCellNumber, 1);
    }
    gameFieldCells[randomCellNumber].classList.add('goblin');
    lastCellNumber = randomCellNumber;
  }, 1000)
}