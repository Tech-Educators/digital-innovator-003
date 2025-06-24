// we want a function which capitalises a word
function capitaliseWord(word){
    console.log("hello world!")
    console.log(word)

    const firstLetter = word.charAt(0)
    console.log("character at position 0 is", firstLetter)

    const remainingLetters = word.substring(1)
    console.log("remaining letters are", remainingLetters)

    const firstLetterUppercase = firstLetter.toUpperCase()
    console.log("uppercased letter is", firstLetterUppercase)

    // console.log("Whole word is", firstLetterUppercase + remainingLetters)
    console.log("--------------")
    return firstLetterUppercase + remainingLetters
}

// We will see a result in our console, because we have told the code to show us something:
console.log ( capitaliseWord("mousetrap") )
capitaliseWord("building")

// The next log won't run because 'remainingLetters' is locally scoped to the function
// console.log("reamining letters on line 23:",remainingLetters)

