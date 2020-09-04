let i = 0;
let x = 0;
let y = 0;
let oWins = 0;
let xWins = 0;
let winAnnouncer = document.getElementById("winAnnouncer");
let winTracker = document.getElementById("winHistory");
let theGrid = document.getElementById("gridContainer");  
let resetButton = document.getElementById("resetButton");

//testny

function clickedGrid(event){ 
    console.log(i);
    if(alreadyMarked(event) || checkForWinner(theGrid) || checkForDraw(i, theGrid)){
        if(checkForWinner(theGrid)){
            announceWinner();
        }
        return;
    }else{        
    if(i % 2 === 0){
        event.target.innerHTML ="X";
        i++;
    }else{
        event.target.innerHTML ="O";
        i++;
    }  
    }
    if(checkForWinner(theGrid)){
        announceWinner();
    }   
}

function resetGrid(){
    i--;
    console.log("värdet på i inne i resetfunk " + i);
    if(checkForWinner(theGrid) || checkForDraw(i, theGrid)){
        y++;       
        console.log("y är " + y);
        startStopButtonAnimation();
    }
    for(var x=0; x < theGrid.children.length; x++){
        theGrid.children[x].innerHTML = "";
        theGrid.children[x].removeAttribute("class", "neon-text-red");
        theGrid.children[x].setAttribute("class", "neon-text-blue");
    }
    winAnnouncer.innerHTML = "Lets play";
    i = 0;
}


function checkForDraw(i, theGrid){
    if(i == 8 && checkForWinner(theGrid) != true){
        winAnnouncer.innerHTML = "Draw";
        console.log("värdet på i " + i);
        startStopButtonAnimation();

    }
}

function alreadyMarked(event){
    if(event.target.innerHTML != ""){
        return true;
    }
}

function announceWinner(){
    if(i % 2 === 0){
        winAnnouncer.innerHTML = "Winner is O";
        if(x == y){
            oWins++;
            winTracker.children[2].innerHTML = "O wins: " + oWins;
            x++;
        }
        startStopButtonAnimation();
    }else{
        winAnnouncer.innerHTML = "Winner is X";
        if(x == y){
            xWins++;
            winTracker.children[1].innerHTML = "X wins: " + xWins;
            x++;
        }
        startStopButtonAnimation();
    }
}

function startStopButtonAnimation(){
    if(resetButton.classList.contains("pulser")){
        resetButton.classList.remove("pulser");
    }else{
        resetButton.classList.add("pulser");
    }
}

function checkForWinner(theGrid){
    for(var i = 0; i < 9; i++){       
        if(checkRows(theGrid)){
            return true;
        }
        if(checkColumns(theGrid)){
            return true;
        }
        if(checkDiagonal(theGrid)){
            return true;
        }  
    }
}

function checkRows(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML == theGrid.children[1].innerHTML && theGrid.children[2].innerHTML != ""){
        for(var y = 0; y<3; y++){
            theGrid.children[y].removeAttribute("class", "neon-text-blue");
            theGrid.children[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
    if(theGrid.children[3].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML == theGrid.children[4].innerHTML && theGrid.children[5].innerHTML != ""){
        for(var y = 3; y<6; y++){
            theGrid.children[y].removeAttribute("class", "neon-text-blue");
            theGrid.children[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML == theGrid.children[7].innerHTML && theGrid.children[8].innerHTML != ""){
        for(var y = 6; y<9; y++){
            theGrid.children[y].removeAttribute("class", "neon-text-blue");
            theGrid.children[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
}

function checkColumns(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[3].innerHTML && theGrid.children[3].innerHTML == theGrid.children[6].innerHTML && theGrid.children[6].innerHTML != ""){
        let winLine = document.querySelectorAll("#g11, #g21, #g31");
        for(let y = 0; y<3; y++){
            winLine[y].removeAttribute("class", "neon-text-blue");
            winLine[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
    if(theGrid.children[1].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[7].innerHTML && theGrid.children[7].innerHTML != ""){
        let winLine = document.querySelectorAll("#g12, #g22, #g32");
        for(let y = 0; y<3; y++){
            winLine[y].removeAttribute("class", "neon-text-blue");
            winLine[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
    if(theGrid.children[2].innerHTML == theGrid.children[5].innerHTML && theGrid.children[5].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        let winLine = document.querySelectorAll("#g13, #g23, #g33");
        for(let y = 0; y<3; y++){
            winLine[y].removeAttribute("class", "neon-text-blue");
            winLine[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
}

function checkDiagonal(theGrid){
    if(theGrid.children[0].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[8].innerHTML && theGrid.children[8].innerHTML != ""){
        let winLine = document.querySelectorAll("#g11, #g22, #g33");
        for(let y = 0; y<3; y++){
            winLine[y].removeAttribute("class", "neon-text-blue");
            winLine[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
    if(theGrid.children[6].innerHTML == theGrid.children[4].innerHTML && theGrid.children[4].innerHTML == theGrid.children[2].innerHTML && theGrid.children[2].innerHTML != ""){
        let winLine = document.querySelectorAll("#g13, #g22, #g31");
        for(let y = 0; y<3; y++){
            winLine[y].removeAttribute("class", "neon-text-blue");
            winLine[y].setAttribute("class", "neon-text-red");
        }
        return true;
    }
}
