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
  stacks[endStack].push(stacks[startStack].pop())
  }
    //popping from startStack and pushing to endStack
    //move last stones in 'stack' to a new stack

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  if (stacks[end].length === 0 || stacks[start][stacks[start].length - 1] < stacks[end][stacks[end].length -1]) {
    return true;
  } else {
    console.log("straight to jail");
    return false
  }
}
  // if thing is in hand, and endStack is empty or thing is in hand and is smaller than last thing in endStack place thing from hand to endStack
  // not allow larger stones on top of smaller stones
  // stone 4 cannot go on stone 3


// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if (stacks['b'].length === 4) {  //should I also add OR stack c = 4?
    console.log('winner winner chicken dinner!')
    return true
  } else {
    return false
  }
  }
  // at any point if stacks length is equal to 4 things it's a win, else keep playing
  // when all stones have been moved to a new stack that wasn't the starting stack
  // when stack B or C = [4, 3, 2, 1]


// When is this function called? What should it do with its argument?
const towersOfHanoi = (start, end) => {

  // isLegal
  if (isLegal(start, end)){
  // movePiece
  movePiece(start, end)
  //checkForWin
  checkForWin(start, end)
  } else {
    towersOfHanoi()
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

    //my test for movePiece 
  describe('#movePiece', () => {
    it('stack.a should start with all 4 pieces', () => {
    stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
    };
    });
    });

    // my test for printStacks
describe('#printStacks()', () => {
  it('should print out all stacks', () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
  });
});

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
    //my test for obvious part of check for win...
  it('stack.a should equal 0, stack b can win', () => {
    stacks = { a: [], b: [4, 3, 2, 1], c: [] };
    assert.equal(checkForWin(), true);
    stacks = { a: [1], b: [], c: [4, 3, 2] };
    assert.equal(checkForWin(), false);
    });

} else {

  getPrompt();

}
