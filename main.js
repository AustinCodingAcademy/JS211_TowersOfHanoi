"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//STARTING CODING LADY!!!

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
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // pop off of start stack and push to end stack
  stacks[endStack].push(stacks[startStack].pop());
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2

const isLegal = (firstMove, secondMove) => {
  if (
    !stacks[secondMove].length ||
    stacks[secondMove][stacks[secondMove].length - 1] >
      stacks[firstMove][stacks[firstMove].length - 1]
  ) {
    return true;
  } else {
    return false;
  }
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if (
    stacks["a"].length == 0 &&
    (stacks["b"].length || stacks["c"].length == 4)
  ) {
    console.log("Look what we got here, smarty pants!");
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?

const towersOfHanoi = (start, end) => {
  // Your code here
  if (isLegal(start, end)) {
    movePiece(start, end);
    checkForWin();
  } else {
    console.log("try again");
  }
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  //first test created
  describe('#printStacks()', () => {
    it('should print out all stacks', () => {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
    });
    });
  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    //second test created
    it("stack.a should equal 0, stack c can win", () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [], c: [4, 3, 2] };
      assert.equal(checkForWin(), false);
    });
  });
  //third test created
  describe("#movePiece", () => {
    it("stack.a should start with all 4 pieces", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
    });
  });
} else {
  getPrompt();
}
