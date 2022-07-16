'use strict';

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

//? Start here. What is this function doing?
// # This function is loggint the array of each of the three object keys.
const printStacks = () => {
  console.log('a: ' + stacks.a);
  console.log('b: ' + stacks.b);
  console.log('c: ' + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // #Use .pop() to remove last item from the stacks array identified by the
  // #startStack argument and store it to a variable.
  let moveFrom = stacks[startStack].pop();
  // #Pushing that variable to a the array in the stacks objects indentified by
  // #the endStack argument.
  stacks[endStack].push(moveFrom);
  // console.log(moveTo);
};

// ?Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // #Creating a variable to hold the startStack piece by selecting the last
  // #element in the startStack array.
  let startStackPiece = stacks[startStack].slice(-1);
  // #Creating a variable to hold the endStack piece by selecting the last
  // #element in the endStack array.
  let endStackPiece = stacks[endStack].slice(-1);

  // #Comparing the startStack piece to the endStack piece to allow moves only
  // #in the event the startStack piece is smaller than the endStack piece.
  if (
    (startStackPiece > endStackPiece && endStackPiece.length > 0) ||
    // #Also confirming that the startStack location is not the same as the
    // #endStack location.
    startStack === endStack
  ) {
    return false;
  }
  return true;
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // # If the array length of stacks b or c is 4, you win.
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    return true;
  } else return false;
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //@ set variables
  //@ Check to see if isLegal(start, end)
  //@ if true run movePiece() if not run the invalid console.log
  // check for win
  // #Creating variables to identify the start and end stacks.
  let start = startStack;
  let end = endStack;

  // #Calling the isLegal function inside a conditional statement to determine
  // #if a move can be made. The isLegal function is called using the variables
  // #above to identify which arrays we will be comparing.
  if (isLegal(start, end) == true) {
    // #If the isLegal function returns true, call the move piece function to
    // #move the piece to the selected array which are identified by the
    // #function arguments.
    movePiece(start, end);
  } else {
    console.log(`Invalid move.`);
  }
};

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === 'function') {
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
