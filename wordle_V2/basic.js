// Will retrieve a random word from the wordsList array
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomNum];
}
 
var secretWord = getRandomWord();
console.log(secretWord); // TODO: Remove this!

var round = 0;
var isPlaying = true;

document.addEventListener("keydown", function(e) {
    if (!isPlaying) return; // game already finished
    if (e.key == "Enter") {
        // The user pressed the Enter key. Submit the word
        checkWord();
        round++;
    }
});

// Check user's word against the secret word
function checkWord() {
    var right = 0;
    for (var i=1; i<=5; i++) {
        // get an input element from the current round
        var cell = document.getElementById("cell" + (round * 5 + i));
        cell.disabled = true;
        var letter = cell.value.toLowerCase();

        if (secretWord[i-1] == letter) {
            // Letter in word AND correct location!
            cell.classList.add("green");
            right++;
        } else if (secretWord.includes(letter)) {
            // Letter in word, but wrong location
            cell.classList.add("yellow");
        } else {
            // Letter NOT in word
            cell.classList.add("gray");
        }
    }
    if (right == 5) {
        // WIN!
        isPlaying = false;
        showWinMessage();
        document.querySelectorAll("input").forEach(input=>{
            input.disabled = true
        });

    }  else if (round == 5) {
        // LOSE ㅠ_ㅠ
        isPlaying = false;
        alert("Sorry! You lose!");
        alert("The secret word was: " + secretWord);
    }
}

function showWinMessage() {
    document.querySelector(".confetti").style.display = "flex";
    setTimeout(function() {
        document.querySelector("#win-text").style.visibility = "visible";
        document.querySelector("#win-text").style.opacity = "1";
    }, 2000)
}