
          // wait for the DOM to finish loading
$(document).ready(function() {


// ============================================================================================================
// INSIDE THIS IS WHERE STUFF STILL WORKS
      // var board = 0;
      // $('.row').find('.box').click(function() {
      //     if (board % 2 === 0) {
      //       $(this).prepend('<img class="img X" src="images/oscarO.png" />');
      //
      //     } else {
      //       $(this).prepend('<img class="img O" src="images/xhibit.png" />');
      //
      //     }
      //     board++;
      //
      //     var space = $(this).val();
      //     console.log("code is working !")
      //
      //   });
      //


      //BELOW THIS IS WHERE FUNCTIONS ARE TESTED
// ============================================================================================================
//
// $('.row').find('.box').click(function() {
//   if ($(this).hasClass('O X')) {
//     return false;
//   }
// });
var board = 0;
$('.row').find('.box').click(function() {
      if ($(this).hasClass('O')||$(this).hasClass('X'))   {
        return false;
      }
  if (board % 2 === 0) {
    $(this).addClass('X');

  } else {
    $(this).addClass('O');

  }
  board++;

  // var space = $(this).val();

  console.log("code is working !")

});

/

// $('.row').
// function checkWin () {
//   if $('.row').
//
// }
//
//


        // $('box').click( function check(e){
        //     var space = $(this).val();
        //     return space;
        //   });
        //
        //   if (space === "X" || "O") {
        //     event.preventDefault();
        //   }


          //write a function that checks to see if there is an image in the box already, and prevents the click function from writing a new picture into that space

          // if (this).click(function prevent(e){
          //     .prevent
          // });

          //
          // $(document).ready(function(){
          //   console.log("Let's get coding!")
          //   $('input').on("click", function pick(e){
          //     var rgb = $(this).val()
          //   });
          //   $('td').on("mouseenter", function paint(e){
          //     $(this).css('background-color', $('input').val())
          //   });
          // })










//Create function that creates an image into the designated box
//Alternate between X and O
//Create counter to alternate between X and O
//Show counter in the corner who's turn it is
//Alert/end game when a win occurs
//Draw X






















});
