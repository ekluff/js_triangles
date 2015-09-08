var triangle = function(sideA, sideB, sideC) {
  var sides = [sideA, sideB, sideC].sort();

  if (sides[2] >= sides[0] + sides[1]) {
    return(false);
  } else if ((sides[0] === sides[1]) && (sides[1] === sides[2])){
    return('equilateral');
  };

  if ((sides[0] === sides[1]) || (sides[0] === sides[2])){
    return('isosceles');
  };

  if((sides[0] != sides[1]) && (sides[0] != sides [2]) && (sides[1] != sides[2])) {
    return('scalene');
  };

};






















// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not").show();
//     } else {
//       $(".not").hide()
//     }
//
//     $("#result").show();
//     event.preventDefault();
//
//   });
// });
