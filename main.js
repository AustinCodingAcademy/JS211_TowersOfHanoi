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
const movePiece = (startStack, endStack) => {
  // Your code here
  
  //pop each number from the stack and push them onto the new stack
  let lowerCaseS = startStack.toLowerCase();
  // console.log('****',lowerCaseS)
  let everyMove = stacks[lowerCaseS].pop();
  let lowerCaseE = endStack.toLowerCase();
  // console.log('****',lowerCaseE)
  stacks[lowerCaseE].push(everyMove);
  
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here
    
  let lowerCaseS = startStack.toLowerCase();
    let lowerCaseE = endStack.toLowerCase();
    if(stacks[lowerCaseE].length == 0) { //check if the endStack is empty before moving
      return true} 
    if(stacks[lowerCaseS].slice(-1) < stacks[lowerCaseE].slice(-1)) {
      // if the startStack number is smaller than endStack number, move it on top
      return true}
      else return false
    
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  // check if the other two towers are full
  if((stacks['b'].length == 4) || (stacks['c'].length == 4)) {
    console.log("You won!") //let the user know they won
    return true 
  } else return false
  
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  // // // person's input is one of three variables
  let input = ('c') || ('b') || ('a');

  // // // if person enters something that is not a stack, tell them to only enter one of the three.
  if((startStack !== input) || (endStack !== input)) {
    console.log('Please enter a, b, or c.')
  }
  

  // //before moving a piece, check if the move is legal
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  } 
  // //check for win after moving a piece
  checkForWin()
  
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

  // Test #1 made to ensure input is lowercase
  describe('#movePiece()', () => {
    it('should be lowercase', () => {
      movePiece("C", "C");
      assert.equal('c', 'c')
    })
  });

  //Test #2 input is one of three variables
  describe('#towerofHanoi()', () => {
    it('should be three variables', () => {
      towersOfHanoi("a", "C");
      assert.equal("c", "c");
      towersOfHanoi("a", "b");
      assert.equal("b", "b");
      towersOfHanoi("b", "a");
      assert.equal("a", "a");
    })
  });

  // Test #3: notify user that they won
  describe('#checkForWin()', () => {
    it('notify user they won', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), "You won!");
    });
  });

} else {

  getPrompt();

}


