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