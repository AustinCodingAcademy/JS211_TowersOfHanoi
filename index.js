// global variables 

let numberOfMoves = 1; 

// functions

function checkForWin(){
  let diskCount

  const allRods = document.querySelectorAll(".rod");
  allRods.forEach((rod) =>{
    diskCount = rod.childElementCount;
    if(diskCount === 4){
      console.log("you win!")
    }
  });
}

function resetGame(){
  location.reload();
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
    document.getElementById("moveMessage").innerHTML = "Successfully moved disk";
    document.getElementById("moves").innerHTML = numberOfMoves++
  }else if(parseInt(ev.target.firstElementChild.id) > parseInt(ev.target.firstElementChild.nextElementSibling.id)){
    document.getElementById("moveMessage").innerHTML = "Successfully moved disk";
    document.getElementById("moves").innerHTML = numberOfMoves++;
    checkForWin()
  }else if(parseInt(ev.target.firstElementChild.id) < parseInt(ev.target.firstElementChild.nextElementSibling.id)){
    fromParentRod.insertBefore(diskBeingDragged, fromParentRod.firstChild); 
    document.getElementById("moveMessage").innerHTML = "Invalid Move";
  }
  resetDraggableProp()
}

function resetDraggableProp(){

  const allDisks = document.querySelectorAll(".disk");
  allDisks.forEach((disk) =>{
    disk.setAttribute("draggable", "true"); 
  });
}

