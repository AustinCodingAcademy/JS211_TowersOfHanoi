'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (fromStack, toStack) => {
  // Your code here
  stacks[toStack].push(stacks[fromStack].pop());
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (fromStack, toStack) => {
  // Your code here
  // these variables are simply to enhance readability of the comparison
  // they represent the last piece in each of the "from" and "to" arrays
  let sourcePiece = stacks[fromStack][stacks[fromStack].length-1];
  let targetPiece = stacks[toStack][stacks[toStack.length-1]];
  // if the target spot is empty it's safe to just drop the piece there
  if (!stacks[toStack][stacks[toStack].length-1]) {return true;} // target spot is empty
  // if the target exists and is bigger than the source, return true...otherwise return false
  if (targetPiece > sourcePiece) {
    return true;
  } else return false;

}


// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  // if the array for the other two spots contains all elements of the original array
  // then clearly you have won
  if (stacks["b"].length==4 || stacks["b"].length===4) {
    return true;
  } else return false;
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // if it's a valid move
  if (isLegal(startStack,endStack)) {
    // make the move
    movePiece(startStack,endStack);
    // then check if they won
    if (checkForWin()) { return ("You win");}
  } else return ("Invalid Move");
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
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
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
