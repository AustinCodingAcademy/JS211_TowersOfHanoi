// * This js file is incomplete. It will log to the console the elements you click
// call another function and set stone. You will have to work through the logic
// of the game as you know it from building it in the terminal. Work through the
// puzzle slowly, stepping through the flow of logic, and making the game work.
// Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null;
let dropStoneFunction = false;
console.log(dropStoneFunction);
// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute('data-row');

  // console.log('Yay, we clicked an item', row);
  // console.log("Here is the stone's id: ", row.id);
  // console.log("Here is the stone's data-size: ", currentRow);

  console.log(row.classList);
  // if (row.classList.contains('grabbable')) {
  //   pickUpStone(row.id);
  // } else {
  //   dropStone(row.id, stone);
  // }
  toggleFunction(row.id, stone);
  console.log(dropStoneFunction);
};

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  console.log(rowID);
  const selectedRow = document.getElementById(rowID);
  console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log(stone);
  // dropStoneFunction = true;
};

// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  const selectedRow = document.getElementById(rowID);
  selectedRow.appendChild(stone);

  stone = null;
  // dropStoneFunction = false;
};

// You could use this function to drop the stone but you'll need to toggle
// between pickUpStone & dropStone

const toggleFunction = (row, stone) => {
  dropStoneFunction ? dropStone(row, stone) : pickUpStone(row);
  dropStoneFunction = !dropStoneFunction;
};
// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
