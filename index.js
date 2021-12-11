let stone = null


const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  const currentRowId = row.id
  console.log(`the row you clicked on is ${currentRow} row and has id ${currentRowId}`)

  pickUpStone(currentRowId)
} 

const pickUpStone = (rowId) => {
  const selectedRow = document.getElementById(rowId);
  console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log(stone)
}

// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (row) => {
  const droppedRow = document.getElementById(row.id)
  const rowSize = droppedRow.childElementCount
  console.log(rowSize)
  if(rowSize === 0){
    droppedRow.appendChild(stone);
    console.log("move successful");
    document.getElementById("moveMessage").innerHTML = "Successfully moved stone"
  }

  document.getElementById("moveMessage").innerHTML = ""
  // const currentStoneSize = stone.getAttribute("data-size")
  // console.log(currentStoneSize)
  // // if(droppedRow.lastElementChild)
  // stone = null
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

