/*
BASICS FOR THE GAME:
The computer generates a random number between 19 and 120
Each gem button is assigned a random number between 1 and 12
User clicks on each gem button
Each button when clicked adds its value to the score
If the score matches the random number exactly, user wins: add a win, display message, generate new random number
If the score goes over the random number, user looses: add a loss, display message, generate new random number
Display all game stats to the user
Reset button resets all game stats
*/


//  Initialize variables
var random_result;
var previous_score = 0;
var wins = 0;
var losses = 0;


var resetAndStartGame = function() {
     
          $(".crystals").empty(); //clear crystal values when the game starts
          
     
                    // Create Random Result
               random_result = Math.floor(Math.random() * 120 - 19 + 1 )  + 19 ;  // return number between 19 and 120 - hoisting
               console.log("The Random Number is: " + random_result); // Check via the console

                    // display Random Result in the DOM
                    $("#result").html('Lucky Number:    ' + random_result ); 



               // Create HTML elements // Loop 4 *, once for every crystal
               for (var i = 0;  i < 4;  i++ ) {

                        var random = Math.floor(Math.random() * 12 ) + 1 ;  // create num between 1-12 //  add  +1 so random num starts from 1 and not zero. 
                        console.log(random);
                    
                         var crystal = $("<div>"); // create div each time loop runs

                                 // pipe random numbers into divs
                                 crystal.attr({
                                          "class": 'crystal',
                                          "data-random": random
                                 });

                              crystal.html(random);  // for testing purposes display random value in box  HIDEME!!

                        $(".crystals").append(crystal); // pipe divs into container
                       // console.log( "Hello, Leo!");       
               }
}

resetAndStartGame(); // Invoke function when the page loads


// Update DOM when a crystal is clicked and add the specified value to  user's score
//$(".crystal").on('click', function() {

// Event Delegation
$(document).on('click', ".crystal", function () {
     
     
     
     
     
     
     
//  Value for the button  we clicked on - aka 'this'.  Add 'data-random to pipe in data from -data-random on line 24.  Wrap in parseInt to convert string into number.
                    var num = parseInt($(this).attr('data-random'));  
                    
                    previous_score += num;
     
                         // End game conditions 
                         if (previous_score > random_result ) {
                              losses ++ ; //increment loses
                                console.log("Sorry, you lost!!");
                             
                               $("#losses").html(losses); //Display losses on the DOM
                              previous_score = 0;   //reset score to zero
                              resetAndStartGame();  //run function again
                            }
     
                         else if (previous_score  ===  random_result ) {
                              wins ++ ;  //increment wins
                               console.log("Awesome, You Win!!");
                              
                              $("#wins").html(wins); // Display wins on the DOM
                              previous_score = 0;  // reset score to zero
                              resetAndStartGame();  // run function again
                         }
     
     
          //Run tests:  // console log the value of the one we clicked on - aka 'this'. 
            console.log("The Crystal Value is: " + ($(this).attr('data-random'))); 
            console.log("The Running Total is: " + previous_score);
});

















