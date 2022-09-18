// create class
class library {
  constructor({ judul, datas }) {
    this.judul = judul;
    this.datas = datas;
  }

  render(e) {
    let data = this.datas;
    let func = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        let row = `<tr>
                <td>${arr[i][0]}</td>
                <td>${arr[i][1]}</td>
              </tr>
              <tr>
                <td>${arr[1][0]}</td>
                <td>${arr[1][1]}</td>
              </tr>
              
              `;
        return row;
      }
    };
    let table = `
      <table class="table">
        <thead>
          <tr>
            <th>${this.judul[0]}</th>
            <th>${this.judul[1]}</th>
          </tr>
        </thead>
        <tbody id = "test">
        ${func(data)}

        </tbody>
        </table>
    `;

    e.innerHTML += table;
  }
}
let data = new library({
  judul: ['Nama', 'email'],
  datas: [
    ['wicak', 'wicak@gmail.com'],
    ['gumelar', 'gumelar@gmail.com'],
  ],
});
let app = document.getElementById('app');
data.render(app);
