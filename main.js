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

let moveCounter = 0

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (move, goal) => {
  // If you made it here, the move is legal
  
  // Now make the move
  goal.push(move)
  moveCounter++
  checkForWin()
}

const isLegal = (startP, endP) => {
  // First, check to make sure the stacks selected are valid
  console.log("You picked " + startP + " as your start, and " + endP + " as your end.")
  if ((startP == "a" || startP == "b" || startP == "c") && (endP == "a" || endP == "b" || endP == "c") && (startP != endP)) {
    // Next, see if the move is a valid move by checking the last number in the array. 
    if (((stacks[endP].slice(-1) > stacks[startP].slice(-1)) || (stacks[endP].slice(-1) != 1)) && stacks[startP].length != 0) {
      let move = stacks[startP].pop()
      let goal = stacks[endP]
      movePiece(move, goal);
      return true
    }
    else {
      console.log("Hey. You can't do that!")
      return false
    }
  }
  else {
    console.log("You tried an illegal move. Don't do that!")
    return false
  }
}

const checkForWin = () => {
  // Make sure that b OR c has all 4 discs stacked properly
  if (stacks.b.length == 4 || stacks.c.length == 4) {
    console.log("Hey! You won!")
    return true
  }
  else {
    return false
  }
}

const towersOfHanoi = (startStack, endStack) => {
  // First, trim and lowercase the inputs, for ease of use
  startStack = startStack.trim().toLowerCase()
  endStack = endStack.trim().toLowerCase()
  // Second check if the code is legal using the isLegal function
  isLegal(startStack, endStack)
  console.log("Current Move Count: " + moveCounter)
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
  // Testing for movement
  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  // Testing for legality of a move
  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('d', 'b'), false);
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
  // Testing for wins
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], c: [4, 3, 2, 1], b: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], c: [4, 3, 2], b: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
