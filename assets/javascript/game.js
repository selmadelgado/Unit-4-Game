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
     
               var images = [
                  'assets/images/ice-cubes-UT-orange.png ',
                    'assets/images/ice-cubes-purple.png ',
                  'assets/images/ice-cubes-hot-pink.png ',
                      'assets/images/ice-cubes-blue.png ', ];
          
     
                    // Create Random Result
               random_result = Math.floor(Math.random() * 120 - 19 + 1 )  + 19 ;  // return number between 19 and 120 - hoisting
               console.log("The Random Number is: " + random_result); // Check via the console

                    // display Random Result in the DOM
                    $("#result").html('MAGIC NUMBER:    ' + random_result ); 



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
                    
                                   crystal.css({
                                      "background-image":"url('" + images[i] + "')",
				                     "background-size":"cover"
                                     //   "background": "red"
                                   });

                              //crystal.html(random);  // for testing purposes display random value in box  HIDEME!!

                        $(".crystals").append(crystal); // pipe divs into container
                       // console.log( "Hello, Leo!");       
               }
        $("#previous_score").html("CURRENT GAME SCORE :    " +  previous_score);   //Add previous score to DOM
}

resetAndStartGame(); // Invoke function when the page loads


// EVENT DELEGATION
//When the page loads  - resetAndStartGameFunction is invoked,  crystals is set to empty at Line 23 and a new element is created in the DOM
//Listen to the DOM,  after the click button, pass the incoming element or element that was there.
$(document).on('click', ".crystal", function () {
     
     
// Update DOM when a crystal is clicked and add the specified value to  user's score
//  Value for the button  we clicked on - aka 'this'.  Add 'data-random to pipe in data from -data-random on line 24.  Wrap in parseInt to convert string into number.
                    var num = parseInt($(this).attr('data-random'));  
                    
                    previous_score += num;
     
                     $("#previous_score").html("CURRENT GAME SCORE:    " +  previous_score);   //Add previous score to DOM
                   
     
                         // End game conditions 
                         if (previous_score > random_result ) {
                              losses ++ ; //increment loses
                                console.log("Sorry, you lost!!");
                             
                               $("#losses").html("LOSSES: " + losses); //Display losses on the DOM
                              previous_score = 0;   //reset score to zero
                              resetAndStartGame();  //run function again
                            }
     
                         else if (previous_score  ===  random_result ) {
                              wins ++ ;  //increment wins
                               console.log("Awesome, You Win!!");
                              
                              $("#wins").html("WINS: " + wins); // Display wins on the DOM
                              previous_score = 0;  // reset score to zero
                              resetAndStartGame();  // run function again
                         }
     
     
          //Run tests:  // console log the value of the one we clicked on - aka 'this'. 
            console.log("The Crystal Value is: " + ($(this).attr('data-random'))); 
            console.log("The Running Total is: " + previous_score);
});

















