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
    a: [4,3,2,1],
    b: [],
    c: []
  };

let victoryCheckify = {
  a: [],
  b: [4,3,2,1],
  c: [4,3,2,1]
  };
  
  // Start here. What is this function doing?
  const printStacks = () => {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
  }
  
  // Next, what do you think this function should do?


  const movePiece = (startStack, endStack) => {
    //this pushed the piece to it's move point
    
    stacks[endStack].push(moveThisPiece)

    // console.log(stacks)

    checkForWin()
    return (true)
  }
  
  const isLegal = (startStack, endStack) => {
    
     // grabs piece
    moveThisPiece = stacks[startStack].pop()
    // console.log(moveThisPiece)
   
    // let moveToPosition = stacks[endStack]
    peiceDestination = stacks[endStack].pop()
    // console.log(peiceDestination)

    // checks if legal
    // if any moves are deemed illegal, peices will be put back in their previous positions
    if (moveThisPiece === undefined){
    console.log("this move is illegal. Move Reset.")
    stacks[endStack].push(peiceDestination)
      return (false)
    }
    if (peiceDestination === undefined){
      movePiece(startStack, endStack)
      return (true)
    }
    if (moveThisPiece > peiceDestination){
      //puts pieces back
        stacks[endStack].push(peiceDestination);
        stacks[startStack].push(moveThisPiece);
        console.log("this move is illegal. Move Reset.")
        return (false)
        
    // } else if (moveThisPiece === undefined){
    //    //puts piece back
    //     stacks[endStack].push(peiceDestination);
    //     console.log("this move is illegal. Move Reset.")
    //     console.log(stacks)
    } else {
     //deemed legal, goes to movepiece()      //might need to change annon func
        stacks[endStack].push(peiceDestination);
        movePiece(startStack, endStack)
        return (true)
    }
  }
  

  const checkForWin = () => {
//found I can stingify to compare arrays
      if (JSON.stringify(stacks.c) === JSON.stringify(victoryCheckify.c)){
        console.log("victory!!")
        return (true)
      } else if 
        (JSON.stringify(stacks.b) === JSON.stringify(victoryCheckify.b)){
        console.log("victory!!")
        return (true)
      }
      else {
        return (false)
      }
    }
  // When is this function called? What should it do with its argument?
  const towersOfHanoi = (startStack, endStack) => {
    // Your code here


    //Check Legal

    isLegal(startStack, endStack)

    //Check For Win
  }

let startStack;

let endStack;

let moveThisPiece;

let peiceDestination;


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
//my written test
  describe('#isLegal()', () => {
    it('should not move undefined', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('c','a'), false);
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
//my written test
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('a', 'b'), false);
    });
//my written test
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4],
        b: [2, 1],
        c: [3]
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
//my written test
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });

} else {

  getPrompt();

}
