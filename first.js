let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compchoicepara = document.querySelector("#comp-score");


const showinner =(userwin,userChoice,compchoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText =`you win your ${userChoice} beats ${compchoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compchoicepara.innerText = compScore;
       
        msg.innerText=`you lose ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const drawgame =() =>{
  console.log("game was draw");
  msg.innerText ="game was draw !play again ";
  msg.style.backgroundColor = "black";
}

const genCompChoice =() =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}
 
const playgame = (userChoice)=>{
    console.log("user-choice =" ,userChoice);
    const compchoice = genCompChoice();
    console.log("comp choice =",compchoice);

    if(userChoice === compchoice){
       drawgame();
    }
    else{
    let userwin = true;
    if(userChoice ==="rock"){
        //scissors,//paper
        userwin = compchoice ==="paper"? false :true;
    }else  if(userChoice ==="paper"){
        //rock,scissors
        userwin= compchoice ==="scissors"? false:true
    }else{
        //rock,paper
        userwin= compchoice ==="rock"? false:true

    }
showinner(userwin,userChoice,compchoice);
    }

}
; 
choices.forEach((choice) =>{
    const userChoice = choice.getAttribute("id");
  choice.addEventListener("click",() =>{
       console.log("choice was clicked",userChoice);
       playgame(userChoice);
  })

})