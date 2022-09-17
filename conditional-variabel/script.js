let bulan = 3;

let lulus = bulan == 4 ? 'Anda lulus' : 'maaf anda belum lulus';

console.log(lulus);

const hutang = 6;
let lunas = hutang == 12 && 'hutang anda sudah lunas ';
console.log(lunas);
let blunas = hutang == 12 || 'hutang anda belom lunas ';
console.log(blunas);

// map and filter
let NaamaSiswa = [
  {
    nama: 'putri',
    namab: 'andini',
    alamat: 'kp alur',
  },
  {
    nama: 'nadia',
    namab: 'alaska',
    alamat: 'kp alur',
  },
  {
    nama: 'alya',
    namab: 'nurini',
    alamat: 'ciranji',
  },
  {
    nama: 'ralia',
    namab: 'azahra',
    alamat: 'cikalong',
  },
];

let n = NaamaSiswa.map((n) => n.nama + ' ' + n.namab);
console.log(n);
let aset = NaamaSiswa.filter((fil) => {
  return fil.alamat == 'kp alur' || fil.alamat == 'cikalong';
});
console.log(aset);
