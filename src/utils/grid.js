import logic from "../javascript/logic"

const mainContainer = document.getElementById("content")
let foodQuantity = 0

const createGrid = (height, width, container) => {
    let food
    if(width >= 1208){
        height = 20;
        width = 30;
        food = "desktopFood"
    }else{
        height -= 8;
        height /= 24;

        width -= 8;
        width /= 24;
        food = "mobileFood"
    }

    for(let i = 0; i < height; i++){
        let row = document.createElement("section")
        row.classList.add("row")
        container.appendChild(row)

        for(let j = 0; j < width; j++){
            let cell = document.createElement("div")
            cell.classList.add("cell")
            if(gridArray[i].includes(j)){
                cell.dataset.value = 1
            }else{
                foodQuantity++
                cell.classList.add("food")
                cell.classList.add(food)
            }
            row.appendChild(cell)
        }
    }

    return foodQuantity
}

const grid = () => {
    const boardGame = mainContainer.childNodes[1].childNodes[1]
    const boardWidth = boardGame.offsetWidth
    const boardHeight = boardGame.offsetHeight

    let i = createGrid(boardHeight, boardWidth, boardGame)

    logic(i)
}

export default grid;