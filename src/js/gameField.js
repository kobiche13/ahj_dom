export default function createGameField() {
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  document.body.prepend(gameField);

  const searchField = document.querySelector('.game-field');
  for (let i = 0; i < 16; i += 1) {
    const fieldCell = document.createElement('div');
    fieldCell.className = 'game-field_cell';
    searchField.append(fieldCell);
  }
}
