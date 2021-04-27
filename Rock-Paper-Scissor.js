//Rock Paper Scissors game (with a hack to always win) 

const getUserChoice= userInput =>{
  userInput= userInput.toLowerCase();
  if (userInput==='rock'|| userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
      return userInput;
  }else{
    return (console.log("Invalid input. Please enter rock, paper, or scissors"));
  }
};

const getComputerChoice= () =>{
  const randomNumber=(Math.floor(Math.random()*3));
  switch (randomNumber){
    case 0:
      return ('rock');
      break;
    case 1:
      return ('paper');
      return;
    case 2:
      return ('scissors');
      break;
  }
}

const determineWinner= (userChoice, computerChoice) =>{
      if (userChoice === computerChoice){
        return ("The game was a tie!")
      } else if (userChoice=== 'rock'){
          if(computerChoice==='paper'){
            return("The computer has won!");
          }else return ("The user has won!");
      } else if (userChoice=== 'paper'){
          if(computerChoice==='scissors'){
            return("The computer has won!");
          }else return ("The user has won!");
      } else if (userChoice=== 'scissors'){
          if(computerChoice==='rock'){
              return("The computer has won!");
          }else return ("The user has won!");
      }else {
        return ("The user has won!");
      }
};

function playGame(){
  const userChoice= getUserChoice('rock');
  const computerChoice= getComputerChoice();
  console.log(`The Pasang's choice is ${userChoice}`);
  console.log(`The computer choice is ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice)); 
}

playGame();