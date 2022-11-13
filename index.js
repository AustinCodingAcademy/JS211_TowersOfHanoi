let moveCounter = 0

let storage = document.getElementById("selected-piece")

let stone = null

let defaultLayOut = `
<div id="top-row" data-row="top" class="red row" onclick="selectRow(this)"></div>
      <div id="middle-row" data-row="middle" class="blue row" onclick="selectRow(this)"></div>
      <div id="bottom-row" data-row="bottom" class="green row" onclick="selectRow(this)">
        <div id="4" data-size="4" data-color="yellow" class="stone"></div>
        <div id="3" data-size="3" data-color="red" class="stone"></div>
        <div id="2" data-size="2" data-color="green" class="stone"></div>
        <div id="1" data-size="1" data-color="blue" class="stone"></div>
        `

// this function is called when a row is clicked. 
function selectRow(row) {
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the row's id: ", row.id)
  console.log("Here is the row's data-row: ", currentRow)
  console.log("Row ID child element count: " + row.childElementCount)

  if (stone == null) {
    pickUpStone(row.id)
  }
  else {
    dropStone(row, row.id)
  }
} 

// this function can be called to get the last stone in the stack
function pickUpStone(rowID) {
  console.log("Pick up the stone! " + rowID)
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.lastElementChild;
  console.log(stone)
  storeStone()
}

// this function can be used to store the stone in a visible place
function storeStone() {
  storage.appendChild(stone)
}

// this function to drop the stone
const dropStone = (row, rowID) => {
  console.log("Drop the stone! " + stone)
  // Check if the move is legal by checking the isLegal function
  console.log("Row ID child element count: " + rowID.childElementCount + " and the Row ID " + rowID)
  if (isLegal(row, rowID)) {
    document.getElementById(rowID).appendChild(stone)
    stone = null
    moveCounter++
    document.getElementById("move-count").innerHTML = moveCounter
    checkForWin(rowID)
  }
  else {
    window.alert("Invalid Move.")
  }
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

function isLegal(row, rowID) {
  // Check to see if the stored stone's id is lower than placed one
  console.log("Row ID child element count: " + row.childElementCount + " and the Row ID: " + rowID)
  if (row.lastElementChild == null) {
    return true
  }
  else {
    if (stone.getAttribute("data-size") < row.lastElementChild.getAttribute("data-size")) {
      return true
    }
    else {
      return false
    }
  }
}

const checkForWin = (rowID) => {
  // Make sure that b OR c has all 4 discs stacked properly
  if ((rowID) !== 'bottom-row' && document.getElementById(rowID).getElementsByClassName('stone').length == 4) {
    window.alert("You Won! It took you " + moveCounter + " moves!")
    reset()
  }
  else {
    
  }
}

// Reset the game
function reset() {
  console.log("Hey idiot! You reset the game!")
  moveCounter = 0
  document.getElementById("move-count").innerHTML = moveCounter
  if (storage.firstChild) {
    storage.removeChild(storage.firstChild)
    stone = null
  }
  document.getElementById("towers").innerHTML = defaultLayOut
}