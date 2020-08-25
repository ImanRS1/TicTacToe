let i = 0;

function testClick(event){
    if(alreadyMarked(event)){
        return;
    }else{
    if(i % 2 === 0){
        event.target.innerHTML ="X";
    }else{
        event.target.innerHTML ="O";
    }  
    i++;
    }
    let theGrid= document.getElementById("gridContainer");
  
    checkForWinner(theGrid);
}

function alreadyMarked(event){
    if(event.target.innerHTML != ""){
        return true;
    }
}

function checkForWinner(theGrid){

    for(var i = 0; i < 9; i++){
       //console.log(theGrid.children[i].innerHTML);
        //console.log(theGrid.children[i].id)

        var thisGrid = theGrid.children[i].id;
        console.log(thisGrid.charAt(1));

        var thisValue = theGrid.children[i].innerHTML;
        console.log(thisValue);

        if(thisGrid.charAt(1) == 1){
            
        }

        if(checkRows(theGrid)){
            return;
        }

        if(checkColumns(theGrid)){
            return;
        }

        if(checkDiagonal(theGrid)){
            return;
        }
/* 
        if(theGrid.children[0].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML == theGrid.children[1].innerHTML){
            console.log("vinnare på rad 1");
            return;
        } */


    }

  
}

function checkRows(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML != ""){
        console.log("vinnare på rad 1");
        return true;
    }
    if(theGrid.children[3].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML != ""){
        console.log("vinnare på rad 2");
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML != ""){
        console.log("vinnare på rad 3");
        return true;
    }
}

function checkColumns(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[3].innerHTML && theGrid.children[3].innerHTML == theGrid.children[6].innerHTML && theGrid.children[6].innerHTML != ""){
        console.log("vinnare på kolumn 1");
        return true;
    }
    if(theGrid.children[1].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[7].innerHTML && theGrid.children[7].innerHTML != ""){
        console.log("vinnare på kolumn 2");
        return true;
    }
    if(theGrid.children[2].innerHTML == theGrid.children[5].innerHTML && theGrid.children[5].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        console.log("vinnare på kolumn 3");
        return true;
    }
}

function checkDiagonal(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        console.log("vinnare på diagonal pekandes åt vänster");
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[2].innerHTML && theGrid.children[2].innerHTML != ""){
        console.log("vinnare på diagonal pekades åt höger");
        return true;
    }
}