🇪🇸 This README is only available in English to ensure technical clarity.

🇫🇷 Ce README est disponible uniquement en anglais pour garantir une meilleure lisibilité technique.

# 🎮 Grimm Gate – 2D Platformer Game

**[▶️ PLAY GRIMM GATE ONLINE](https://aurelienog.github.io/Game-canvas/)**

A 2D platformer game built from scratch with **Vanilla JavaScript and the HTML5 Canvas API**.

Inspired by *Hollow Knight*, Grimm Gate combines platforming, combat, projectiles and character progression in a dynamic side-scrolling environment.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-orange)

---

## 🎮 Play

**[▶️ Click here to play Grimm Gate](https://aurelienog.github.io/Game-canvas/)**

No installation required — the game runs directly in your browser.

> 💡 **Keyboard recommended:** the game is designed for desktop keyboard controls.

---

## 🎮 Controls

| Key             | Action           |
| --------------- | ---------------- |
| `→` Arrow Right | Move right       |
| `↑ / ↓` Arrows  | Fly up / down    |
| `Space`         | Jump             |
| `Ctrl`          | Shoot projectile |

> Controls are optimized for keyboard input.

---

## ✨ Main Features

* **Platforming & movement** — Run, jump and fly through the environment
* **Combat system** — Shoot projectiles and fight different enemy types
* **Sprite-based animations** — Movement, attack and flight animations
* **Collision detection** — Player, enemies, bullets and interactive objects
* **Progression system** — Recover health and ammunition while defeating enemies
* **Side-scrolling environment** — Dynamic background movement following the player
* **Game states** — Start screen, gameplay, victory and game-over states
* **Modular architecture** — Game logic organized into reusable JavaScript classes

---

## 🚀 Tech Stack

| Layer            | Technology                 |
| ---------------- | -------------------------- |
| **Rendering**    | HTML5 Canvas API           |
| **Language**     | JavaScript (ES6+)          |
| **Styling**      | CSS                        |
| **Architecture** | Object-Oriented JavaScript |
| **Animations**   | Sprite-based animations    |
| **Audio**        | HTML5 Audio API            |
| **Deployment**   | GitHub Pages               |

---

## 📁 Project Structure

```text
/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    │
    └── src/
        ├── constants.js
        ├── lifeBar.js
        ├── munition.js
        ├── item.js
        ├── bullet.js
        ├── enemyBullet.js
        ├── player.js
        ├── enemy.js
        ├── background.js
        ├── game.js
        ├── main.js
        │
        ├── images/
        │   └── ...
        │
        └── music/
            └── ...
```

### Core JavaScript classes

* `Player` — Player movement, input, combat and progression
* `Enemy` — Enemy behavior and interactions
* `Bullet` — Player projectile logic
* `EnemyBullet` — Enemy projectile behavior
* `Item` — Collectible objects and rewards
* `Munition` — Ammunition management
* `LifeBar` — Player health system
* `Background` — Side-scrolling environment
* `Game` — Main game loop, collisions, spawning and game states

---

## 🧠 What I Learned

Building Grimm Gate allowed me to explore:

* Building a complete 2D game using the **Canvas API**
* Structuring game logic using **JavaScript classes and OOP**
* Creating a continuous **game loop** with `setInterval`
* Implementing **collision detection** between multiple game entities
* Managing player states, health, ammunition and progression
* Synchronizing sprite animations with player actions
* Working with browser-based audio and user input
* Deploying a JavaScript game with **GitHub Pages**

---

## 🌐 Live Demo

### **[🎮 PLAY GRIMM GATE →](https://aurelienog.github.io/Game-canvas/)**

---

## 👩‍💻 Author

Built with 💙 by **[Aurélie Nogueira](https://aurelie-nogueira.vercel.app/)**

[LinkedIn](https://linkedin.com/in/aurelie-nogueira) • [GitHub](https://github.com/aurelienog)

---
