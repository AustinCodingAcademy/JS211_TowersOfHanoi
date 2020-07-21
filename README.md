# JS211_Towers of Hanoi[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)

# Austin Coding Academy

## JavaScript 211 Project: Towers of Hanoi

## Overview

* [Towers of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a simple logic game involving three stacks. The first stack has four (or more) blocks, each one bigger than the next, stacked like a pyramid. The point of the game is to move the blocks from one stack and arrange them in the same order into another stack, but never placing a larger block onto a smaller block. You can play the game [here](http://vornlocher.de/tower.html) to get an idea.

Your checkpoint is really a terminal app; which is what you'll be graded on. However, you should push to use the DOM and create a GUI for this game.

## Checklist

<!-- This is for their personal navigation through the project. They can go through and make sure they get each thing and can comb over it later.  -->

1. 20pts - **Code Plan** - Include this in a `README.md` file in your folder with comments in your code
1. 10pts - **Move Blocks** - User can move "blocks" from column to column
1. 20pts - **Illegal Moves** - Prevents larger blocks from stacking on smaller blocks
1. 20pts - **Notifies winner** - When all the blocks are stacked into column 2 or 1 the user is alerted they won!
1. 20pts - **Minimum 3 Unit Tests** - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done.
1. 10pts - **Graphical User Interface** - Take this game out of the terminal by adding a User Interface that uses `towersOfHanoi()` function in `index.js`.

* **Extended Practice Bonus!!**
  * Keeps count of moves as player plays games
  * Sound Effects
  * Peaceful Background
  * Vertical columns
  * Proportional Stones/tokens

### Example

Dissect the [following game](https://codepen.io/austincoding/pen/YxMBPV/) to get an insight on how to build Towers of Hanoi with a GUI

### Instructions

<!-- There should be clear step by step instruction so the material can be asynchronously consumed. This will significantly help our students learn, review and improve your teaching experience.  -->

1. Once you understand the game, whiteboard the logic.
1. Create a list of steps your app need to do.
1. Translate to psuedo code.
1. Translate to JavaScript on paper
1. Write 3 tests for the app.
1. Build Towers of Hanoi, so it passes all the tests.
1. Create a new branch called " checkpoint-1 "
1. Build toward the tests.
1. Use the starter code below:

### Follow-up Video

<iframe src="https://player.vimeo.com/video/339373348" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

******

### Getting Started

1. Fork and Clone [Towers of Hanoi Repo](https://github.com/AustinCodingAcademy/JS211_TowersOfHanoi.git)
1. Ensure you have installed all dependencies/packages: `npm i`
1. Look at the Unit Test, see what is being called, passed as input arguments, and what the expected result are.
1. Ensure you know how to run the unit test:
    * `npm test main.js`
1. Use a whiteboard to work out a solution to building the Pig Latin program
1. Translate the broad ideas to psuedo code
1. Convert the psuedo code to real JavaScript Code
1. Type into your text editor the JavaScript code you've come up with one step at a time
1. Work through your bugs.
1. Use `node main.js` to run the game.
1. Achieve green checks for each of your unit tests.

### Hints

1. Run your unit tests first!!
1. Use [repl.it](https://www.repl.it) to write the solution code first. (its a faster environment vs using the `node main.js` command over and over again.)
1. Read the comments in `main.js`
1. Push yourself further.
1. Look at your hints!
1. **Clone, setup, testing, and running instructions for all projects is below**

******

## Cloning Your Project

1. Click the 'Fork' button (choose your account if prompted).
1. Copy HTTPS URL from your forked repository
1. In your terminal/gitBash/CommandPrompt navigate (using `cd`) into a directory where you want to start keeping your repositories. (`/jsDevFolder`)
1. Clone your new repository by typing `git clone <forked clone URL>` (the HTTPS
URL you copied above)
  ![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd project-repo`

1. Add the base repository as an upstream
    `git remote add upstream https://github.com/AustinCodingAcademy/<PROJECT-REPO>.git`

1. Check the configuration of your remotes with `git remote -v`, it should look
very similar to this (except it'll be YOUR username)

```bash
$ git remote -v

origin  git@github.com:username/javascript-workbook.git (fetch)
origin  git@github.com:username/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

#### Get latest workbook updates

1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure you code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run a the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
