 const test=[...document.querySelectorAll('.cell')];
 let counter =0;
console.log(test);
function showAlert(){
    if(counter%2==0&&this.textContent==""){
    this.textContent="X";
    }
    if(counter%2==1&&this.textContent=="")
    {
        this.textContent="O";
    }
    counter++;
}
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener('click',showAlert);
}