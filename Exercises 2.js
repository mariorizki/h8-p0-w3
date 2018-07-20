function balikKata(str) {
  var kosong = '';
  for (i = str.length - 1; i >= 0; i -- )
  kosong = kosong + str[i];
  return kosong;
}

console.log (balikKata('Hello World'));