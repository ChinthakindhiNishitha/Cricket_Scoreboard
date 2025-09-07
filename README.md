# Cricket Scoreboard Web Application

A web-based cricket scoreboard application developed for the Enterprise Application Development course at Chaitanya Bharathi Institute of Technology.

## Features

- Real-time cricket match scoring simulation
- Team score display in runs/wickets format
- Individual player scores for Rahul and Rohit
- Current over display in overs.balls format
- Buttons for all cricket events (runs, wickets, extras)
- Striker switching functionality
- Reset option to start a new game
#  Cricket Scoreboard Web Application

## Overview
This is a responsive **Cricket Scoreboard** web application built with plain **HTML, CSS, and JavaScript** for the **Enterprise Application Development** assignment.  

It simulates scoring for two players — **Rahul** and **Rohit** — and supports runs, extras, wickets, overs counting, striker switching, free hits, and reset functionality.

---

## Files
- `index.html` — UI structure  
- `styles.css` — Styling & responsive layout  
- `script.js` — All scoring logic and interactions  
- `README.md` — This file  

---

## How to Run
1. Place all files in a single folder.  
2. Open `index.html` in a modern browser, or run with **VS Code Live Server**.  
3. Use the buttons to update score.  
4. Use **Reset** to start fresh.  

---

## Key Implementation Notes
- **Runs (1,2,3,4,6):** Add to team and striker; valid deliveries increment ball count.  
- **Odd runs (1 or 3):** Automatically switch striker.  
- **Wide:** +1 to team, no ball increment.  
- **No Ball:** +1 to team and striker, no ball increment.  
- **Bye / Leg Bye:** +1 to team, counts as valid delivery.  
- **Free Hit:** +1 to team, flags the next delivery as a free hit (no wickets, and no ball increment for that delivery).  
- **Wicket / LBW:** Increments wicket (max 10), marks striker out, sets Rahul as new striker (ignored during a free hit).  
- **Overs:** After 6 valid balls, over count increments and ball count resets.  
- **Reset:** Resets everything to initial state (Rahul as initial striker).  

---

## Assumptions & Clarifications
- After a **wicket**, Rahul is always set as the striker (simulates new batsman).  
- **Free Hit**: Triggering it adds +1 run immediately and ensures the next valid ball does not allow wickets or ball count increment.  
- No external libraries or frameworks were used.  

---

## Author
Prepared as a complete solution for the assignment.  
Use this project to learn and adapt — not to bypass academic integrity checks.  

