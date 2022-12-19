// Payment Screen Javascript
let $topAmount = $('#top-up-amount');
let $customInput = $('#custom-input');
let $customAmount = $('#custom-amount')

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
  console.log(this.id)

  if(this.id != "button4-total"){
      $customInput.hide()
  } else {
      $customInput.show()
  }

  });
});



// Enter Custom Amount for Key strokes
$customAmount.keyup(function() {
  let total = parseInt($customAmount.val())
  if(isNaN(total)){
    total = '0'
  }
  console.log($customAmount.text())

  
  
  $topAmount.text(`KES ` + total.toLocaleString());
});
