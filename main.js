'use strict';

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
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

        //move disc 1 to b
        //move disc 2 to c
        //move disc 1 to c (will be on top of 2)
        //move disc 3 to b
        //move disc 1 to a (will be on top of 4)
        //move disc 2 to b (will be on top of 3)
        //move disc 1 to b (will be on top of 2 and 3)
        //move disc 4 to c
        //move disc 1 to c (will be on top of 4)
        //move disc 2 to a
        //move disc 1 to a (will be on top of 2)
        //move disc 3 to c (will be on top of 4)
        //move disc 1 to b
        //move disc 2 to c (will be on top of 3 and 4)
        //move disc 1 to c to be on top of three disc

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
//This function should move the pieces
const movePiece = (startStack, endStack) => {
  // Your code here
console.log("Start stack", stacks[startStack])

console.log("End stack", stacks[endStack])

let stone = stacks[startStack].pop()
stacks[endStack].push(stone)

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
//A larger disc cannot stack on top of a smaller disc. Ex: 3 cannot go on top of 2. That would be an illegal move
const isLegal = (startStack, endStack) => {
if (!stacks[endStack].length){

  return true
}

if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1) ) {

  return true

}
console.log("This is not a legal move")
return false
}

// What is a win in Towers of Hanoi? When should this function run?
//A win is if all of the disc are on stack c in the order of 4, 3, 2, 1. With 4 being at the bottom, and 1 on top.
const checkForWin = () => {
  // Your code here
if (stacks.c.length === 4 || stacks.b.length === 4) {

console.log("You win!")

return true
}
else return false
}

// When is this function called? What should it do with its argument?
//This function is called when 
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  if (isLegal(startStack,endStack)) {
  
  movePiece(startStack, endStack)
  checkForWin()
  }
  else {
  console.log("This is an illegal move, try again")
  }
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
