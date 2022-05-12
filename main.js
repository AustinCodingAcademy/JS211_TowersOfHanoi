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
const movePiece = (x,y) => {
  if(isLegal(x,y)){
  // console.log(stacks[x],stacks[y])//had issue with dot notation being undefined
  stacks[y].push(stacks[x].pop())
  // console.log(stacks)
  // Your code here
  }
  else{

  }

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (x,y) => {
  //first test is x's stack is not empty then check for size of object being moved
  //changed first test is actually for checking for correct inputs
if((x==="a"||x==="b"||x==="c")&&(y==="a"||y==="b"||y==="c")){
      if(stacks[x][0]===undefined){
        return false
      }
      else if(stacks[x][stacks[x].length-1]>stacks[y][stacks[y].length-1]){
        return false
      }
      else{
        return true
      }
}
else{
  return false
}
  // Your code here
  //i should not be also be able to pop from an empty array and not be able to stack a larger number to a smaller one

}

// What is a win in Towers of Hanoi? When should this function run?
//it should run after you move
const checkForWin = () => {
  let arr="4,3,2,1"
  // console.log(stacks.b.toString())
  if(stacks.b.toString()==arr){
    return true;
  }
  else if(stacks.c.toString()==arr){
    return true
  }
  else{
    return false
  }
  // Your code here

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  movePiece(startStack,endStack)
  // checkForWin();
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if(checkForWin()){
        printStacks();
        console.log("You Won")
        console.log("Play Again? Or Exit with Ctrl-C")
        let stacks = {
          a: [4, 3, 2, 1],
          b: [],
          c: []
        };
        getPrompt();
      }
      else{
        getPrompt();
      }
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
