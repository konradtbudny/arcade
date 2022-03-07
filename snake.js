let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    nextDirection: [1, 0]
  }
  let gameState = {
    apple: [11, 8],
    snake: snake // from above
  }
  let board=document.querySelector('.board');
  let squares=[];

  function createBoard(){

      for(let i=0;i<12;i++){
          let squaresrow=[];
          for(let j=0;j<10;j++){
              let div=document.createElement("div");
              div.classList.add('apple')
              squaresrow.push(div);
          }
          squares.push(squaresrow)
      }
      //squares[gameState.apple[0]][gameState.apple[1]].style.backgroundColor="red";
      for(let i=0;i<squares.length;i++){
          for (let j = 0; j < squares[i].length; j++) {
              board.appendChild(squares[i][j]);
              console.log(typeof(squares))
          }
      }
      let div=document.createElement("div");
      div.classList.add("apple");
      board.appendChild(div);
    }

  createBoard();