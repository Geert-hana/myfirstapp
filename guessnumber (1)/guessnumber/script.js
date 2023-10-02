var guessNumber = document.querySelector(".number");
var guessinput = document.querySelector(".guess");
var scorediv = document.querySelector(".score");
var messagediv = document.querySelector(".message");

var randomNumber;
var score = 0;
var highscore = 0;




function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 20) + 1; //math.random it will generate number between 0 to 1 randomly// 
    console.log(randomNumber);
    guessNumber.textContent = randomNumber;
}
function checkNumber() {
    var gussinput = Number(guessinput.value);
    if (guessinput.value == randomNumber) {
        alert("Correct guess")
        getRandomNumber();
        guessinput.value = "";
        document.body.style.backgroundColor = "green"
        score += 2;
        messagediv.textContent = "Correct Guess"



    } else {
        alert("wrong guess");
        document.body.style.backgroundColor = "red"
        if (score < 0) {
            score -= 1;
        }

        if (guessinput > randomNumber) {
            messagediv.textContent = "Wrong Guess.. Enter Greater number"
        } else {
            messagediv.textContent = "Wrong Guess.. Enter lesser number"
        }


        scorediv.textContent = score;


    }

    getRandomNumber()
};