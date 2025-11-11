const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = Array(9).fill(null),
  current = "X",
  moveCount = 0,
  gameActive = true;

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const boardEl = document.getElementById("board");
const turnLabel = document.getElementById("vs-label"); // renamed usage
const overlay = document.getElementById("winner-overlay");

let player1 = "Player 1",
  player2 = "Player 2";

function buildBoard() {
  boardEl.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.i = i;
    cell.onclick = () => play(i);
    boardEl.appendChild(cell);
  }
}

function play(i) {
  if (!gameActive || board[i]) return;

  board[i] = current;
  moveCount++;
  renderBoard();

  const win = checkWin();
  if (win) {
    gameActive = false;
    const winnerName = current === "X" ? player1 : player2;
    highlight(win);
    showResult(`${winnerName} Wins!`);
  } else if (moveCount === 9) {
    gameActive = false;
    showResult("Match Tie!");
  } else {
    current = current === "X" ? "O" : "X";
    updateTurnLabel();
  }
}

function renderBoard() {
  boardEl.querySelectorAll(".cell").forEach((c, i) => {
    c.textContent = board[i] || "";
    c.classList.toggle("disabled", !!board[i] || !gameActive);
  });
}

function checkWin() {
  for (const [a, b, c] of WIN_COMBOS)
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return [a, b, c];
  return null;
}

function highlight(indices) {
  indices.forEach((i) =>
    boardEl.querySelector(`[data-i="${i}"]`).classList.add("win")
  );
}

function reset() {
  board = Array(9).fill(null);
  current = "X";
  moveCount = 0;
  gameActive = true;
  document.querySelectorAll(".cell").forEach((c) => c.classList.remove("win"));
  renderBoard();
  updateTurnLabel();
}

function updateTurnLabel() {
  const name = current === "X" ? player1 : player2;
  turnLabel.textContent = `${name}'s Turn`;
}

function showResult(msg) {
  overlay.textContent = msg;
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
    reset();
  }, 1800);
}

/* === Buttons === */
document.getElementById("start-btn").onclick = () => {
  player1 = document.getElementById("p1").value || "Player 1";
  player2 = document.getElementById("p2").value || "Player 2";
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  buildBoard();
  reset();
};

document.getElementById("back-home").onclick = () => {
  gameScreen.style.display = "none";
  startScreen.style.display = "flex";
  reset();
};
