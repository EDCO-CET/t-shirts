class ProductView {
  constructor() {
    this.productsContainer = document.querySelector('.products__container');
  }

  createProductElement(product, index) {
    const article = document.createElement('article');
    article.classList.add('product');
    article.dataset.productIndex = index;

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
    button.classList.add('button', 'add-to-cart-btn');
    button.textContent = 'Add to cart';
    button.dataset.productIndex = index;
    article.appendChild(button);

    return article;
  }

  renderProducts(products) {
    if (!this.productsContainer) return;

    this.productsContainer.innerHTML = '';

    products.forEach((product, index) => {
      const productElement = this.createProductElement(product, index);
      this.productsContainer.appendChild(productElement);
    });
  }

  bindAddToCart(handler) {
    this.productsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart-btn')) {
        const productIndex = parseInt(event.target.dataset.productIndex);
        handler(productIndex);
      }
    });
  }
}

export default ProductView;
