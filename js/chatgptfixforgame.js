// Rock Paper Scissors game refactored with functions

// initGame function asks the user if they'd like to play or not.
const initGame = () => {
    const startGame = confirm("Would you like to play rock paper scissors while you wait?");
    startGame ? playGame() : alert("Okay, maybe next time.");
  };
  
  // playGame function holds the whole game flow step by step.
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
  
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
  
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
  
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
  
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  // getPlayerChoice function prompts the user to enter rock, paper, or scissors
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors");
  };
  
  // formatPlayerChoice function takes the player choice and changes it to lowercase while removing whitespaces
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  // invalidChoice function alerts the player for the invalid choice entered
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors");
  };
  
  // decidedNotToPlay function displays a message if triggered
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind, maybe next time");
  };
  
  // evaluatePlayerChoice function checks to see if the player actually entered the correct keywords
  const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  // getComputerChoice function generates a random number from 0 to 2 to pick computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    const computer = rpsArray[randomNumber];
    return computer;
  };
  
  // determineWinner function compares player and computer choices and determines the winner based on the game rules
  const determineWinner = (player, computer) => {
    if (player === computer) {
      return `You(${player}) - Computer(${computer}) = Tie game!`;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return `You(${player}) - Computer(${computer}) = You win!`;
    } else {
      return `You(${player}) - Computer(${computer}) = Computer wins!`;
    }
  };
  
  // displayResult function displays the game result
  const displayResult = (result) => {
    alert(result);
  };
  
  // askToPlayAgain function asks the user to play again
  const askToPlayAgain = () => {
    return confirm("Would you like to play again?");
  };
  
  // thanksForPlaying function sends an alert
  const thanksForPlaying = () => {
    alert("Thanks for playing");
  };
  
  initGame();
  