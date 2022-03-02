 const test=[...document.querySelectorAll('.cell')];
 let counter =0;
console.log(test);
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
function checkGameProgress(){
    if(test[0].textContent=="X"&&test[1].textContent=="X"&&test[2].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[3].textContent=="X"&&test[4].textContent=="X"&&test[5].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[6].textContent=="X"&&test[7].textContent=="X"&&test[8].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[0].textContent=="X"&&test[3].textContent=="X"&&test[6].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[1].textContent=="X"&&test[4].textContent=="X"&&test[7].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[2].textContent=="X"&&test[5].textContent=="X"&&test[8].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[0].textContent=="X"&&test[4].textContent=="X"&&test[8].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[2].textContent=="X"&&test[4].textContent=="X"&&test[6].textContent=="X"){
        alert("Game finished. X player won.");
    }
    else if(test[0].textContent=="O"&&test[1].textContent=="O"&&test[2].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[3].textContent=="O"&&test[4].textContent=="O"&&test[5].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[6].textContent=="O"&&test[7].textContent=="O"&&test[8].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[0].textContent=="O"&&test[3].textContent=="O"&&test[6].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[1].textContent=="O"&&test[4].textContent=="O"&&test[7].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[2].textContent=="O"&&test[5].textContent=="O"&&test[8].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[0].textContent=="O"&&test[4].textContent=="O"&&test[8].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(test[2].textContent=="O"&&test[4].textContent=="O"&&test[6].textContent=="O"){
        alert("Game finished. O player won.");
    }
    else if(counter==9){
        alert("There is no winner");
    }
}
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('mousedown',markCell);
    test[i].addEventListener('mouseup',checkGameProgress);
}