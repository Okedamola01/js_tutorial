//My first interactive game with javascript(Rock Paper Scissors game)
const play = confirm("Play rock paper scissors while you wait?")
if (play)
{
    //player inputs a choice
    let playerchoice = prompt("Pick rock, paper or scissors");
    if (playerchoice)
    {
        //line 10 trims the player input for whitespaces and changes it to lowercase
        let playerone = playerchoice.trim().toLowerCase();
        if (playerone === "rock" || playerone === "paper" || playerone === "scissors")
        {
            //line 14 generates a random number from 1-3
            let computerchoice = Math.floor(Math.random() * 3 + 1);
            //line 16 to 18uses the ternary operator to equate the random numbers to rps for computer 
            let computer = computerchoice === 1?"rock"
            :computerchoice === 2?"paper"
            :"scissors"

            //line 21 to 27 states the rules of the rps game and displays it.
            let result =
            playerone === computer? `${playerone} vs ${computer} Tie game!`
            : playerone === "rock" && computer === "paper"? `${playerone} vs ${computer} computer wins!`
            : playerone === "paper" && computer === "scissors"? `${playerone} vs ${computer} computer wins!`
            : playerone === "scissors" && computer === "rock"?  `${playerone} vs ${computer} computer wins!`
            : `${playerone} vs ${computer} playerone wins!`
            alert(result);
            
            //line 30 asks user to play again
            let playagain = confirm("Want to play again?");
            playagain? location.reload()
            : alert("Okay, thanks for playing");
        }
        else
        {
            alert("You didn't enter rock paper or scissors");
        }
    }
    else
    {
        alert("I guess you changed your mind.");
    }
}
else
{
    alert("Ok, maybe next time.")
}