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
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)
  console.log("Stone defaults to", stone)
  
  towersOfHanoi(row.id, stone, currentRow);
  checkForWin(stone, row.id);
  
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  let selectedRow = document.getElementById(rowID);
  console.log('****', selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  
  console.log("pickUpStone is", stone);

  let winStone = stone
  console.log('should be same as before', winStone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  console.log('stone that gets dropped', stone)
  console.log(stone.getAttribute('data-color'))
  console.log(stone.getAttribute('data-size'))

  let selectedRow = document.getElementById(rowID);
    selectedRow.appendChild(stone);
  stone = null
}


// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

const isLegal = (rowID, stone) => {
  let pickedUpStone = stone.getAttribute('data-size');
  console.log('pickedUpStone', pickedUpStone);

  let selectedRow = document.getElementById(rowID);
  console.log('placingBlock', selectedRow);
  stationary = selectedRow.lastElementChild;
  console.log("stationary BEFORE", stationary);

  if(stationary === null) {
    dropStone(rowID);
  }

  console.log("stationary AFTER", stationary);
  let lastStoneInRow = stationary.getAttribute('data-size');
  console.log("lastStoneInRow", lastStoneInRow);
  
    if(pickedUpStone < lastStoneInRow) {
    return true
  }
  
}

const toggleStone = (rowID, stone) => {
  if(stone == null) {
    console.log("empty tower gets stone if stone is null")
    pickUpStone(rowID)
  } 
  else
  if(isLegal(rowID, stone) === true) {
    console.log("stone gets placed on top")
    dropStone(rowID);
  }

}

const checkForWin = (stone, rowID) => {
  // check if the other two towers are full
  let Row = document.getElementById(rowID);
  //   position = Row.lastElementChild;
  //   let lastStoneInRow = position.getAttribute('data-size');

  let pickedUpStone = stone.getAttribute('data-size');
  console.log('pickedUpStone', pickedUpStone);

  console.log('Went into checkForWin Fx', rowID)
  if(((rowID) !== 'bottom-row') && (Row.getElementsByClassName('stone').length === 4)) {
    
    console.log('MIDDLE ROW If Statement checkForWin')
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
  console.log('passes through towersOfHanoi FX')
  toggleStone(rowID, stone);
  // checkForWin(rowID, currentRow);

}



