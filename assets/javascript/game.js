    // Creates an array that lists out all of the options (the alphabet).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    // Creating variables to hold the number of wins, losses, and guesses. They start at 0.
    var wins = 0;
    var losses = 0;
    var numGuesses = 9;
    var guessGuesses = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
    var wordloseText = document.getElementById("wordlose-text");
    var wordwinText = document.getElementById("wordwin-text");

    function init() {
      wordwinText.textContent = ''
      wordloseText.textContent = ''
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      init()

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];  
      
      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/guess), and increments the appropriate number
      if (options.indexOf(userGuess) > -1) {


        if (userGuess === computerGuess) {
          wins++;
          numGuesses = 9;
          guessGuesses = [];
          // alert("You win!");
          wordwinText.textContent = "You Win!";
        } 
        
        if (userGuess !== computerGuess) {
          numGuesses --;
          guessGuesses.push(userGuess);

        }

        if (numGuesses === 0) { 
          numGuesses = 9;
          losses++;
          guessGuesses = [];
          // alert("You Lose!");
          wordloseText.textContent = "You Lose!";
        }




        // Display the user and computer guesses, and wins/losses/guess.
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + numGuesses;
        userChoiceText.textContent = "Your Guesses so far: " + guessGuesses;

      }
    };