// Problem 4 - Longest Word
// O(n) 

const arrayOfWords = ["hi", "stand", "goal", "coding", "incomprehensibilities", "enormous"]


function find_longest_word(arr) {
    let longestWord = ""
    arr.forEach(word => {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord
}

console.log(find_longest_word(arrayOfWords))

// Probelm 3 panagram
// O(n^2) I think

const sampleSentence1 = "The quick brown fox jumps over the lazy dog."
const sampleSentence2 = "Sphinx of black quartz, judge my vow"
const sampleSentence3 = "Help me God not sure if I'm doing this right"

function isPangram(sentence) {
    let newSentence = sentence.toLowerCase().replace(/[^a-z]/g,'')
    let alphabetCount = 0
    let incrementor = 0
    for(let i = 97; i <= 122; i++){
        for(let j=0; j <newSentence.length; j++){
            if(newSentence[j].charCodeAt() === i){
                incrementor = 1
            }
        }
        if(incrementor) {
            alphabetCount++
            incrementor = 0 
        }
    }
    if(alphabetCount === 26) {
        return true
    } else {
        return false
    }
}


console.log(isPangram(sampleSentence1))
console.log(isPangram(sampleSentence2))
console.log(isPangram(sampleSentence3))