const urlTshirts =
  'https://gist.githubusercontent.com/jhonatan89/0f0a054ebd354b002d88e9fd31f337d7/raw/2eabdcd6c6650a1cfcc7eda2a1a94d1871c7fe9b/t-shirt.json';

function createProductElement(product) {
  const article = document.createElement('article');
  article.classList.add('product');

  const header = document.createElement('header');
  const h3 = document.createElement('h3');
  h3.textContent = product.name;
  header.appendChild(h3);
  article.appendChild(header);

  const img = document.createElement('img');
  img.src = product.image;
  img.width = 200;
  img.height = 200;
  img.alt = product.alt;
  article.appendChild(img);

  const p = document.createElement('p');
  p.textContent = `Price: $${product.price}`;
  article.appendChild(p);

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Add to cart';
  article.appendChild(button);

  return article;
}

function renderProducts(products) {
  const productsContainer = document.querySelector('.products__container');

  products?.results?.forEach((product) => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });
}

function getProductsServer() {
  fetch(urlTshirts)
    .then((response) => response.json())
    .then((products) => renderProducts(products));
}

document.addEventListener('DOMContentLoaded', getProductsServer);
