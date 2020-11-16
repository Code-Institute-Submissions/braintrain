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

function buttonClickedEvent(btnFunction, orderNumber) {
    if (playerTurn) { // Player can click if
        playerOrder.push(orderNumber); // Clicking green will push 1 onto playerOrder array
        check(); // Check to see if player was correct
        btnFunction(); // Then run appropriate function
        if (!win) { // If player has not won yet, the colour will be cleared after set amount of time
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
}