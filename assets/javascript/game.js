// function ready() {

  var counter = 0;
  var random_result;
  var lost = 0;
  var win = 0;
  var randomNumber;
  var resetAndStar = function () {

    //$(".crystals").empty();
    var images = [href = "../images/crystal1.jpg", href = "../images/crystal2.jpg", href = "../images/crystal3.jpg", href = "../images/crystal4.jpg"];
    //define randon number of game
    random_result = Math.floor(Math.random() * 101) + 19;
    $("#result").html('Random Result: ' + random_result);

    //Creating multiple crystals each with their own unique number value.

    // Next we create a for loop to select a random number to each imag untill 12
    for (var i = 0; i < 4; i++) {

      randomNumber = Math.floor(Math.random() * 11) + 1;

      // For each iteration, we will create an imageCrystal
      var crystal = $("#" + i);
      console.log(crystal);
      // This will allow the CSS to take effect.
      crystal.attr({
        "class": "crystal",
        "crystalvalue": randomNumber
      });
      crystal.css({
        "background-image": "url('" + images[i] + "')",
        "background-size": "cover"
      });
      $(".crystal").append(crystal);
    }
    //display om html  the total score
    $("#counter").html("Total Score: " + counter);

    // Each crystal will be given a src link to the crystal image
    //crystal.attr("src", "../assest/images/crystal1.jpg");
  }
  resetAndStar();

  // On click event applies to every crystal on the page.

    $(".crystals").click(function () {
      //alert("hello");

      // $(this) keyword specifies that it will be extracting the crystal value of the clicked crystal.
      // .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.

      // convert strings to an integer before adding to the counter
      var num = parseInt($(this).attr(randomNumber));
      console.log(num);
      // add the crystalValue to the user's "counter"
      // Every click, on every crystal adds to the global counter.
      counter += num;

      $("counter").html(counter);

      if (counter === num) {
        win++;
        $("#win").html("You win: " + win);
        counter = 0;
        $("counter").html(counter);
      }

      else if (counter >= num) {
        lost++;
        $("#lost").html("You lost: " + lost);
        counter = 0;
      }
    });
  // });
// }



// Speudo coding

// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystal