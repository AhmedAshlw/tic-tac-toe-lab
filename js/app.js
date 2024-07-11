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
let turn = 'X';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/
const boardEl = document.querySelector('.board');
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#statusText');

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    squareEls.forEach((square, index) => {
        square.addEventListener('click', () => handleClick(index));
    });
    updateMessage();
};

const updateBoard = (index) => {
    board[index] = turn;
    squareEls[index].textContent = turn;
};

const updateMessage = () => {
    checkForWinner();
    if (!winner && !tie) {
        messageEl.textContent = `${turn}'s turn`;
    }
};

const handleClick = (index) => {
    if (board[index] === '') {
        placePiece(index);
        updateMessage();
    }
};

const placePiece = (index) => {
    updateBoard(index);
    switchPlayerTurn();
};

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
    }
};

const switchPlayerTurn = () => {
    turn = turn === "X" ? "O" : "X";
};

init();