import CartController from './controllers/CartController.js';
import ProductController from './controllers/ProductController.js';
import CartModel from './models/CartModel.js';
import ProductModel from './models/ProductModel.js';
import CartView from './views/CartView.js';
import ProductView from './views/ProductView.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    // Initialize models
    const productModel = new ProductModel();
    const cartModel = new CartModel();

    // Initialize views
    const productView = new ProductView();
    const cartView = new CartView();

    // Initialize controllers
    const productController = new ProductController(productModel, productView);
    const cartController = new CartController(cartModel, cartView);

    // Load products
    await productController.init();

    // Bind add to cart functionality
    productController.bindAddToCart((product) => {
      cartController.addItem(product);
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
