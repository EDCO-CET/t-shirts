class CartModel {
  constructor() {
    this.storageKey = 'tshirt_cart';
    this.cart = this.loadCart();
  }

  loadCart() {
    try {
      const cartData = localStorage.getItem(this.storageKey);
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  addItem(product) {
    const existingItem = this.cart.find((item) => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        id: Date.now(),
      });
    }

    this.saveCart();
    return this.cart;
  }

  removeItem(itemId) {
    this.cart = this.cart.filter((item) => item.id !== itemId);
    this.saveCart();
    return this.cart;
  }

  updateQuantity(itemId, quantity) {
    const item = this.cart.find((item) => item.id === itemId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  getTotalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

export default CartModel;
