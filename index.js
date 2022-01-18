// global variables 

let stone = null; 
let moveMessage = ''; 
let currentStoneSize = null; 
let selectedRow = null;
let numberOfMoves = 0; 

// functions 

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
  const droppedRow = document.getElementById(row.id);
  const rowSize = droppedRow.childElementCount
  console.log(rowSize)
  if(rowSize === 0){
    droppedRow.appendChild(stone);
    console.log("move successful");
    moveMessage = "Successfully moved stone"; 
    document.getElementById("moveMessage").innerHTML = moveMessage
    stone = null; 
    currentStoneSize = null; 
    numberOfMoves++
    document.getElementById("moves").innerHTML = numberOfMoves
  }else if((rowSize > 0) && (parseInt(droppedRow.lastElementChild.innerHTML) > currentStoneSize)){
    droppedRow.appendChild(stone);
    numberOfMoves++
    document.getElementById("moves").innerHTML = numberOfMoves
    console.log("this is a valid move");
    moveMessage = "Successfully moved stone"
    document.getElementById("moveMessage").innerHTML = moveMessage
    checkForWin();
    stone = null; 
    currentStoneSize = null; 
  }else{
    selectedRow.appendChild(stone)
    console.log("invalid move"); 
    moveMessage = "Invalid move. The stone you are placing must be smaller than the last stone in ending stack.";
    document.getElementById("moveMessage").innerHTML = moveMessage
    stone = null; 
    currentStoneSize = null; 
  }
}

function checkForWin(){

  const topRedRowSize = document.getElementById("top-row").childElementCount
  const middleYellowRowSize = document.getElementById("middle-row").childElementCount
  const bottomGreenRowSize = document.getElementById("bottom-row").childElementCount

  console.log(topRedRowSize, middleYellowRowSize, bottomGreenRowSize)

  if(topRedRowSize === 4 || middleYellowRowSize === 4 || bottomGreenRowSize === 4){
    console.log("you won!");
    alert("You won the game! Congratulations!")
    document.getElementById("moveMessage").innerHTML = ''; 
  }
}

function resetGame(){
  console.log("game reset");
  alert("Game reset");
  moveMessage = '';
  numberOfMoves = 0; 
  document.getElementById("moveMessage").innerHTML = moveMessage;
  document.getElementById("moves").innerHTML = numberOfMoves;
  const bottomRow = document.getElementById("bottom-row")
  const middleRow = document.getElementById("middle-row");
  const topRow = document.getElementById("top-row");
  let lastStone = null; 
 
  while(middleRow.lastElementChild){
    lastStone = middleRow.lastElementChild
    middleRow.removeChild(lastStone)
    bottomRow.appendChild(lastStone)
    lastStone = null 
  }

  while(topRow.lastElementChild){
    lastStone = topRow.lastElementChild
    topRow.removeChild(lastStone)
    bottomRow.appendChild(lastStone)
    lastStone = null 
  }

  let stones = bottomRow.childNodes
  let stonesArray = []; 

  for(let i = 0; i < stones.length; i++){
    if(stones[i].nodeType == 1){
      stonesArray.push(stones[i])
    }
  }
  console.log(stonesArray)

  stonesArray.sort(function(a,b){
    return a.innerHTML == b.innerHTML
    ? 0
    : (a.innerHTML < b.innerHTML ? 1 : -1);
  });

  for(let i = 0; i < stonesArray.length; i++){
    bottomRow.appendChild(stonesArray[i])
  }
}



