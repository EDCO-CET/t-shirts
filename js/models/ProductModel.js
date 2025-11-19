class ProductModel {
  constructor() {
    this.products = [];
    this.urlTshirts =
      'https://gist.githubusercontent.com/jhonatan89/0f0a054ebd354b002d88e9fd31f337d7/raw/2eabdcd6c6650a1cfcc7eda2a1a94d1871c7fe9b/t-shirt.json';
  }

  async fetchProducts() {
    try {
      const response = await fetch(this.urlTshirts);
      const data = await response.json();
      this.products = data.results || [];
      return this.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products[id];
  }
}

export default ProductModel;
