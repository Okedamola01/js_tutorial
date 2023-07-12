//Rock Paper Scissors game refactored with functions

//initGame function asks the user if they'd like to play or not.
const initGame = () =>
{
    const startGame = confirm("Would you like to play rock paper scissors while you wait?");
    startGame? playGame() : alert("Okay, maybe next time.")
}

//playGame function holds the whole game flow step by step.
const playGame = () =>
{
    while (true);
    {
        while(true);
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);

        if (playerChoice === "")
        {
            invalidChoice();
            continue;
        }

        if (!playerChoice)
        {
            decidedNotToPlay();
            break;
        }

        const computerChoice = getComputerChoice();
        const result = getComputerChoice(playerChoice, computerChoice);
        displayResult(result);

        if (askToPlayAgain())
        {
            continue;
        }
        else
        {
            thanksForPlaying();
            break;
        }
    }   
};


//getPlayerChoice function prompts user to enter rock paper or scissors
const getPlayerChoice = () =>
{
    return prompt("Please enter rock, paper or scissors");
}

//formatPlayerChoice function takes the player choice and changes it to lowercase while removing whitespaces
const formatPlayerChoice = (playerChoice) =>
{
    if (playerChoice || playerChoice === "")
    {
        return playerChoice.trim().toLowerCase();
    }
    else
    {
        return false;
    }
};

//invalidChoice function alerts the player for the invalid choice entered
const invalidChoice = () =>
{
    alert("You didn't enter rock, paper or scissors");
};


//decidedNotToPlay function displays a message if triggered
const decidedNotToPlay = () =>
{
    alert("I guess you changed your mind, maybe next time");
};

//evaluatePlayerChoice function checks to see if player actually entered the correct keywords
const evaluatePlayerChoice = (playerChoice) =>
{
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors" )
    {
        return playerChoice;
    }
    else
    {
        return false;
    }
};

//computerChoice function generates a random number from 1 to 3 to pick computer choice
const getComputerChoice = () =>
{
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    const computer = rpsArray[randomNumber];
    return computer;
};

//determineWinner function compares player and computer choice and determines winner based on the game rules
const determineWinner = (player, computer) =>
{
    const winner =
    player === computer? `You(${player}) - Computer(${computer}) = Tie game!`
    :player === "rock" && computer === "paper"?  `You(${player}) - Computer(${computer}) = Computer wins!`
    :player === "paper" && computer === "scissors"?  `You(${player}) - Computer(${computer}) = Computer wins!`
    :player === "scissors" && computer === "rock"?  `You(${player}) - Computer(${computer}) = Computer wins!`
    :`You(${player}) - Computer(${computer}) = You win!`
    return winner;
};

//displayResult function displays the game result
const displayResult = (result) =>
{
    alert(result);
};

//askToPlayAgain function asks user to play again
const askToPlayAgain = () =>
{
    return confirm("Would you like to play again?");
};

//thanksForPlaying function sends an alert
const thanksForPlaying = () =>
{
    alert("Thanks for playing");
};

initGame();