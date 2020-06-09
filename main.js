var selected = null;
var towerOne = document.querySelector('#towerOne');
var towerTwo = document.querySelector('#towerTwo');
var towerThree = document.querySelector('#towerThree');
var ringOne = document.querySelector('#ringOne');
var ringTwo = document.querySelector('#ringTwo');
var ringThree = document.querySelector('#ringThree');


towerOne.addEventListener('click', function(event){
 
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
       
       
       
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight
                   
                    selected.classList.remove("selected");
                    selected = null;
                }
                 on top
                
                else if(selected.dataset.weight  < firstRing.dataset.w
                   
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            selected = firstRing;
            selected.classList.add("selected");
        }
});
towerTwo.addEventListener('click', function(event){
    
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
 
 
 
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight
                  
                    selected.classList.remove("selected");
                    selected = null;
                
                 on top
                
                else if(selected.dataset.weight  < firstRing.dataset.w
                    
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            if (firstRing) {
                selected = firstRing;
                selected.classList.add("selected");
            }
        }
});
towerThree.addEventListener('click', function(event){
    
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
       
       
       
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight
                  
                    selected.classList.remove("selected");
                    selected = null;
                }
                 on top
                
                else if(selected.dataset.weight  < firstRing.dataset.w
                    
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                    
                    var weight = '';
                    for(var i = 0; i < tower.children.length; i++){
                        weight += tower.children[i].dataset.weight;
                    }
                    if(weight === '123'){
                        document.querySelector("#win").classList.remov
                        document.querySelector("#win").classList.add("

                    }
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            if (firstRing) {
                selected = firstRing;

                console.log(selected)
                selected.classList.add("selected");
            }
        }
});
