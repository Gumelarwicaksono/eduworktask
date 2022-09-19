import data from './data.js';
const render = (dat) => {
  let table = document.getElementById('table');

  for (var i = 0; i < dat.length; i++) {
    let row = `<tr>
                        <td>${data[i].nama}</td>
                        <td>${data[i].umur}</td>
                        <td>${data[i].email}</td>
                  </tr>`;
    table.innerHTML += row;
  }
};
render(data);
