// --------------------- Game logic  ---------------------

/*
Randomises the button sequence and sets the interval for the gameturn
*/
function play() {
    win = false;
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    correctSelection = true;
    
    createAdditionalLevelTurns();

    compTurn = true; // Starts with computer sequence

    intervalId = setInterval(gameTurn, 800); //Runs gameturn function after set amount of time
}

function gameTurn() {
    playerTurn = false; // Player cannot interact while on=false

    if (flash == turn) { // If number of flashes=turncounter number then compturn is over
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        playerTurn = true; //Now player can interact with the game
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => { //Performs this once after set amount of time
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200)
    }
}