//  array
const produc = ['apel', 'anggur', 'mangga', 'jeruk', 'leci', 'lengkeng'];
// destructuring array
const [apel, anggur, mangga, ...lainya] = produc;
console.log(apel, anggur, mangga);
console.log(...lainya);

// object
const siswa = {
  nama: 'gumelar wicaksono',
  alamat: 'kp alur desa cibatu ireng tasikmalaya',
  umur: 27,
  pengalaman_kerja: {
    DBM: 'filed asisten',
    ssdk: 'ceker , operatot jembatan timbang , admin',
  },
  hobi: 'coding dan memancing',
  status: ' kawin',
};
// destructuring object
const {
  nama,
  alamat,
  umur,
  pengalaman_kerja: { dbm, ssdk },
  hobi,
} = siswa;
console.log(nama);
console.log(alamat);
console.log(umur);
console.log('pengalaman kerja : ', dbm, ssdk);
console.log(hobi);
// menggabungkan objec
const newsiswa = {
  ...siswa,
  organisasi: {
    test: 'pencak silat',
    animate: 'otaku',
  },
  makanan: ['lalapan sambel trasi', 'sambel torek'],
};
// destructuring dari objec untuk array

console.log(newsiswa);
const {
  organisasi,
  makanan: [makanan1, makanan2],
} = newsiswa;

console.log(makanan1);
console.log(makanan2);
// decstruturing in function param
function siswaB({ umur, hobi }) {
  console.log(umur, hobi);
}
siswaB(siswa);

// default value dan alias
function defaultAlias({ status = 'belom kawin', anak = 'default', hobi: hb }) {
  console.log(status, ',', anak, ',', hb);
}
defaultAlias(siswa);
