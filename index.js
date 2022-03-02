 const test=[...document.querySelectorAll('.cell')];
 const clear=document.getElementById("clear");
 const reset=document.getElementById("reset");
 const scoreBoard=document.getElementById('result');
 
 let counter=0;
 let playerXResult=0;
 let playerOResult=0;


 function markCell(){
    if(counter%2==0&&this.textContent==""){
    this.textContent="X";
    }
    if(counter%2==1&&this.textContent=="")
    {
        this.textContent="O";
    }
    counter++;
}
function updateResult(x,y){
    scoreBoard.textContent="Player X: "+playerXResult+"  Player O: "+playerOResult;
}
function checkGameProgress(){
    if((test[0].textContent=="X"&&test[1].textContent=="X"&&test[2].textContent=="X")||(test[3].textContent=="X"&&test[4].textContent=="X"&&test[5].textContent=="X")||
    (test[6].textContent=="X"&&test[7].textContent=="X"&&test[8].textContent=="X")||(test[0].textContent=="X"&&test[3].textContent=="X"&&test[6].textContent=="X")||
    (test[1].textContent=="X"&&test[4].textContent=="X"&&test[7].textContent=="X")||(test[2].textContent=="X"&&test[5].textContent=="X"&&test[8].textContent=="X")||
    (test[0].textContent=="X"&&test[4].textContent=="X"&&test[8].textContent=="X")||(test[2].textContent=="X"&&test[4].textContent=="X"&&test[6].textContent=="X")){
        playerXResult++;
        alert("Game finished. X player won.");
        clearBoard();
    }
    else if((test[0].textContent=="O"&&test[1].textContent=="O"&&test[2].textContent=="O")||(test[3].textContent=="O"&&test[4].textContent=="O"&&test[5].textContent=="O")||
    (test[6].textContent=="O"&&test[7].textContent=="O"&&test[8].textContent=="O")||(test[0].textContent=="O"&&test[3].textContent=="O"&&test[6].textContent=="O")||
    (test[1].textContent=="O"&&test[4].textContent=="O"&&test[7].textContent=="O")||(test[2].textContent=="O"&&test[5].textContent=="O"&&test[8].textContent=="O")||
    (test[0].textContent=="O"&&test[4].textContent=="O"&&test[8].textContent=="O")||(test[2].textContent=="O"&&test[4].textContent=="O"&&test[6].textContent=="O")){
        playerOResult++;
        alert("Game finished. O player won.");
        clearBoard();
    }
    else if(counter==9){
        alert("There is no winner");
        clearBoard();
    }
    updateResult();
}

function clearBoard(){
    for(let i=0;i<test.length;i++){
        test[i].textContent="";
        counter=0;
    }
}
function resetGame(){
    counter=0;
    playerOResult=0;
    playerXResult=0;
    clearBoard();
    updateResult();
}
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('mousedown',markCell);
    test[i].addEventListener('mouseup',checkGameProgress);
}
clear.addEventListener('click',clearBoard);
reset.addEventListener('click',resetGame);