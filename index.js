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
  console.log("Select Row Stone", stone)
  
  // isLegal(row.id, stone)
  toggleStone(row.id, stone);
  // if(stone == null) {
  //   // console.log("YO")
  //   pickUpStone(row.id)
  // } 
  // else
  // if(stone != null) {
  //   // console.log("Not null")
  //   dropStone(row.id);
  // }
  

  // checkForWin();
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  let selectedRow = document.getElementById(rowID);
  console.log('****', selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  
  console.log("pickUpStone is", stone);

}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  console.log('*', stone)
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
    let emptyRow = document.createElement('div');
    emptyRow.setAttribute('data-size', 5);
    document.getElementById(rowID).appendChild(emptyRow);
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
    // console.log("YO")
    pickUpStone(rowID)
  } 
  else
  if(isLegal(rowID, stone) === true) {
    console.log("Not null")
    dropStone(rowID);
  }

}

const checkForWin = () => {
  // check if the other two towers are full
  if((stacks['b'].length == 4) || (stacks['c'].length == 4)) {
  console.log("You won!") //let the user know they won
  return true 
} else dropStone()
}

const towersOfHanoi = (rowID, stone) => {
  
  isLegal(rowID, stone);
  toggleStone(row.id);
  checkForWin();

}



