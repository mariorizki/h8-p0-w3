function angkaPalindrome(num){
  
  while(0 < 1){
    num += 1;
    var angka = String(num);
    if( parseInt(angka.split("").reverse().join("")) === num){
      return num;
    }
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 100