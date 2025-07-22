🇪🇸 This README is only available in English to ensure technical clarity.

🇫🇷 Ce README est disponible uniquement en anglais pour garantir une meilleure lisibilité technique.

![Status](https://img.shields.io/badge/status-live-brightgreen)

Grimm Gate – 2D Platformer Game (Vanilla JS + Canvas API)

Inspired by Hollow Knight. The player controls a character that evolves by defeating enemies, unlocking new abilities while navigating a dynamic and increasingly challenging environment.

---

## 🎮 Controls

| Key             | Action              |
|----------------|---------------------|
| `→` Arrow Right | Move right          |
| `↑ / ↓` Arrows  | Fly up / down       |
| `Spacebar`      | Jump                |
| `Ctrl`          | Shoot projectile    |

> Controls are optimized for keyboard input.

---

## 🚀 Tech Stack

| Layer                | Tools                                  |
| -------------------- | ------------------------------------------------- |
| **Rendering**        | HTML5 Canvas API                                  |
| **Language**         | JavaScript (ES6+)                                 |
| **Styling**          | CSS                                               |
| **Structure**        | OOP with JavaScript Classes                       |
| **Assets**           | Spritesheets, SVGs, PNGs                          |

---

## ✨ Main Features

- **Smooth controls** – Run, jump, fly, shoot
- **Sprite-based animations** – For movement, attack, and flight
- **Collision detection** – Between player, enemies, bullets and environment
- **Evolution system** – Player improves by defeating enemies
- **Modular architecture** – Built with reusable JS classes (Player, Enemy, Item, Munition, etc.)
  
---

## 📁 Project Structure
```
/src
 ├── images/            # Game assets: sprites, backgrounds...
 ├── music/             # Sound and music files
 ├── background.js      # Side-scrolling background image logic
 ├── bullet.js          # Base bullet class (player projectile)
 ├── constants.js       # Global constants and config
 ├── enemy.js           # Enemy logic and behaviors
 ├── enemyBullet.js     # Extends Bullet – enemy projectiles
 ├── game.js            # Game core logic, loop, and state
 ├── item.js            # Bonus items (power-ups, etc.)
 ├── lifeBar.js         # Health bar (UI elements)
 ├── main.js            # Entry point – canvas init and game start
 ├── munition.js        # Ammo or special shots system
 └── player.js          # Main character movement, input, evolution

index.html
style.css

```
---

## 🧠 What I Learned

- How to build a complete 2D game using the Canvas API
- Using OOP in JavaScript (classes, inheritance) to structure game logic
- Sprite animation syncing with player states (run, jump, attack, fly)
- Implementing a basic game engine loop and collision detection
  
---

Built with 💙 by [Aurélie](https://aurelie-nogueira.vercel.app/)
👉 [LinkedIn](https://linkedin.com/in/aurelie-nogueira) • [GitHub](https://github.com/aurelienog)
