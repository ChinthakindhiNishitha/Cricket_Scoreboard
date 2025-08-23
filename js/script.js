// Game state
const gameState = {
    teamScore: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    rahulScore: 0,
    rohitScore: 0,
    striker: 'rahul',
    freeHit: false,
    gameOver: false
};

// DOM Elements
const teamScoreElement = document.getElementById('teamScore');
const oversElement = document.getElementById('overs');
const rahulScoreElement = document.getElementById('rahulScore');
const rohitScoreElement = document.getElementById('rohitScore');
const rahulElement = document.getElementById('rahul');
const rohitElement = document.getElementById('rohit');
const scoreUpdateElement = document.getElementById('scoreUpdate');
const statusMessageElement = document.getElementById('statusMessage');

// Update the display
function updateDisplay() {
    teamScoreElement.textContent = `${gameState.teamScore}/${gameState.wickets}`;
    oversElement.textContent = `${gameState.overs}.${gameState.balls} Overs`;
    
    rahulScoreElement.textContent = `${gameState.rahulScore}${gameState.striker === 'rahul' ? '*' : ''}`;
    rohitScoreElement.textContent = `${gameState.rohitScore}${gameState.striker === 'rohit' ? '*' : ''}`;
    
    // Highlight the active striker
    if (gameState.striker === 'rahul') {
        rahulElement.classList.add('active');
        rohitElement.classList.remove('active');
    } else {
        rohitElement.classList.add('active');
        rahulElement.classList.remove('active');
    }
    
    // Update status message if it's a free hit
    if (gameState.freeHit) {
        statusMessageElement.textContent = "Free Hit in progress! No wickets can be taken.";
    } else if (gameState.gameOver) {
        statusMessageElement.textContent = "Game Over! All wickets have fallen.";
    } else {
        statusMessageElement.textContent = `${gameState.striker === 'rahul' ? 'Rahul' : 'Rohit'} is on strike.`;
    }
}

// Show score update message
function showUpdate(message) {
    scoreUpdateElement.textContent = message;
    scoreUpdateElement.style.display = 'block';
    
    setTimeout(() => {
        scoreUpdateElement.style.display = 'none';
    }, 2000);
}

// Add runs to the score
function addRuns(runs) {
    if (gameState.gameOver) return;
    
    if (gameState.striker === 'rahul') {
        gameState.rahulScore += runs;
    } else {
        gameState.rohitScore += runs;
    }
    
    gameState.teamScore += runs;
    
    showUpdate(`Scored ${runs} run${runs > 1 ? 's' : ''}!`);
    
    // Switch striker for odd runs
    if (runs % 2 !== 0) {
        switchStriker();
    }
    
    // Increment ball for valid delivery
    incrementBall();
    
    updateDisplay();
}

// Add a wicket
function addWicket() {
    if (gameState.gameOver || gameState.freeHit) {
        showUpdate("Cannot take wicket on a Free Hit!");
        return;
    }
    
    gameState.wickets++;
    showUpdate("Wicket! Batsman is out.");
    
    if (gameState.wickets >= 10) {
        gameState.gameOver = true;
        showUpdate("All out! Innings over.");
    }
    
    // Set Rahul as the new striker
    gameState.striker = 'rahul';
    
    // Increment ball for valid delivery
    incrementBall();
    
    updateDisplay();
}

// Add LBW
function addLBW() {
    if (gameState.gameOver || gameState.freeHit) {
        showUpdate("Cannot take wicket on a Free Hit!");
        return;
    }
    
    gameState.wickets++;
    showUpdate("LBW! Batsman is out.");
    
    if (gameState.wickets >= 10) {
        gameState.gameOver = true;
        showUpdate("All out! Innings over.");
    }
    
    // Set Rahul as the new striker
    gameState.striker = 'rahul';
    
    // Increment ball for valid delivery
    incrementBall();
    
    updateDisplay();
}

// Add wide
function addWide() {
    if (gameState.gameOver) return;
    
    gameState.teamScore += 1;
    showUpdate("Wide! 1 run added.");
    
    // Wide doesn't count as a ball, so no increment
    updateDisplay();
}

// Add no ball
function addNoBall() {
    if (gameState.gameOver) return;
    
    gameState.teamScore += 1;
    
    if (gameState.striker === 'rahul') {
        gameState.rahulScore += 1;
    } else {
        gameState.rohitScore += 1;
    }
    
    showUpdate("No Ball! 1 run added.");
    
    // No ball doesn't count as a valid delivery, so no increment
    updateDisplay();
}

// Add free hit
function addFreeHit() {
    if (gameState.gameOver) return;
    
    gameState.teamScore += 1;
    gameState.freeHit = true;
    
    showUpdate("Free Hit! 1 run added. Next ball is a free hit.");
    
    // Free hit doesn't count as a valid delivery, so no increment
    updateDisplay();
}

// Add bye
function addBye() {
    if (gameState.gameOver) return;
    
    gameState.teamScore += 1;
    showUpdate("Bye! 1 run added.");
    
    // Increment ball for valid delivery
    incrementBall();
    
    updateDisplay();
}

// Add leg bye
function addLegBye() {
    if (gameState.gameOver) return;
    
    gameState.teamScore += 1;
    showUpdate("Leg Bye! 1 run added.");
    
    // Increment ball for valid delivery
    incrementBall();
    
    updateDisplay();
}

// Switch striker
function switchStriker() {
    if (gameState.gameOver) return;
    
    gameState.striker = gameState.striker === 'rahul' ? 'rohit' : 'rahul';
    showUpdate("Striker switched!");
    updateDisplay();
}

// Increment ball count
function incrementBall() {
    if (gameState.freeHit) {
        // Reset free hit after the delivery
        gameState.freeHit = false;
    }
    
    gameState.balls++;
    
    if (gameState.balls > 5) {
        gameState.balls = 0;
        gameState.overs++;
        
        // Switch striker at the end of the over
        switchStriker();
    }
}

// Reset scoreboard
function resetScoreboard() {
    gameState.teamScore = 0;
    gameState.wickets = 0;
    gameState.overs = 0;
    gameState.balls = 0;
    gameState.rahulScore = 0;
    gameState.rohitScore = 0;
    gameState.striker = 'rahul';
    gameState.freeHit = false;
    gameState.gameOver = false;
    
    showUpdate("Scoreboard reset!");
    updateDisplay();
}

// Initialize the display
updateDisplay();