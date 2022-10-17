'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/********/



//****** */








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
// logging the value of three arrays in the stack object
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
// Moving piece from startStack to endStack by grabbing the last element
// in the startStack array and placing it on the endStack array
const movePiece = (startStack, endStack) => {
  // Your code here
  // created a variable(movedPiece) to store value of the last element from
  //  the array selected by the user(startStack)//
  let movedPiece = stacks[startStack].pop()
  // pushing the movedPiece to the endStack key in the stacks array
  stacks[endStack].push(movedPiece)
  console.log(movedPiece)



  ///////if statement is legal return true then move piece////
  /// can use push and pop to move and remove numbers between arrays//////
  //// startstack is pop to remove |||| endstack is push to add/////

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here
  // created a variable to select the last element from the startStack array 
  let startPiece = stacks[startStack].slice(-1)
  // created a variable to select the last element from the endStack array
  let endPiece = stacks[endStack].slice(-1)
  if ((startPiece > endPiece && endPiece.length > 0) || startStack === endStack){ 
    return false
  }
  else {
    return true
  }
  // if statement to compare the two numbers if its legal return true
  // else return false
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  // if statement saying that if either stack has 4 elements return true
  if(stacks.b.length === 4 || stacks.c.length === 4){
    return true;
  } else return false
}

// When is this function called? What should it do with its argument?
// its called inside of the getPromt function. 
// 
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let start = startStack
  let end = endStack
  // bigger values can't be placed after smaller values
  if (isLegal(start, end) == true) {
    // if move is legal call the movePiece function
    movePiece(start, end)
    } else {
      // console logging if a move is invalid
       console.log("invalid move")
      }
    // after we've moved a piece we call the checkforwin function
    checkForWin();
    // if check for win is true we log winner message 
    if(checkForWin() === true){
      console.log("we win!")
    
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
