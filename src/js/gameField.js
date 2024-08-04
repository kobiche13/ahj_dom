export default function createGameField(){
    let gameField = document.createElement('div')
    gameField.className = "game-field"
    document.body.prepend(gameField)

    let searchField = document.querySelector('.game-field')
    for (let i = 0; i < 16; i++){
        let fieldCell = document.createElement('div')
        fieldCell.className = "game-field_cell"
        searchField.append(fieldCell)
    }
}