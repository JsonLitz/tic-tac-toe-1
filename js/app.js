// ============================================================================================================
// INSIDE THIS IS WHERE STUFF STILL WORKS
// $(document).ready(function() {
// var board = 0;
//    $('.row').find('.box').click(function() {
//          if ($(this).hasClass('O') || $(this).hasClass('X')) {
//            return false;
//          }
//          if (board % 2 === 0) {
//            $(this).val('x');
//            $(this).addClass('X');
//
//          } else {
//            $(this).addClass('O');
//            $(this).val('o');
//
//          }
//          board++;
//
//          // console.log("code is working !")
//
//          // function that checks if X is the winner
//          if ($('.one').val() === 'x' && $('.two').val() === 'x' && $('.three').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.four').val() === 'x' && $('.five').val() === 'x' && $('.six').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.seven').val() === 'x' && $('.eight').val() === 'x' && $('.nine').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.one').val() === 'x' && $('.four').val() === 'x' && $('.seven').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.two').val() === 'x' && $('.five').val() === 'x' && $('.eight').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.three').val() === 'x' && $('.six').val() === 'x' && $('.nine').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.one').val() === 'x' && $('.five').val() === 'x' && $('.nine').val() === 'x') {
//            alert('X Wins!');
//          } else if ($('.three').val() === 'x' && $('.five').val() === 'x' && $('.seven').val() === 'x') {
//            alert('X Wins!');
//          }
//          //function that checks if O is the winner
//          else if ($('.one').val() === 'o' && $('.two').val() === 'o' && $('.three').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.four').val() === 'o' && $('.five').val() === 'o' && $('.six').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.seven').val() === 'o' && $('.eight').val() === 'o' && $('.nine').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.one').val() === 'o' && $('.four').val() === 'o' && $('.seven').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.two').val() === 'o' && $('.five').val() === 'o' && $('.eight').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.three').val() === 'o' && $('.six').val() === 'o' && $('.nine').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.one').val() === 'o' && $('.five').val() === 'o' && $('.nine').val() === 'o') {
//            alert('O Wins!');
//          } else if ($('.three').val() === 'o' && $('.five').val() === 'o' && $('.seven').val() === 'o') {
//            alert('O Wins!');
//          }
//        });


       // Probably better to somehow incorporate an array here instead of this boolean
       // Refactor later


      //BELOW THIS IS WHERE FUNCTIONS ARE TESTED
// ============================================================================================================

$(document).ready(function() {
var board = 0;
   $('.row').find('.box').click(function() {
         if ($(this).hasClass('O') || $(this).hasClass('X')) {
           return false;
         }
         if (board % 2 === 0) {
           $(this).val('x');
           $(this).addClass('X');

         } else {
           $(this).addClass('O');
           $(this).val('o');

         }
         board++;

         // console.log("code is working !")

         // function that checks if X is the winner
         if ($('.one').val() === 'x' && $('.two').val() === 'x' && $('.three').val() === 'x') {
           alert('X Wins!');
           endGame();

         } else if ($('.four').val() === 'x' && $('.five').val() === 'x' && $('.six').val() === 'x') {
           alert('X Wins!');
         } else if ($('.seven').val() === 'x' && $('.eight').val() === 'x' && $('.nine').val() === 'x') {
           alert('X Wins!');
         } else if ($('.one').val() === 'x' && $('.four').val() === 'x' && $('.seven').val() === 'x') {
           alert('X Wins!');
         } else if ($('.two').val() === 'x' && $('.five').val() === 'x' && $('.eight').val() === 'x') {
           alert('X Wins!');
         } else if ($('.three').val() === 'x' && $('.six').val() === 'x' && $('.nine').val() === 'x') {
           alert('X Wins!');
         } else if ($('.one').val() === 'x' && $('.five').val() === 'x' && $('.nine').val() === 'x') {
           alert('X Wins!');
         } else if ($('.three').val() === 'x' && $('.five').val() === 'x' && $('.seven').val() === 'x') {
           alert('X Wins!');
         }
         //function that checks if O is the winner
         else if ($('.one').val() === 'o' && $('.two').val() === 'o' && $('.three').val() === 'o') {
           alert('O Wins!');
         } else if ($('.four').val() === 'o' && $('.five').val() === 'o' && $('.six').val() === 'o') {
           alert('O Wins!');
         } else if ($('.seven').val() === 'o' && $('.eight').val() === 'o' && $('.nine').val() === 'o') {
           alert('O Wins!');
         } else if ($('.one').val() === 'o' && $('.four').val() === 'o' && $('.seven').val() === 'o') {
           alert('O Wins!');
         } else if ($('.two').val() === 'o' && $('.five').val() === 'o' && $('.eight').val() === 'o') {
           alert('O Wins!');
         } else if ($('.three').val() === 'o' && $('.six').val() === 'o' && $('.nine').val() === 'o') {
           alert('O Wins!');
         } else if ($('.one').val() === 'o' && $('.five').val() === 'o' && $('.nine').val() === 'o') {
           alert('O Wins!');
         } else if ($('.three').val() === 'o' && $('.five').val() === 'o' && $('.seven').val() === 'o') {
           alert('O Wins!');
         }
       });

       function endGame() {
         //Remove all remaining cards from here (Clean up the DIV's if need be)
        document.getElementByClass().innerHTML = "";
        //document.getElementById(cards).innerHTML = "";
        //document.getElementById(card).innerHTML = "";
       }
//
       $(".btn").on("click", function clear(event){
          $("#board").html(board_table);

})
       // $('.btn').click(function(){
       //         $('#board')[0].reset();
       //   });

       //function that alerts players once all spaces have been filled




       // function checkWin () {
       //   if ( )
       //
       //
       //
       // }


       //reset button ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

       function initNewGame(){
           // setup game vars and cards
       }

       function endGame(){
           // clean game vars and remove cards
       }

       function newOrReset(){
           endGame();
           initNewGame();
       }
       //reset button ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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
