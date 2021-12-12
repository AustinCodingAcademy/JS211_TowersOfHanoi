let stone = null; 
let moveMessage = ''; 
let currentStoneSize = null; 
let droppedRowLastStoneSize = null; 
let selectedRow = null; 

const selectRow = (row) => {
  moveMessage = '';
  document.getElementById("moveMessage").innerHTML = moveMessage
  const currentRow = row.getAttribute("data-row")
  const currentRowId = row.id
  console.log(`the row you clicked on is ${currentRow} row and has id ${currentRowId}`)

  pickUpStone(currentRowId)
} 

const pickUpStone = (rowId) => {
  selectedRow = document.getElementById(rowId);
  console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  currentStoneSize = parseInt(stone.getAttribute("data-size")); 
  console.log(stone, currentStoneSize)
}

const dropStone = (row) => {
  const droppedRow = document.getElementById(row.id)
  const rowSize = droppedRow.childElementCount
  console.log(rowSize)
  if(rowSize === 0){
    droppedRow.appendChild(stone);
    console.log("move successful");
    moveMessage = "Successfully moved stone"; 
    document.getElementById("moveMessage").innerHTML = moveMessage
    droppedRowLastStoneSize =  parseInt(droppedRow.lastElementChild.getAttribute('data-size'));
    stone = null; 
  }else if(currentStoneSize < droppedRowLastStoneSize){
    console.log("this is a valid move");
    moveMessage = "Successfully moved stone"
    document.getElementById("moveMessage").innerHTML = moveMessage
    droppedRow.appendChild(stone);
    stone = null; 
    currentStoneSize = null; 
    droppedRowLastStoneSize = null; 
  }else{
    selectedRow.appendChild(stone)
    console.log("invalid move"); 
    moveMessage = "Invalid move. The stone you are placing must be smaller than the last stone in ending stack";
    document.getElementById("moveMessage").innerHTML = moveMessage
  }
}

