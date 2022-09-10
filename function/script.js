let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  alert('selamat datang di game tebak angka kamu diminta menebak angka 1 - 3  dan kamu akan bermain dalam 5 ronde player yang berhasil mengumpulkan tebakan terbanyak akan menang SELAMAT BERMAIN!!!!');
  function main() {
    let ronde = 5;
    let score = [];
    let hasil = 0;
    let score2 = [];
    for (let i = 1; i < ronde; i++) {
      let playerSatu = prompt('player 1 masukan angka');
      let playerDua = prompt('player 2 masukan angka');
      let rand = Math.floor(Math.random() * 3) + 1;

      if (playerSatu == playerDua) {
        alert('maaf angka tidak boleh sama');
        confirm('ulagi !');
      } else if (playerSatu == rand) {
        score.push(hasil + 1);
        alert(`player satu win`);
        alert(`Nilai yang dicari : ${rand}
          -----------------
          player 1 : ${score.length}
          player 2 : ${score2.length}
        `);

        alert(`RONDE ${i + 1}`);
      } else if (playerDua == rand) {
        score2.push(hasil + 1);
        alert(`player dua win`);
        alert(`Nilai yang dicari : ${rand}
          -----------------
          player 1 : ${score.length}
          player 2 : ${score2.length}  
          `);

        alert(`RONDE ${i + 1}`);
      } else {
        alert('hasil seri');
        alert(`Nilai yang dicari : ${rand}
        -----------------
        player 1 : ${score.length}
        player 2 : ${score2.length}
        `);
        alert(`RONDE ${i + 1}`);
      }
    }
    // -----------------------------
    if (score > score2) {
      alert('SELAMAT PLAYER 1 MENANG');
    } else if (score < score2) {
      alert('SELAMAT PLAYER 2 MENANG');
    } else {
      alert('Seri');
    }
  }
  main();
});
