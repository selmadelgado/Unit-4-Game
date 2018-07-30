//  Initialize variables
var random_result;
var losses;
var wins;


// Create Random Result
random_result = Math.floor(Math.random() * 120 )  + 19;  // generate random num between 19-120 - hoisting
console.log(random_result);
$("#result").html('Random Result:    '); // display Random Result in the DOM


// Create HTML elements
for (var i = 0;  i < 4;  i++ ) {
         
         var random = Math.floor(Math.random() * 12); // generate random num between 1-12
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