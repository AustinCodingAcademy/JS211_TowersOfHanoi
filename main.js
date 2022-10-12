"use strict";

const assert = require("assert");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
  if (isLegal(startStack, endStack)) {
    let movedPiece = stacks[startStack].pop();
    stacks[endStack].push(movedPiece);
  }

  // Take in startStack and endStack
  // Call isLegal()
  // if isLegal is false| return invalid input
  // if isLegal is true| move the piece vv
  // Pop off startStack and push onto endStack
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  let end = Number(stacks[endStack].slice(-1));
  let start = Number(stacks[startStack].slice(-1));
  console.log("Start", start);
  console.log("End", end);
  // compare startStack and endStack

  if (end === 0) {
    return true;
  } else if (start < end) {
    return true;
  } else {
    console.log("Invalid Input");
    return false;
  }
};

// if endStack is less than startStack, illegal
// if endStack is greater than startStack, legal

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Check 'c' and see if it contains all the pieces
  if (stacks.b.length === 4) {
    console.log("You Win!!!");
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // console.log("Intitial Endstack:", typeof endStack);
  movePiece(startStack, endStack);
  checkForWin();
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
  });
} else {
  getPrompt();
}
