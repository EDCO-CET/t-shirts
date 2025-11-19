class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init() {
    await this.loadProducts();
  }

  async loadProducts() {
    const products = await this.model.fetchProducts();
    this.view.renderProducts(products);
  }

  bindAddToCart(callback) {
    this.view.bindAddToCart((productIndex) => {
      const product = this.model.getProductById(productIndex);
      if (product) {
        callback(product);
      }
    });
  }
}

export default ProductController;
