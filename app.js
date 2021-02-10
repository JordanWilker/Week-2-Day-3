let playerItem = "Nothing"
let cpuItem = "Nothing"
let result = "haven't started"


function announce(){
    let winner = document.getElementById("who-won")
    winner.innerText = `You chose ${playerItem}, the CPU chose ${cpuItem}, you ${result}`
}

function ifRock(){
    
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Rock"
        cpuItem = "Paper"
        result = "lose"
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
        console.log("You chose Rock, the CPU chose Scissors, you win");}
    announce()
    }
function ifPaper(){
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Paper"
        cpuItem = "Scissors"
        result = "lose"
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
        console.log("You chose Paper, the CPU chose Rock, you win");}
    announce()
    }
function ifScissors(){
    let RPS = Math.floor(Math.random()*3)
    if(RPS==0){
        playerItem = "Scissors"
        cpuItem = "Rock"
        result = "lose"
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
        console.log("You chose Scissors, the CPU chose Paper, you win");}
    announce()
    }

announce()