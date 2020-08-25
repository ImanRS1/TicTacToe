let i = 0;

function clickedGrid(event){
    let theGrid= document.getElementById("gridContainer");  
    if(alreadyMarked(event) || checkForWinner(theGrid) || checkForDraw(i, theGrid)){
        return;
    }else{        
    if(i % 2 === 0){
        event.target.innerHTML ="X";
    }else{
        event.target.innerHTML ="O";
    }  
    i++;
    }
    checkForWinner(theGrid);   
}


function checkForDraw(i, theGrid){
    if(i == 8 && checkForWinner(theGrid) != true){
        console.log("DRAW");
    }
}

function alreadyMarked(event){
    if(event.target.innerHTML != ""){
        return true;
    }
}

function checkForWinner(theGrid){

    for(var i = 0; i < 9; i++){
       
        if(checkRows(theGrid)){
            console.log("vinnare på RAD");
            return true;
        }

        if(checkColumns(theGrid)){
            console.log("vinnare på KOLUMN");
            return true;
        }

        if(checkDiagonal(theGrid)){
            console.log("vinnare på DIAGONAL");
            return true;
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
}