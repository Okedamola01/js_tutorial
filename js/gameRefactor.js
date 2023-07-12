const playGame = confirm("Would you like to play ROCK PAPER SCISSORS while you wait?");
if (playGame)
{
    while (playGame)
    {
        const playerChoice = prompt("Enter rock paper scissors");
        if (playerChoice || playerChoice === "")
        {
            const playerOne = playerChoice.toLowerCase().trim();
            if  (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors" )
            {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result =
                 playerOne === computer? `You(${playerOne}) - Computer(${computer}) = Tie game!`
                :playerOne === "rock" && computer === "paper"?  `You(${playerOne}) - Computer(${computer}) = Computer wins!`
                :playerOne === "paper" && computer === "scissors"?  `You(${playerOne}) - Computer(${computer}) = Computer wins!`
                :playerOne === "scissors" && computer === "rock"?  `You(${playerOne}) - Computer(${computer}) = Computer wins!`
                :`You(${playerOne}) - Computer(${computer}) = You win!`
                alert(result);

                const playAgain = confirm("Play again?");
                if (playAgain)
                {
                    continue;
                }
                else
                {
                    alert("Thanks for playing.")
                    break;
                }
            }
            else
            {
                alert("You didn't enter rock paper scissors.");
                continue;
            }
        }
        else
        {
            alert("I guess you changed your mind, maybe next time.");
            break;
        }
    }
}
else
{
    alert("Okay, maybe next time.");
}