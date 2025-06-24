function capitaliseSentence(sentence){
    console.log(sentence)
    // I need to isolate each individual word, 
    // // and I need to isolate each starting letter of each word
    // and I need to capitalise each starting letter
    console.log(sentence.charAt(0).toUpperCase() + sentence.substring(1))
    const words = sentence.split(' ')
    console.log(words)
}

capitaliseSentence("hello digital innovators three. hope you're having a great day.")