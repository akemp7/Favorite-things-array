$(document).ready(function() {
  $("#formOne").submit(function(event) {


  var firstInput = $("input#favorite1").val();
  var secondInput = $("input#favorite2").val();
  var thirdInput = $("input#favorite3").val();
  var fourthInput = $("input#favorite4").val();
  var fifthInput = $("input#favorite5").val();

  var favoriteThings = [firstInput, secondInput, thirdInput, fourthInput, fifthInput];

  var moreThings = favoriteThings.slice(0,3);

  $("ul.unstyled").append(moreThings);

  // var evenMoreThings = favoriteThings.push(moreThings);

  // alert(moreThings);

  event.preventDefault();

  });
});
