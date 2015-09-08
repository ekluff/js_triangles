describe('triangle', function(){
  it("is false for a non-triangle input", function(){
    expect(triangle(2, 2, 8)).to.equal(false);
  });
  it("returns 'equilateral' for three equal inputs", function(){
    expect(triangle(9,9,9)).to.equal('equilateral');
  });

  it("returns 'isosceles' for two equal inputs", function(){
    expect(triangle(3,3,5)).to.equal('isosceles');
  });

  it("returns 'scalene' if no sides are equal", function(){
    expect(triangle(2,4,5)).to.equal('scalene');
  });

});
