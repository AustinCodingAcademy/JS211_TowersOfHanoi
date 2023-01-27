"use strict";

const assert = require("assert");
const readline = require("readline");
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
  let remove = stacks[startStack].pop();
  stacks[endStack].push(remove);
  // call towersOfHanoi to get which stack to remove from and which stack to place
  // select by using stacks.object(object coming from towersofhanoi function?)[index]
  // remove last number from array of the object
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // add if from number is larger than to number illegal
  // if (
  //   (startStack === "a") & (endStack != "a") ||
  //   startStack === "b" ||
  //   (endStack != "b") & (startStack === "c") ||
  //   endStack != "c"
  //   ) {
  //     return true;
  //   }
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
    // } else return false; //test to make sure functions working
  } else return false;
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  //if statement checking if blocks are on B || C and in order
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("You are Smart! Good Job"); //needs to be above return because once return happens its gone
    return true;
  } else return false;
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  //is legal to determin if it can move = true move piece then check for win
  // islegal = true then move piece, then check for win
  if (isLegal(startStack, endStack)) {
    //truthy or falsey statement
    movePiece(startStack, endStack); //arguments
    checkForWin();
  } else {
    console.log("try again, not valid");
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
  });
} else {
  getPrompt();
}
