let userScore = 0;
let compScore = 0;
let display = document.querySelector("#msg");
let usrscore = document.querySelector("#userScore");
let comScore = document.querySelector("#compScore");
let drawMessage = "🤝 It is a draw 🤝";
 const choices = document.querySelectorAll(".choice");


 const gameChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let randomVal = Math.floor(Math.random() * 3);
    return options[randomVal];
 }

 drawGame = ()=>{
    display.innerText = drawMessage;
    display.style.backgroundColor = "#081b31";
 }

 showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
    display.innerText = `🥳 You win!  ${userChoice} beats ${compChoice} 🥳`;
    display.style.backgroundColor = "green";
    userScore = userScore+1;
    usrscore.innerText = userScore;
 }else{
     display.innerText = `😔 You loose. ${compChoice} beats ${userChoice} 😔`;
     display.style.backgroundColor = "red";
     compScore = compScore+1;
     comScore.innerText =  compScore;
 }
}

 const playGame = (userChoice)=>{
    const compChoice = gameChoice();
    console.log(userChoice);
    console.log(compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        userWin = true;
        if(userChoice === "rock" ){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
 }

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
 });



