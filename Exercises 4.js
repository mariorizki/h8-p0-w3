function dataHandling2() {
  
  var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

  var nama = input[1].split(" ");
  var provinsi = input[2].split(" ");
  
  nama.push("Elsharawy")
  provinsi.unshift("Provinsi")
  

  input.splice(1,1, nama.join(" "))
  input.splice(2,1, provinsi.join(" "))
  input.splice(4,0, "Pria", "SMA Internasional Metro")
  
  var deleteSlash = input[3].split('/');
  var bulan = Number(deleteSlash[1]);
  var gabung = deleteSlash.join('-');
  
  deleteSlash.sort(function(value1, value2) { return Number(value1) < Number(value2) });

    switch (bulan) {
    case bulan = 1:
      bulan = 'Januari';
      break;
    case bulan = 2:
      bulan = 'Februari';
      break;
    case bulan = 3:
      bulan = 'Maret';
      break;
    case bulan = 4:
      bulan = 'April' ;
      break;
    case bulan = 5:
      bulan = 'Mei' ;
      break;
    case bulan = 6:
      bulan = 'Juni' ;
      break;
    case bulan = 7:
      bulan = 'Juli';
      break;
    case bulan = 8:
      bulan = 'Agustus';
      break;
    case bulan = 9:
      bulan = 'September';
      break;
    case bulan = 10:
      bulan = 'Oktober';
      break;
    case bulan = 11:
      bulan = 'November';
      break;
    case bulan = 12:
      bulan = 'Desember';
      break;
  }
  
  console.log(input);
  console.log(bulan);
  console.log(deleteSlash);
  console.log(gabung);
  console.log(input[1].slice(0,15));
  
  
  
}

dataHandling2()
