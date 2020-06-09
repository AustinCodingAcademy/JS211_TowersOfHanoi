var selected = null;
var firstTower = document.querySelector('#firstTower');
var secondTower = document.querySelector('#secondTower');
var thirdTower = document.querySelector('#thirdTower');
var firstRing = document.querySelector('#firstRing');
var secondRing = document.querySelector('#secondRing');
var thirdRing = document.querySelector('#thirdRing');

//code for first tower
firstTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
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

//code for second tower
secondTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
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

//code for third tower
thirdTower.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                    //check to see if you are done. we only need this for tower 3
                    var weight = '';
                    for(var i = 0; i < tower.children.length; i++){
                        weight += tower.children[i].dataset.weight;
                    }
                    if(weight === '123'){
                        //should run when game is run
                        alert("Winner");
                        document.querySelector("#winning").classList.remove("hidden");

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
