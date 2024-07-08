/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
let board = ["", "", "", "", "", "", "", "", ""];
let turn = ''
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
const broad = document.querySelectorAll('.board')
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#statusText');

/*-------------------------------- Functions --------------------------------*/

const init = (event) => {
    squareEls.forEach((element) => {
        element.addEventListener('click', handleClick);
    });
    messageEl.textContent = `${turn}'s turn`;
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    render()
}
const render = () => {
   
}
const updateBoard = (squareEls, index) => {
    board[index] = turn;
    squareEls.textContent = turn;
}
const updateMessage = () => {
    updateBoard(this, updateMessage);
    checkForWinner();
}
const handleClick = (event) => {
    placePiece()
    checkForWinner()
}
const placePiece = (index) => {
    if (board[index] === "") {
        board[index] = turn;
        updateBoard(squareEls[index], index);
        checkForWinner();
        switchPlayerTurn();
      }
}
const checkForWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          winner = board[a];
          messageEl.textContent = `${winner} wins!`;
          return;
        }
      }
    
      if (!board.includes("")) {
        tie = true;
        messageEl.textContent = "It's a tie!";
      } else {
        switchPlayerTurn();
      }
}
const checkForTie = () => {
//didn't work with
}
const switchPlayerTurn = () => {
    turn = turn === "X" ? "O" : "X";
    messageEl.textContent = `${turn}'s turn`;
}

render()

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((element) => {
    element.addEventListener('click', handleClick);
});

messageEl.addEventListener('click', handleClick);

