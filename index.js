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
let moves = 0;
// #This function selects the row and calls the toggle function. When a row is
// #clicked, this function is run.
const selectRow = (row) => {
  const currentRow = row.getAttribute('data-row');

  // console.log('Yay, we clicked an item', row);
  // console.log("Here is the stone's id: ", row.id);
  // console.log("Here is the stone's data-size: ", currentRow);
  //# Calling toggle function to determine whether or not we will be picking up a stone or dropping a stone.
  toggleFunction(row.id, stone);
  console.log(dropStoneFunction);
};

// #Function to pick up the last stone. This is done by removing the last child
// #from the row parent element.
const pickUpStone = (rowID) => {
  // console.log(rowID);
  const selectedRow = document.getElementById(rowID);
  // console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  // console.log(stone);
};

// # Function to drop the stone. This is done by selecting the row where the stone needs to be dropped and verifying if there is currently anything in that row. If so, we need to make sure that the existing stone is larger than the stone we want to replace.
const dropStone = (rowID, stone) => {
  const movesCounter = document.querySelector('.move-counter');
  const selectedRow = document.getElementById(rowID);
  const existingStone = selectedRow.lastElementChild;
  console.log(stone.getAttribute('data-size'));
  // # Conditional to determine if a stone can be dropped.
  if (
    existingStone === null ||
    existingStone.getAttribute('data-size') > stone.getAttribute('data-size')
  ) {
    // #If the stone can be dropped we append the stone element and move the
    // #counter up by one.
    selectedRow.appendChild(stone);
    moves++;
  } else {
    // #If not, we initiate an alert and keep the dropStoneFunction toggle
    // #variable set to false so we can drop the stone in a valid row. We don't
    // #want the dropStoneFunction to change because it will make the next move
    // #a pick up stone function.
    window.alert('Invalid Move!');
    dropStoneFunction = false;
  }

  stone = null;

  // #Here we are deleting the counter and adding one each time a move is logged.
  movesCounter.innerHTML = '';
  movesCounter.insertAdjacentHTML(
    'afterbegin',
    `
    <h4>Number of Moves:</h4>
  <p>${moves}</p>`
  );
  checkForWin(selectedRow);
};

// #This function toggles between the dropStone function and the pickUpStone
// #function. This is done by watching the dropStoneFunction boolean value.
const toggleFunction = (row, stone) => {
  dropStoneFunction ? dropStone(row, stone) : pickUpStone(row);
  dropStoneFunction = !dropStoneFunction;
};

// # We are checking for win by counting the number of child elements. Once child elements equal 4, the game is won.
const checkForWin = (row) => {
  if (row.childElementCount === 4) {
    document.querySelector('.announce-game-won').classList.add('active');
  }
};

const playGame = () => {};
// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
