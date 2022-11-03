function submit() {
  var agenda = document.getElementById("agenda").value;
  var tanggalor = document.getElementById("tanggalor").value;
  var deskripsi = document.getElementById("deskripsi").value;
  var arr = [];
  if (agenda == "" || tanggalor === "" || deskripsi == "") {
    alert("Semua Form Harus Di isi!");
  } else {
    const data = {
      agenda: agenda,
      tanggal_Order: tanggalor,
      deskripsi: deskripsi,
    };
    if (!localStorage.getItem("data")) {
      arr.push(data);
      localStorage.setItem("data", JSON.stringify(arr));
      alert("Data Berhasil Ditambahkan");
    } else {
      arr = JSON.parse(localStorage.getItem("data"));
      arr.push(data);
      localStorage.setItem("data", JSON.stringify(arr));
    }
    // var data2 = localStorage.getItem(data.agenda);
    // console.log(data2)
    // localStorage.setItem("Nama Lengkap", nama);
    // localStorage.setItem("Alamat", alamat);
    // localStorage.setItem("Tujuan", tujuan);
    // localStorage.setItem("Tanggal Order", tanggalor);
    // localStorage.setItem("Tanggal Keberangkatan", tanggalke);
    // localStorage.setItem("Harga", harga);
  }
}
function tampil_data() {
  var data = localStorage.getItem("data");
  var dataobjek = JSON.parse(data);
  var nama2 = dataobjek.deskripsi;
  var agenda = dataobjek.agenda;
  var tanggal = dataobjek.tanggal_Order;
  var a = dataobjek[0].agenda;
  var b = dataobjek[0].deskripsi;
  var c = dataobjek[0].tanggal_Order;
  document.getElementById("tampil_deskripsi").innerHTML = a;
  document.getElementById("tampil_agenda").innerHTML = b;
  document.getElementById("tampil_tanggalor").innerHTML = c;
  console.log(c);
}
function hapus() {
  localStorage.removeItem("data");
  alert("Data Berhasil di Hapus");
}
function update() {
  var agenda = document.getElementById("agenda2").value;
  var tanggalor = document.getElementById("tanggalor2").value;
  var deskripsi = document.getElementById("deskripsi2").value;
  var arr = [];
  if (agenda == "" || tanggalor === "" || deskripsi == "") {
    alert("Semua Form Harus Di isi!");
  } else {
    const data = {
      agenda: agenda,
      tanggal_Order: tanggalor,
      deskripsi: deskripsi,
    };
    arr.push(data);
    localStorage.setItem("data", JSON.stringify(arr));
    alert("Data Berhasil Diubah");
    var data2 = localStorage.getItem(data.agenda);
    console.log(data2);
    // localStorage.setItem("Nama Lengkap", nama);
    // localStorage.setItem("Alamat", alamat);
    // localStorage.setItem("Tujuan", tujuan);
    // localStorage.setItem("Tanggal Order", tanggalor);
    // localStorage.setItem("Tanggal Keberangkatan", tanggalke);
    // localStorage.setItem("Harga", harga);
  }
}

var data = localStorage.getItem("data");
var dataobjek = JSON.parse(data);
var a = dataobjek[0];
console.log(a);
dataobjek.forEach(myFunction);
function myFunction(item) {
  console.log(item);
}
var data4 = dataobjek.filter(function (dataobjek) {
  return dataobjek.agenda == "asd";
});
console.log(data4);

//ternary operator
let travel = "jalan";
switch(travel){
  case "jalan":
    console.log("walk");
    break;
    case "kerja":
      console.log("work");
      break;
      case "sekolah":
        console.log("school");
        break;
        default:
          console.log("salah input");
          break;
}

let travel_is = (travel == "dirumah") ? "walk" : (travel == "kerja") ? "work" : (travel == "sekolah") ? "school" : "salah input";
console.log(travel_is);