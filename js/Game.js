/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(missed, phrases, activePhrase){
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }
    //Hides overlay and sets an active phrase to chosenPhrase
    startGame(){
        startScreen.style.display = "none";
        this.resetGame();
        this.activePhrase = this.getRandomPhrase(this.phrases).toLowerCase();
        chosenPhrase = new Phrase(this.activePhrase);
        chosenPhrase.addPhraseToDisplay()
    }
    //gets a random number depending on how many phrases there are
    getRandomPhrase(phraseList){
        randomNumber = Math.floor(Math.random()*(this.phrases.length));
        // prevents same phrase from appearing twice
        while (usedPhraseNumber.indexOf(randomNumber) !== -1){
            randomNumber = Math.floor(Math.random()*(this.phrases.length));
        }
        usedPhraseNumber.push(randomNumber);
        return phraseList[randomNumber];
    }
    handleInteraction(letterSelected){
        letterSelected.disabled = "True";
        // if letter has not already been selected, adds it to the disabledLetters array
        if(disabledLetters.indexOf(letterSelected) === -1){
            disabledLetters.push(letterSelected);
            //Sends chosen letter to the checkLetter method which returns the number of correct matches
            const foundAmount = chosenPhrase.checkLetter(letterSelected)
            foundLetterCount += foundAmount
            // If the number of letters matched is higher than 0, the letter class is clanged and shoMatchedLetter is called
            if (foundAmount > 0){
                letterSelected.className = "chosen"
                chosenPhrase.showMatchedLetter(letterSelected)
                this.checkForWin()
            } else {
                letterSelected.className = "wrong";
                game.removeLife()
            }
        }
    }
    removeLife(){ 
        this.missed += 1;
        // If there are less than 5 missed guesses, a heart is removed for each wrong guess
        if (this.missed < 5){
            scoreBoard[this.missed-1].firstElementChild.src = "images/lostHeart.png";
        } else {   
            this.gameOver(true)    
        }
    }
    checkForWin(){
        // if the number of letters found match the number of letters
        if (foundLetterCount == phraseLength){
            // execute gameOver with a not lost perameter. 
            this.gameOver(false)
        }
    }
    gameOver(lost){
        startScreen.style.display = "";
        const overlay = gameOverMessage.parentElement;
        //if the lost perameter is true, means lose or is false means win.
        if(lost == true){
            gameOverMessage.textContent = "GAME OVER!\n You are out of lives..."
            overlay.className = "lose"
        } else {
            gameOverMessage.textContent = "CONGRATULATIONS!! You are a winner!"
            overlay.className = "win"
        }
    }
    resetGame(){
        const keysArray = [...keys];
        const lives = [...scoreBoard];
        //Remove display phrase blocks
        while( phraseList.firstElementChild ){
            phraseList.removeChild(phraseList.firstElementChild);
          }
        //Change keys className to "key"
        keysArray.forEach(key => {
            key.className = "key";
            key.disabled = "";
        })
        //resets lives
        lives.forEach(heart => heart.firstElementChild.src = "images/liveHeart.png");
        // takes variables used to track progress and block physical keyboard back to zero/empty. 
        disabledLetters = []
        foundLetterCount = 0
        phraseLength = 0
        this.missed = 0
        // If all 5 phrases have been used, the phrases are then repeated
        if (usedPhraseNumber.length === 5){
            usedPhraseNumber = [];
        }


    }
}




