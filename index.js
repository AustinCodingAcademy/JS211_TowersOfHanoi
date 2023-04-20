// global variables 

let moveMessage = ''; 
let numberOfMoves = 0; 

// functions

function checkForWin(){

  const topRedRowSize = document.getElementById("top-row").childElementCount
  const middleYellowRowSize = document.getElementById("middle-row").childElementCount
  const bottomGreenRowSize = document.getElementById("bottom-row").childElementCount

  console.log(topRedRowSize, middleYellowRowSize, bottomGreenRowSize)

  if(topRedRowSize === 4 || middleYellowRowSize === 4 || bottomGreenRowSize === 4){
    console.log("you won!");
    alert("You won the game! Congratulations!")
    document.getElementById("moveMessage").innerHTML = ''; 
  }
}

function resetGame(){
  console.log("game reset");
  alert("Game reset");
  moveMessage = '';
  numberOfMoves = 0; 
  document.getElementById("moveMessage").innerHTML = moveMessage;
  document.getElementById("moves").innerHTML = numberOfMoves;
  const bottomRow = document.getElementById("bottom-row")
  const middleRow = document.getElementById("middle-row");
  const topRow = document.getElementById("top-row");
  let lastStone = null; 
 
  while(middleRow.lastElementChild){
    lastStone = middleRow.lastElementChild
    middleRow.removeChild(lastStone)
    bottomRow.appendChild(lastStone)
    lastStone = null 
  }

  while(topRow.lastElementChild){
    lastStone = topRow.lastElementChild
    topRow.removeChild(lastStone)
    bottomRow.appendChild(lastStone)
    lastStone = null 
  }

  let stones = bottomRow.childNodes
  let stonesArray = []; 

  for(let i = 0; i < stones.length; i++){
    if(stones[i].nodeType == 1){
      stonesArray.push(stones[i])
    }
  }
  console.log(stonesArray)

  stonesArray.sort(function(a,b){
    return a.innerHTML == b.innerHTML
    ? 0
    : (a.innerHTML < b.innerHTML ? 1 : -1);
  });

  for(let i = 0; i < stonesArray.length; i++){
    bottomRow.appendChild(stonesArray[i])
  }
}

function drag(ev){
  const currentDisk = ev.target.id
  const topDisk = ev.target.parentElement.firstElementChild.id;
  if(currentDisk === topDisk){
    ev.dataTransfer.setData("moving disk", ev.target.id);
  }else{
    const currentDiskObj = document.getElementById(currentDisk);
    currentDiskObj.setAttribute("draggable", "false")
  }
  
}

function allowDrop(ev){
    ev.preventDefault();
}

function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("moving disk");
  let diskBeingDragged = document.getElementById(data);
  let fromParentRod = diskBeingDragged.parentElement
  let toParentRod = document.getElementById(ev.target.id);
  let firstChildEl = toParentRod.firstChild
  toParentRod.insertBefore(diskBeingDragged, firstChildEl);
  if(parseInt(ev.target.firstElementChild.id) === parseInt(ev.target.lastElementChild.id)){
    moveMessage = "Successfully moved disk"; 
    document.getElementById("moveMessage").innerHTML = moveMessage;
    numberOfMoves++
    document.getElementById("moves").innerHTML = numberOfMoves
  }else if(parseInt(ev.target.firstElementChild.id) > parseInt(ev.target.firstElementChild.nextElementSibling.id)){
    moveMessage = "Successfully moved disk"; 
    document.getElementById("moveMessage").innerHTML = moveMessage;
    numberOfMoves++
    document.getElementById("moves").innerHTML = numberOfMoves
  }else if(parseInt(ev.target.firstElementChild.id) < parseInt(ev.target.firstElementChild.nextElementSibling.id)){
    fromParentRod.insertBefore(diskBeingDragged, fromParentRod.firstChild)
    moveMessage = "Invalid Move"; 
    document.getElementById("moveMessage").innerHTML = moveMessage;
  }
  resetDraggableProp()
}

function resetDraggableProp(){

  const allDisks = document.querySelectorAll(".disk");
  allDisks.forEach((disk) =>{
    disk.setAttribute("draggable", "true"); 
  });
}

