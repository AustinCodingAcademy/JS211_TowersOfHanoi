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
        const printStacks = (flag) => {
          if (flag) {
            console.log('---------------------------------------------------------------------')
            console.log('YOU WON!! I would give you a cookie for this achievement, but I have already eaten the cookie... I probably shouLd not have mentioned the cookie in the first place huh... Listen I am sorry that you did not get the cookie but maybe the real reward here was not getting the cookie, ya know? .... Think of it like I am sparing you the calories of a cookie, but you can be comforted with the thought that you would have gotten a cookie, so really when you think about it I did you a favor... Your welcome!! ... BUT when you REALLY think about it, I think you owe ME a cookie for not giving YOU a cookie, sooooo I will take a snickerdoodle, THANK YOU!!')
            console.log('---------------------------------------------------------------------')
          } else {
          console.log("a: " + stacks.a);
          console.log("b: " + stacks.b);
          console.log("c: " + stacks.c);
          }
        }
        
        const movePiece = (startStack,endStack) => {
          // pop off of start stack and push to end stack
          stacks[endStack].push(stacks[startStack].pop())
          checkForWin()
        }
        
        const isLegal = (firstMove, secondMove) => {
          if(!(stacks[secondMove].length) || (stacks[secondMove][stacks[secondMove].length -1] > stacks[firstMove][stacks[firstMove].length -1])){
            return true
          } else {
            return false
          }
        }
        
        const checkForWin = () => {
          if (stacks.a.length == 0 && stacks.b.length == 4 || stacks.c.length == 4){
            printStacks(true)
            return true
          } else {
            return false
          }
        }
        
        const towersOfHanoi = (start, end) => {
          // Your code here
          if(isLegal(start, end)) {
          movePiece(start, end)
          } else {
          console.log("------ Invalid Move ------")
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
