# ❌⭕ Tic-Tac-Toe — Two Player Web Game

A modern, responsive, two-player Tic-Tac-Toe game built purely with HTML, CSS, and Vanilla JavaScript.

## ✨ Features

* **Two-Player Mode:** Supports local multiplayer for two players.
* **Custom Player Names:** Allows players to enter their names on the start screen.
* **Intuitive UI:** Clean, dark, and visually appealing interface using CSS gradients and box shadows.
* **Responsive Design:** Optimized layout for seamless play on both desktop and mobile devices.
* **Winning Detection:** Automatically detects horizontal, vertical, and diagonal wins.
* **Tie Game Logic:** Detects and announces a draw when all cells are filled.
* **Game Flow:** Automatic transition from the start screen to the game board.
* **Visual Feedback:** Winning cells are highlighted, and a temporary overlay announces the result before auto-resetting.

## 🚀 Live Demo

You can play the live version of the game here:
[Click Here](https://vinayakgoyal2208.github.io/Tic-Tac-Toe/)

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Structure and layout of the game (start screen, board grid, buttons). |
| **CSS3** | Styling, responsiveness, and aesthetic elements (dark theme, gradients, shadows). |
| **Vanilla JavaScript (ES6)** | Core game logic, state management (`board` array, `current` player), win/tie detection, and DOM manipulation. |

## ⚙️ Installation and Setup

This is a static web application and does not require any build tools or external dependencies.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/vinayakgoyal2208/Tic-Tac-Toe.git](https://github.com/vinayakgoyal2208/Tic-Tac-Toe.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd Tic-Tac-Toe
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser to start playing.

## 🎮 How to Play

1.  **Start Screen:** Enter the names for Player 1 (X) and Player 2 (O). If names are left blank, default names are used.
2.  **Start Game:** Click the **Start Game** button.
3.  **Gameplay:** The current player's turn is indicated at the top. Click any empty cell to place your mark.
4.  **Win/Tie:**
    * If a player gets three marks in a row (horizontal, vertical, or diagonal), the game stops, the winning cells flash, and an overlay announces the winner.
    * If all nine cells are filled without a winner, a "Match Tie!" is announced.
5.  **Restart:** After a brief delay (1.8s), the board automatically resets, and a new game begins.
6.  **Back Home:** Click the back arrow (`⬅`) to return to the player name input screen.

## 📁 Project Structure
```
Tic-Tac-Toe/
├── index.html          \# Main HTML structure and UI layout
├── styles.css          \# All CSS for styling, layout, and responsiveness
├── script.js           \# Core game logic, state management, and event handling
└── README.md           \# Project documentation (this file)
```

## 🎯 Game Logic Highlights

The core game state is managed using the following variables in `script.js`:

* `board`: An array of 9 elements (`Array(9).fill(null)`) that tracks the state of each cell (`null`, `"X"`, or `"O"`).
* `WIN_COMBOS`: A predefined array listing all 8 possible winning index combinations.
* `checkWin()`: Iterates through `WIN_COMBOS`, comparing the values in the `board` array to determine if the current player has won.
* `play(i)`: The main game loop function, which updates the `board`, increments `moveCount`, checks for a win/tie, and toggles the `current` player.

## 🔮 Future Enhancements (To-Do)

* **Scoreboard:** Add a persistent scoreboard to track wins between Player 1 and Player 2.
* **Single-Player AI:** Implement a simple Minimax algorithm to allow the user to play against the computer.
* **Player Selection:** Allow the starting player (X or O) to be chosen randomly or by user input.
* **Customization:** Add options to choose different themes or colors for X and O.

<img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/5096d30e-4e4e-473a-8534-32f08195c2bc" />



