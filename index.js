// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

const stone = null

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)

  pickUpStone(row.id)
}

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.removeChild(selectedRow.lastChild);
  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  document.getElementById(rowID).appendChild(stone)
  stone = null
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
  }

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  if (stacks[end].length === 0 || stacks[start][stacks[start].length - 1] < stacks[end][stacks[end].length -1]) {
    return true;
  } else {
    console.log("straight to jail");
    return false
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if (stacks['b'].length === 4) {
    console.log('winner winner chicken dinner!')
    return true
  } else {
    return false
  }
  }

const towersOfHanoi = (start, end) => {
  // isLegal
  if (isLegal(start, end)){
  // movePiece
  movePiece(start, end)
  //checkForWin
  checkForWin(start, end)
  } else {
    towersOfHanoi()
  }
  // else towersOfHanoi
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

