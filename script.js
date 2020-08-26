let i = 0;
let winAnnouncer = document.getElementById("winAnnouncer");

let theGrid= document.getElementById("gridContainer");  

function clickedGrid(event){ 
    console.log(i);
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

function resetGrid(){
    for(var x=0; x < theGrid.children.length; x++){
        theGrid.children[x].innerHTML = "";
    }
    winAnnouncer.innerHTML = "Lets play!";
    i = 0;
}


function checkForDraw(i, theGrid){
    if(i == 8 && checkForWinner(theGrid) != true){
        winAnnouncer.innerHTML = "Draw!";
    }
}

function alreadyMarked(event){
    if(event.target.innerHTML != ""){
        return true;
    }
}

function announceWinner(){
    if(i % 2 === 0){
        winAnnouncer.innerHTML = "Winner is: O";
    }else{
        winAnnouncer.innerHTML = "Winner is: X";
    }
}

function checkForWinner(theGrid){
    for(var i = 0; i < 9; i++){       
        if(checkRows(theGrid)){
            announceWinner();
            return true;
        }
        if(checkColumns(theGrid)){
            announceWinner();
            return true;
        }
        if(checkDiagonal(theGrid)){
            announceWinner();
            return true;
        }  
    }
}

function checkRows(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML != ""){
        return true;
    }
    if(theGrid.children[3].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML != ""){
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML != ""){
        return true;
    }
}

function checkColumns(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[3].innerHTML && theGrid.children[3].innerHTML == theGrid.children[6].innerHTML && theGrid.children[6].innerHTML != ""){
        return true;
    }
    if(theGrid.children[1].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[7].innerHTML && theGrid.children[7].innerHTML != ""){
        return true;
    }
    if(theGrid.children[2].innerHTML == theGrid.children[5].innerHTML && theGrid.children[5].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        return true;
    }
}

function checkDiagonal(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[2].innerHTML && theGrid.children[2].innerHTML != ""){
        return true;
    }
}
