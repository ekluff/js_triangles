var triangle = function(sideA, sideB, sideC) {
  var sides = [sideA, sideB, sideC].sort();

  if (sides[2] >= sides[0] + sides[1]) {
    return('not a triangle');
  } else if ((sides[0] === sides[1]) && (sides[1] === sides[2])){
    return('equilateral');
  } else if ((sides[0] === sides[1]) || (sides[0] === sides[2])){
    return('isosceles');
  } else if ((sides[0] != sides[1]) && (sides[0] != sides [2]) && (sides[1] != sides[2])) {
    return('scalene');
  } else {
    return 'where am I???~?!?!? let me out! its so dark in here....'
  };

};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var result = triangle(sideA, sideB, sideC);
    $("#type").text(result);
    event.preventDefault();

  });
});
