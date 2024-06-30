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


// this variable creates the starting stack and base starting point for the game to work off of.
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?

// this function is console logging the current stacks and letting the user know which stacks currently have block on them.  This is also being used to run the game in node.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?

// This function should move the last item from the array(startStack) and add it to the array(endStack). 
const movePiece = (startStack, endStack) => {
  // Your code here

  //remove last item from the start stack
  let lastItem = stacks[startStack].pop();

  // add removed item to endStack
  stacks[endStack].push(lastItem)
  checkForWin()
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2

// This function should check if the second move and following moves are legal before allowing the move.  The lower numbers should only be able to stack on the larger numbers.

const isLegal = (startStack, endStack) => {
  // Your code here
  
  // the variable 'start' is checking to see what the last index in the array is on the first stack and saving it in a variable for comparison later.

  let start = stacks[startStack][stacks[startStack].length - 1]

   // the variable 'end' is checking to see what the last index in the array is on the stack we are attempting to add a piece to and saving it in a variable for comparison later.

  let end = stacks[endStack][stacks[endStack].length - 1]

  // This if statement is checking for legal moves in this game and is checking first to see if there is anything in the endStack array or tower we are trying to add a piece to, if nothing then the piece is added.  If there is a piece in the endStack or tower, we will compare the "start variable" and "end variable" and if the start variable is less than the end variable, the statement will allow the move.  If the start variable is more than the end variable, the statement will return false and not allow the move.

  if(stacks[endStack].length === 0) {
    return true
  } else if (start < end) {
    return true
  }
  else {
    return false
  }
}

// What is a win in Towers of Hanoi? When should this function run?

// A win in Towers of Hanoi is when all 4 blocks have been legally moved from one tower to one of the other towers and are in order according to their weight 

const checkForWin = () => {
  // Your code here

  // This if statement is checking to see if there is a winner for this game.  Since all pieces are originally in the "a" stack, as long as all 4 peices have been legally moved to one of the other towers or "b" or "c" stacks, the game has been won.  The statement will return true if the "a" stack length is equal to 0 AND either the "b" stack OR "c" stack is equal to 4.  Else it will return false and the player will keep playing the game.

  if(stacks.a.length === 0 && stacks.b.length === 4 || stacks.c.length === 4){
    alert("You Won!")
    return true
  } else {
    return false
  }
}

// When is this function called? What should it do with its argument?

// This function is called towersOfHanoi and it should take in two arguments that are passed into the function when a user removes a block from a tower(startStack) then places it on a different tower(endStack).  
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  // The function then uses an if statement and inside the condition runs the isLegal function passing in the same arguments to check if the move is legal before allowing a move.  If the move is valid, the piece will be placed else it will return a console log notifying the user its an invalid move.
  if(isLegal(startStack, endStack)) {
  movePiece(startStack, endStack)
  } else {
  console.log("Invalid Move")
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
