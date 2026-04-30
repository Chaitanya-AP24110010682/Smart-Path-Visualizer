Here's all the content from the README:

---

# SmartPath Visualizer 🚀

> An interactive, browser-based tool for visualizing classic graph pathfinding algorithms in real-time — no installation required.

🌍 **Live Demo:** [Click here to try it](https://rerishabh.github.io/SmartPath-Visualizer/)

---

## Table of Contents

- Overview
- Features
- Algorithms
- Project Structure
- Getting Started
- How to Use
- Keybindings
- Algorithm Comparison
- Tech Stack
- Author

---

## Overview

SmartPath Visualizer is a modern, interactive web application that brings graph pathfinding algorithms to life on a 15×50 grid. Users can draw walls, place weighted nodes, and watch algorithms explore and backtrack in real-time to find the shortest path between two points. The app starts directly with Dijkstra's algorithm and lets you switch seamlessly between all three algorithms using the top navigation bar.

---

## Features

- **Interactive Grid** — Click and drag to place or remove walls. Weighted nodes can be added to simulate rough terrain.
- **Three Pathfinding Algorithms** — Dijkstra, Bellman-Ford, and Floyd-Warshall, each with its own dedicated page and visualization.
- **Real-Time Animation** — Watch algorithms explore nodes cell by cell and trace back the optimal path with smooth CSS animations.
- **Weighted Nodes** — Add cost-weighted cells (cost +1) that algorithms will route around if a cheaper path exists.
- **Negative Cycle Detection** — Bellman-Ford will alert you if a dead cycle is detected during traversal.
- **One-Click Reset** — The "Clear Board" button reloads the page and resets the grid instantly.
- **Zero Dependencies** — Pure HTML, CSS, and Vanilla JavaScript. No frameworks, no build tools.

---

## Algorithms

### Dijkstra's Algorithm (index.html)
A greedy, single-source shortest path algorithm. It maintains a priority queue of unvisited nodes and always expands the node with the smallest known tentative distance. Ideal for graphs with non-negative edge weights.

- **Type:** Greedy
- **Time Complexity:** O(V²) with a simple array; O(E log V) with a min-heap
- **Negative Weights:** ❌ Not supported

### Bellman-Ford Algorithm (bellman.html)
A dynamic programming algorithm that relaxes all edges repeatedly across multiple passes. More versatile than Dijkstra, it handles negative edge weights and can detect negative cycles. Each full pass is rendered in a distinct color to make the iterative relaxation process visible.

- **Type:** Dynamic Programming
- **Time Complexity:** O(V × E)
- **Negative Weights:** ✅ Supported
- **Negative Cycle Detection:** ✅ Yes (alerts after 750 cycles)

### Floyd-Warshall Algorithm (floyd-warshall.html)
An all-pairs shortest path algorithm that calculates the shortest path between every possible pair of nodes. It works by progressively considering each node as an intermediate "bridge." The DP matrix updates are rendered step-by-step with a small async delay to keep the UI responsive.

- **Type:** Dynamic Programming
- **Time Complexity:** O(V³)
- **Negative Weights:** ✅ Supported

---

## Project Structure

```
SmartPath-Visualizer/
│
├── Algorithms/
│   ├── dijkstra.js          # Dijkstra's algorithm logic & animation
│   ├── bellman-ford.js      # Bellman-Ford algorithm logic & animation
│   └── floyd-warshall.js    # Floyd-Warshall algorithm logic & animation
│
├── tables/
│   ├── dijkstraTable.js     # Grid setup & event handling for Dijkstra
│   ├── bellmanTable.js      # Grid setup & event handling for Bellman-Ford
│   └── floydTable.js        # Grid setup & event handling for Floyd-Warshall
│
├── imgs/
│   ├── barrier.png          # Icon for wall/barrier nodes
│   └── weight.png           # Icon for weighted nodes
│
├── index.html               # Dijkstra's algorithm page (default entry point)
├── bellman.html             # Bellman-Ford algorithm page
├── floyd-warshall.html      # Floyd-Warshall algorithm page
├── table.css                # All styles, animations, and layout
└── README.md
```

---

## Getting Started

### Prerequisites
All you need is a modern web browser (Chrome, Firefox, Edge, Safari). No installs required.

### Running Locally

1. Clone the repository:
```
git clone https://github.com/rerishabh/SmartPath-Visualizer.git
```

2. Navigate into the project folder:
```
cd SmartPath-Visualizer
```

3. Open in browser — simply open index.html directly, or serve with a local server:
```
# Using Node.js
npx serve .

# Using Python 3
python -m http.server 8000
```
Then visit http://localhost:8000

---

## How to Use

1. **Draw Walls** — Left-click and drag on the grid to place wall cells. The algorithm cannot pass through walls.
2. **Place Weights** — Hold the W key and drag to place weighted nodes (each costs +1 to traverse). Press X to return to wall mode.
3. **Run** — Click the "Run Algorithm" button to start the visualization.
4. **Switch Algorithms** — Use the navigation bar at the top to switch between Dijkstra, Bellman-Ford, and Floyd-Warshall.
5. **Reset** — Click "Clear Board" to wipe the grid and start fresh.

💡 The start node is fixed at the top-left corner and the end node at the bottom-right corner of the grid.

---

## Keybindings

| Key / Action | Behavior |
|---|---|
| Left Click + Drag | Place or remove wall cells |
| W (Hold) + Drag | Place weighted nodes (cost +1) |
| X | Exit weight mode, return to wall mode |
| Clear Board button | Reset the entire grid |

---

## Algorithm Comparison

| Algorithm | Strategy | Time Complexity | Handles Negative Weights | All-Pairs |
|---|---|---|---|---|
| Dijkstra | Greedy | O(V²) / O(E log V) | ❌ No | ❌ No |
| Bellman-Ford | Dynamic Programming | O(V × E) | ✅ Yes | ❌ No |
| Floyd-Warshall | Dynamic Programming | O(V³) | ✅ Yes | ✅ Yes |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Logic | Vanilla JavaScript (ES6+) |
| Styling & Animations | CSS3 (custom keyframe animations) |
| Assets | Custom PNG icons |
| Hosting | GitHub Pages |

No external libraries, frameworks, or build tools are used.

---

## Author

Developed with ❤️ by **Rishabh**

- GitHub: @rerishabh
- Live Demo: https://rerishabh.github.io/SmartPath-Visualizer/