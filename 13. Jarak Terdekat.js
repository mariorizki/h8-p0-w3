function targetTerdekat(arr) {
  var o = arr.indexOf('o');
  
  for (var i = o; i < arr.length; i++) {
    if (arr[i] === 'x'){
      var jarak = i-o;
      return jarak;
    } 
    
  }

  for (var i = o; i > 0; i--) {
    if (arr[i] === 'x'){
      var jarak = o-i;
      return jarak;
    } 
    
  }

  return 0;

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2