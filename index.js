// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  
  // const currentRow = row.getAttribute("data-row")
  // console.log("Yay, we clicked an item", row)
  // console.log("Here is the stone's id: ", row.id)
  // console.log("Here is the stone's data-size: ", currentRow)
  // console.log("Stone defaults to", stone)
  
  //run game
  towersOfHanoi(row.id, stone); 
  
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  //look for row that is picked
  let selectedRow = document.getElementById(rowID); 
  // console.log('****', selectedRow);

  //grab last stone off div
  stone = selectedRow.removeChild(selectedRow.lastElementChild); 
  // console.log("pickUpStone is", stone);
  // console.log('should be same as before', winStone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  // console.log('stone that gets dropped', stone);
  // console.log(stone.getAttribute('data-color'));
  // console.log(stone.getAttribute('data-size'));

  //place stone on tower that is clicked
  document.getElementById(rowID).appendChild(stone);
  //reset stone to null
  stone = null
}


// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

const isLegal = (rowID, stone) => {
  //grab the data-size attribute of stone in your hand and put it in a variable
  let pickedUpStone = stone.getAttribute('data-size');
  // console.log('pickedUpStone', pickedUpStone);

  //look at the tower's last element child
  let selectedRow = document.getElementById(rowID);
  stationary = selectedRow.lastElementChild;
  // console.log('placingBlock', selectedRow);
  // console.log("stationary BEFORE", stationary);

  //if the tower is empty, drop the stone
  if(stationary === null) {
    dropStone(rowID);
  }

  //when the tower has a stone, grab the stone's data-size
  // console.log("stationary AFTER", stationary);
  let lastStoneInRow = stationary.getAttribute('data-size');
  // console.log("lastStoneInRow", lastStoneInRow);
  
  //compare the two numbers and place the stone if the one in your hand is smaller than the one already on the tower
    if(pickedUpStone < lastStoneInRow) {
    return true
  }
  
}

const toggleStone = (rowID, stone) => {
  //if your stone has a null value, pick up a stone
  if(stone == null) {
    // console.log("empty tower gets stone if stone is null")
    pickUpStone(rowID)
  } 
  else
  //if the the stone in your hand is smaller than the one on the tower, drop the stone
  if(isLegal(rowID, stone) === true) {
    // console.log("stone gets placed on top")
    dropStone(rowID);
    
  }

}

const checkForWin = (rowID) => {
  // check if the other two towers are full
  //Rows is a variable for looking at the towers
  let Rows = document.getElementById(rowID);
  //   console.log("What is row", Rows)
  //   position = Row.lastElementChild;
  //   let lastStoneInRow = position.getAttribute('data-size');

  // let pickedUpStone = stone.getAttribute('data-size');
  // console.log('pickedUpStone', pickedUpStone);
  // console.log('length is', Rows.getElementsByClassName('stone').length)
  // console.log('Went into checkForWin Fx', rowID)

  //if the id is not bottom-row and there are 4 stones,  you win
  if(((rowID) !== 'bottom-row') && (Rows.getElementsByClassName('stone').length === 4)) {
    // console.log('MIDDLE ROW If Statement checkForWin')
    window.alert("You won!");
  }
  // if(((rowID) === 'top-row') && (pickedUpStone === 1)) {
  //   console.log('TOP ROW If Statement checkForWin')

  //   window.alert("You won!");
    
  // }
//   if((currentRow.length == 4) || (currentRow.length == 4)) {
//   console.log("You won!", currentRow.length) //let the user know they won
//   alert("You won!")
//   return true 
// }
}

const towersOfHanoi = (rowID, stone) => {
  // console.log('passes through towersOfHanoi FX')
  //runs through the other functions by toggling through the stones and then check for win
  toggleStone(rowID, stone);
  checkForWin(rowID);

}



