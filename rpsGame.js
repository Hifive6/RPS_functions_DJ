//This is what I came up with also poking and proding the internet.

hands = ['rock', 'paper', 'scissors'];

var player1 = hands[Math.floor(Math.random()*3)];
console.log("Player 1 chose " + player1);

var player2 = hands[Math.floor(Math.random()*3)];
console.log("Player 2 chose " + player2)

random(player1, player2);

function random(player1, player2) {
    if (player1===player2) {
        console.log("there was a tie")
    } else if (player1 ==="rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
        console.log("Player 1 Won !!!")
    } else {
        console.log("Player 2 Won !!!")
    }
}