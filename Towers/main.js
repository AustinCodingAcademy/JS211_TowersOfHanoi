function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev, e) {
  let id = e.id;
  let disk = document.getElementById(id);
  let rod = disk.parentElement;
  let diskNum = getDiskNum(disk.id);
  let sourcDiskNum = (getTopDiskSize(rod));
  if (diskNum <= sourcDiskNum) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}

function drop(ev) {
  let id = ev.dataTransfer.getData("text");
  let disk = document.getElementById(id);
  let diskNum = getDiskNum(disk.id);
  let targetDiskNum = (getTopDiskSize(ev.target));
  if (diskNum < targetDiskNum) {
    ev.preventDefault();
    ev.target.insertAdjacentElement("afterbegin", disk);
  }
}


let getDiskNum = (d) => {
  return d.replace('d', '');
}

let getTopDiskSize = (rod) => {
  let num = 999;
  for (let i = 0; i < rod.childNodes.length; i++) {
    let child = rod.childNodes[i];
    if (child.nodeType != 3) {
      num = getDiskNum(child.id);
      break;
    }
  }
  return num;
}