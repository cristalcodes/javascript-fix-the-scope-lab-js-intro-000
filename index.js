var animal = 'dog'

function myAnimal() {
  return `${animal}`
}

function yourAnimal() {
  var animal='cat';
  return `${animal}`// How can we make sure that this function
}

function add2(n) {
  return n+=2;
}

function funkyFunction(){
  return function(){
    return `function`;
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = function()