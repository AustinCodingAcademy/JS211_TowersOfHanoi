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

let maxcontent = stacks.a.length

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

let storedRingA;
let storedRingB;

// Next, what do you think this function should do?
// movePiece should move numbers from one array to another array within the object
const movePiece = (ringA, ringB) => {
  ringB.push(storedRingA)
   
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
//
const isLegal = (startStack, endStack) => {
    
  storedRingA = startStack.pop(); //2
  storedRingB = endStack.slice(-1); //1

  if ((storedRingA < storedRingB) || (endStack.length === 0)) {
    return movePiece(startStack, endStack)
  } else {
     startStack.push(storedRingA)
    console.log('********move is illegal*******')
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let firstStack = stacks[startStack]
  let secondStack = stacks[endStack]
  isLegal(firstStack, secondStack)

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
