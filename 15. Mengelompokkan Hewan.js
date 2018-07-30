function groupAnimals(animals) {
  animals.sort()
  var kelompok = [];
  var result = [];

  for (var i = 0; i < animals.length; i++){
    kelompok.push(animals[i]);
    if (i === animals.length - 1){
      result.push(kelompok);
    } else if (animals[i].charAt(0) !== animals[i+1].charAt(0)){ 
      result.push(kelompok);
      kelompok = []; 
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]