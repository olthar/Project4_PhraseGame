/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase){
        this.phrase = [...phrase];
    }
    addPhraseToDisplay(){
        //maps an empty box as line item for each letter and leaves space between words
        const list = this.phrase.map(letter => {
            if(letter == " "){
                return `<li class="space"> </li>`
            }else{                
                phraseLength +=1
                return `<li class="hide letter ${letter}">${letter}</li>`  
             }
        })
        phraseList.innerHTML = list.join("")
        return this.phrase
    }
    checkLetter(letterSelected){
        const letter = letterSelected.textContent;
        //Returns the number of found matched letters
        return this.phrase.reduce((acc, phraseLetter) => (phraseLetter == letter ? 1:0) + acc, 0)
    }
    showMatchedLetter(letter){
        const phraseListItems = [...phraseList.children]     
         phraseListItems.forEach(letterBox => {
            if (letterBox.textContent == letter.textContent){
                letterBox.className = "show"
             }
         })
    }
 }





