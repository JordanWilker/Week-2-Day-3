let playerItem = "Nothing"
let cpuItem = "Nothing"
let result = "haven't started"
var playerWins = 0;
var cpuWins = 0;


function announce(){
    let winner = document.getElementById("who-won")
    winner.innerText = `You chose ${playerItem}, the CPU chose ${cpuItem}, you ${result}`
    let playWins = document.getElementById("player-wins")
    playWins.innerText = `You have ${playerWins} wins`;
    let computerWins = document.getElementById("computer-wins")
    computerWins.innerText = `The CPU has ${cpuWins} wins`
}

function ifRock(){
    
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Rock"
        cpuItem = "Paper"
        result = "lose"
        cpuWins = cpuWins +1
        console.log("You chose Rock, the CPU chose Paper, you lose");
    }else if(RPS==1){
        playerItem = "Rock"
        cpuItem = "Rock"
        result = "tie"
        console.log("You chose Rock, the CPU chose Rock, you tie");
    }else {
        playerItem = "Rock"
        cpuItem = "Scissors"
        result = "win"
        playerWins = playerWins + 1
        console.log("You chose Rock, the CPU chose Scissors, you win");}
    announce()
    }
function ifPaper(){
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Paper"
        cpuItem = "Scissors"
        result = "lose"
        cpuWins = cpuWins +1
        console.log("You chose Paper, the CPU chose Scissors, you lose");
    }else if(RPS==1){
        playerItem = "Paper"
        cpuItem = "Paper"
        result = "tie"
        console.log("You chose Paper, the CPU chose Paper, you tie");
    }else {
        playerItem = "Paper"
        cpuItem = "Rock"
        result = "win"
        playerWins = playerWins + 1
        console.log("You chose Paper, the CPU chose Rock, you win");}
    announce()
    }
function ifScissors(){
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Scissors"
        cpuItem = "Rock"
        result = "lose"
        cpuWins = cpuWins +1
        console.log("You chose Scissors, the CPU chose Rock, you lose");
    }else if(RPS==1){
        playerItem = "Scissors"
        cpuItem = "Scissors"
        result = "tie"
        console.log("You chose Scissors, the CPU chose Scissors, you tie");
    }else {
        playerItem = "Scissors"
        cpuItem = "Paper"
        result = "win"
        playerWins = playerWins + 1
        console.log("You chose Scissors, the CPU chose Paper, you win");}
    announce()
    }

announce()