# 🎮 Phaser Game with Express (Linux Setup)

This project sets up a basic 2D Phaser 3 game served using an Express server. The player can move in 8 directions using the `W`, `A`, `S`, `D` keys.

---

## 📦 What We Did

- Initialized a Node.js project using `npm init -y`
- Installed `express` to serve static files
- Created a `server.js` file to serve content from the `public/` folder
- Created a `public/` directory containing:
  - `index.html` which loads Phaser via CDN and includes the game script
  - `main.js` where the Phaser game logic is written
- Used the Phaser 3 framework to create a simple scene with a player sprite
- Enabled 8-directional movement (up, down, left, right, and diagonals) using `WASD` keys

---

## ▶️ How to Run

1. Open terminal and navigate to the project folder
2. Run `npm install` to install dependencies
3. Start the server with `node server.js`
4. Open your browser and go to `http://localhost:3000`

---

## 🕹 Controls

- W = Move Up  
- A = Move Left  
- S = Move Down  
- D = Move Right  
- Diagonal movement works with key combinations (e.g., W + D for top-right)

---