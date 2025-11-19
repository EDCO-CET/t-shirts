class CartController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    this.updateCartView();
    this.bindEvents();
  }

  bindEvents() {
    this.view.bindToggleCart(() => this.toggleCart());
    this.view.bindRemoveItem((itemId) => this.removeItem(itemId));
    this.view.bindUpdateQuantity((itemId, change) =>
      this.updateQuantity(itemId, change)
    );
    this.view.bindClearCart(() => this.clearCart());
  }

  addItem(product) {
    this.model.addItem(product);
    this.updateCartView();
    this.view.showNotification(`${product.name} added to cart!`);
  }

  removeItem(itemId) {
    this.model.removeItem(itemId);
    this.updateCartView();
  }

  updateQuantity(itemId, change) {
    const cart = this.model.getCart();
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        this.model.updateQuantity(itemId, newQuantity);
        this.updateCartView();
      }
    }
  }

  clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
      this.model.clearCart();
      this.updateCartView();
    }
  }

  toggleCart() {
    this.view.toggleCart();
  }

  updateCartView() {
    const cart = this.model.getCart();
    const totalItems = this.model.getTotalItems();
    const totalPrice = this.model.getTotalPrice();
    this.view.renderCart(cart, totalItems, totalPrice);
  }
}

export default CartController;
