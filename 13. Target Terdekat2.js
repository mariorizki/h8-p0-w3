function targetTerdekat(arr) {
  var o = arr.indexOf('o');
  var x = arr.indexOf('x', o); //Setelah o
  var x2 = arr.lastIndexOf('x', o); //Sebelum o 

  if(x == -1 && x2 == -1) {
    return 0;
  } else if(x2 == -1) {
    return x-o;
  } else {
    return o-x2;
  } 

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2