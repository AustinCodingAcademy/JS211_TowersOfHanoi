
let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => { 
  //run game
  towersOfHanoi(row.id, stone);
} 

// this function can be called to get the last stone in the stack
const pickUpStone = (rowID) => {
  //look for row that is picked
  let selectedRow = document.getElementById(rowID); 
  //grab last stone off div
  stone = selectedRow.removeChild(selectedRow.lastElementChild); 
}

const dropStone = (rowID) => {
  //place stone on tower that is clicked
  document.getElementById(rowID).appendChild(stone);
  //reset stone to null
  stone = null
}

const isLegal = (rowID, stone) => {
  //grab the data-size attribute of stone in your hand and put it in a variable
  let pickedUpStone = stone.getAttribute('data-size');

  //look at the tower's last element child
  let selectedRow = document.getElementById(rowID);
  stationary = selectedRow.lastElementChild;

  //if the tower is empty, drop the stone
  if(stationary === null) {
    dropStone(rowID);
  }

  //when the tower has a stone, grab the stone's data-size
  let lastStoneInRow = stationary.getAttribute('data-size');
  //compare the two numbers and place the stone if the one in your hand is smaller than the one already on the tower
    if(pickedUpStone < lastStoneInRow) {
    return true;
  }
}

const toggleStone = (rowID, stone) => {
  //if your stone has a null value, pick up a stone
  if(stone == null) {
    pickUpStone(rowID)
  } 
  else
  //if the the stone in your hand is smaller than the one on the tower, drop the stone
  if(isLegal(rowID, stone) === true) {
    dropStone(rowID);
  }
}

const checkForWin = (rowID) => {
  // check if the other two towers are full
  //Rows is a variable for looking at the towers
  let Rows = document.getElementById(rowID);

  //if the id is not bottom-row and there are 4 stones,  you win
  if(((rowID) !== 'bottom-row') && (Rows.getElementsByClassName('stone').length === 4)) {
    window.alert("You won!");
  }
}

const towersOfHanoi = (rowID, stone) => {
  //runs through the other functions by toggling through the stones and then check for win
  toggleStone(rowID, stone);
  checkForWin(rowID);
}



