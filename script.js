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

        var bokstav = theGrid.children[i].id;
        console.log(bokstav.charAt(1));

    }

  
}