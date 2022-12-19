// Payment Screen Javascript
let $topAmount = $('#top-up-amount');

// On click to change the payment colour
$(document).ready(function() {
    $(".button-ammount-style").click(function() {
    //Remove highlight of button click
     $('.button-ammount').find('*').removeClass("selected-payment")
      $(this).toggleClass("selected-payment");
      //change text displayed on top up amount
      $topAmount.text(`KES ` + this.value);
    //   $topAmount.val(this.value)
    //   console.log($topAmount.text())
    });
  });


