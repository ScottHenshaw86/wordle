// Will retrieve a random word from the wordsList array
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomNum];
}

var secretWord = getRandomWord();
// console.log(secretWord);

var round = 0;

document.addEventListener("keydown", function(event) {
    // console.log(event);
    if (event.key == "Enter") {
        checkWord();
        round++;
    }
});

function checkWord() {
    var correct = 0;
    for (var i = 1; i <= 5; i++) {
        // console.log(i);
        var cell = document.getElementById("cell" + (round * 5 + i));
        // console.log(cell);
        var letter = cell.value.toLowerCase();
        // console.log(letter);

        // aloof
        if (letter == secretWord[i-1]) {
            cell.style.backgroundColor = "green";
            correct++;
        } else if (secretWord.includes(letter)) {
            cell.style.backgroundColor = "yellow";
        } else {
            cell.style.backgroundColor = "gray";
        }

    }
    if (correct == 5) {
        alert("YOU WIN! Congratulations");
    } else if (round == 5){
        alert("Sorry! You lose!");
        alert("The secret word was: " + secretWord);
    }
}