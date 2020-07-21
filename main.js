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

// let startStack = first entered stack
// let endStack = second entered stack
// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  stacks[endStack].push(stacks[startStack].pop())
  }
  






// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  // Your code here
  if(stacks[end].length === 0 || stacks[start][stacks[start].length - 1] < stacks[end][stacks[end].length - 1]) {
    return true;
  } else {
    console.log("Illegal Move, Try Again");
    return false;
  }
}

  // <!-- not allow larger stones on top of smaller stones -->
  //   <!-- stone 4 cannot go on stone 3 -->




// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {

  if (stacks['b'].length === 4) {
    console.log("Winner!")
    return true
  } else {
    return false
  }


  // Your code here
  // <!-- when all stones have been moved to a new stack that wasnt the starting stack -->
  //  <!-- check for winner -->
  //   <!-- when stack B or C = [4, 3, 2, 1] => WINNER! -->

 

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (start, end) => {
  // Your code here
  // <!-- stack.appendChild(stone) -->

     // isLegal
    if (isLegal(start, end)) {
    // callback in order movePiece
    movePiece(start, end)  
 
    // checkForWin
    checkForWin(start, end)
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
