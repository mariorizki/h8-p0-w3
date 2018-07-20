function pasanganTerbesar(num) {
  // you can only write your code here!
  var numStr = String(num);
  var numArr = numStr.split('');
  numArr.sort(function(value1, value2) { return value1 < value2 });

  var angkaBesar = numArr[0];
  var posisi = numStr.indexOf(angkaBesar);
  var angkaSebelahnya = numStr.slice(posisi +1 , posisi +2);
  
  return angkaBesar + angkaSebelahnya
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99