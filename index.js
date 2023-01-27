// * This js file is incomplete. It will log to the console the elements you click
// call another function and set stone. You will have to work through the logic
// of the game as you know it from building it in the terminal. Work through the
// puzzle slowly, stepping through the flow of logic, and making the game work.
// Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

const stone = null;
console.log(stone);

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  //find what row is selected
  const currentRow = row.getAttribute("data-row");

  console.log("Yay, we clicked an item", row);
  console.log("Here is the rows id: ", row.id);
  console.log("Here is the rows data-row: ", currentRow);

  //   pickUpStone(row.id)
};

const selectedBlock = (block) => {
  //find what block was selected
  const currentBlock = block.getAttribute("data-size");
  const colorBlock = block.getAttribute("data-color");

  console.log("the blocks data size: ", currentBlock);
  console.log("the blocks data color: ", colorBlock);
  //pickup block code
};

// const pickUpStone = (row,block) => {
//   let selectedRow = document.getElementById(row);
//   let removeChild = block.document.getElementById(block);
//   let seeYa = selectedRow.removeChild(removeChild);

//   console.log(seeYa);
// };
// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  // pickup user selected stone
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.removeChild(selectedRow);
  console.log(stone);
};

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  //drop user selected stone on user selected row
  document.getElementById(rowID).appendChild(stone);
  stone = null;
};

//code to check if move is legal
const legalMove = () => {
  //if (block selected value < row selected existing block.value) = legal move
};

// code for illegal move
const sorryBud = () => {
  // if block selected value > row selected existing block.value = illeagal move
};

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
