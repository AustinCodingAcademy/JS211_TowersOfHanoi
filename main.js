"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

const movePiece = (startStack, endStack) => {
  let remove = stacks[startStack].pop();
  stacks[endStack].push(remove);
  // call towersOfHanoi to get which stack to remove from and which stack to place
};

const isLegal = (startStack, endStack) => {
  if (
    (startStack === "a" && (endStack === "b" || endStack === "c")) ||
    (startStack === "b" && (endStack === "a" || endStack === "c")) ||
    (startStack === "c" && (endStack === "a" || endStack === "b"))
  ) {
    if (stacks[endStack].length === 0) {
      return true;
    }
    if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1)) {
      return true;
    } else return false;
  } else return false;
};

const checkForWin = () => {
  if (stacks.b.length === 4) {
    //|| stacks.c.length === 4)
    console.log("Winner, Winner, Chicken, Dinner!"); //needs to be above return because once return happens its gone
    return true;
  } else if (stacks.c.length === 4) {
    console.log("Winner! You are a Master of Towers of Hanoi");
    return true;
  } else return false;
};

const towersOfHanoi = (startStack, endStack) => {
  //is legal to determin if it can move = true move piece then check for win
  // islegal = true then move piece, then check for win
  if (isLegal(startStack, endStack)) {
    //truthy or falsey statement
    movePiece(startStack, endStack); //arguments
    checkForWin();
  } else {
    console.log("Try Again Bud, Not a Valid Move");
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
    it("input must be valid", () => {
      isLegal("f", "d");
      assert.equal(isLegal("f", "d"), false);
    });
    it("input must be valid", () => {
      isLegal("a", "b");
      assert.equal(isLegal("a", "b"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
    it("should detect master win", () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
