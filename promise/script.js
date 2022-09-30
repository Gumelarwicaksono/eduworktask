const newsTemlate = document.getElementById('data-news-template');
const newsContainer = document.getElementById('data-news');
const searchInput = document.getElementById('data-search');

let news = [];

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  news.forEach((dat) => {
    const matching = dat.title.toLowerCase().includes(value) || dat.description.toLowerCase().includes(value);
    dat.element.classList.toggle('hide', !matching);
  });
});

fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=4288b2ebb6434e2d8d796ce26107addc')
  .then((res) => res.json())
  .then((data) => {
    news = data.articles.map((dat) => {
      const card = newsTemlate.content.cloneNode(true).children[0];
      const img = card.querySelector('[data-img]');
      const title = card.querySelector('[data-title]');
      const description = card.querySelector('[data-description]');
      const update = card.querySelector('[data-update]');
      const notFound = document.querySelector('[data-err]');
      notFound.innerHTML = message('not found');
      img.src = dat.urlToImage;
      title.textContent = dat.title;
      description.textContent = dat.description;
      update.textContent = dat.publishedAt;
      newsContainer.append(card);
      return { urlToImage: dat.urlToImage, title: dat.title, description: dat.description, publishedAt: dat.publishedAt, element: card, notFound: notFound };
    });
  })
  .catch((err) => {
    newsContainer.innerHTML = message(err.message);
  });

function message(msg) {
  return `<div class="div text-center mt-2" style="background-color: rgb(184, 151, 151)">${msg}</h4></div>`;
}
