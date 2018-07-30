/*
BASICS FOR THE GAME:
The computer generates a random number between 19 and 120
Each gem button is assigned a random number as well between 1 and 12
User clicks on each gem button
Each button when clicked adds its value to the score
If the score matches the random number exactly, user wins: add a win, display message, generate new random number
If the score goes over the random number, user looses: add a loss, display message, generate new random number
Display all game stats to the user
Reset button resets all game stats
*/


//  Initialize variables
var random_result;
var losses;
var wins;
var previous_score = 0;



// Create Random Result
random_result = Math.floor(Math.random() * 120 - 19 + 1 )  + 19 ;  // return number between 19 and 120 - hoisting
console.log("The Random Number is: " + random_result); // Check via the console
     
     // display Random Result in the DOM
     $("#result").html('Lucky Number:    ' + random_result ); 



// Create HTML elements
for (var i = 0;  i < 4;  i++ ) {
         
         var random = Math.floor(Math.random() * 12 ) + 1 ;  // return num between 1-12  add the +1 so you start the random number from 1 and not zero. 
     
         console.log(random);
         var crystal = $("<div>"); // loop through 4 times to create 4 divs.
                  
                  // pipe random numbers into divs
                  crystal.attr({
                           "class": 'crystal',
                           "data-random": random
                  });
         
         $(".crystals").append(crystal); // pipe divs into container
         console.log( "Hello, Leo!");       
}




// Update DOM when a crystal is clicked and add the specified value to  user's score
$(".crystal").on('click', function() {
     
      //Value for the button  we clicked on - aka 'this'.  We add 'data-random to pipe in data from -data-random on line 24.  Wrap in parseInt to convert string into number.
                    var num = parseInt($(this).attr('data-random'));  
                    
                    previous_score += num;
     
                    console.log(previous_score);
     
          //Run tests
        // console log the value of the one we clicked on - aka 'this'. 
           console.log("The Crystal Value is: " + ($(this).attr('data-random'))); 
});

