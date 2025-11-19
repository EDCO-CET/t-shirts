class CartView {
  constructor() {
    this.cartContainer = document.querySelector('.cart__container');
    this.cartToggle = document.querySelector('.cart__toggle');
    this.cartCount = document.querySelector('.cart__count');
    this.cartTotal = document.querySelector('.cart__total');
    this.cartItems = document.querySelector('.cart__items');
    this.clearCartBtn = document.querySelector('.clear-cart-btn');
  }

  renderCart(cart, totalItems, totalPrice) {
    if (!this.cartItems) return;

    this.cartItems.innerHTML = '';

    if (cart.length === 0) {
      this.cartItems.innerHTML =
        '<p class="cart__empty">Your cart is empty</p>';
    } else {
      cart.forEach((item) => {
        const cartItem = this.createCartItemElement(item);
        this.cartItems.appendChild(cartItem);
      });
    }

    if (this.cartCount) {
      this.cartCount.textContent = totalItems;
    }

    if (this.cartTotal) {
      this.cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
  }

  createCartItemElement(item) {
    const div = document.createElement('div');
    div.classList.add('cart__item');
    div.dataset.itemId = item.id;

    div.innerHTML = `
      <img src="${item.image}" alt="${item.alt}" width="50" height="50">
      <div class="cart__item-info">
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
      </div>
      <div class="cart__item-controls">
        <button class="quantity-btn decrease-btn" data-item-id="${item.id}">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn increase-btn" data-item-id="${item.id}">+</button>
        <button class="remove-btn" data-item-id="${item.id}">×</button>
      </div>
    `;

    return div;
  }

  toggleCart() {
    if (this.cartContainer) {
      this.cartContainer.classList.toggle('cart__container--open');
      // Toggle body scroll
      document.body.classList.toggle('modal-open');
    }
  }

  closeCart() {
    if (this.cartContainer) {
      this.cartContainer.classList.remove('cart__container--open');
      document.body.classList.remove('modal-open');
    }
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('cart__notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('cart__notification--show');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('cart__notification--show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  bindToggleCart(handler) {
    // Handle cart toggle button clicks
    document.querySelectorAll('.cart__toggle').forEach((btn) => {
      btn.addEventListener('click', handler);
    });

    // Close cart when clicking on overlay
    if (this.cartContainer) {
      this.cartContainer.addEventListener('click', (event) => {
        if (event.target === this.cartContainer) {
          handler();
        }
      });
    }

    // Close cart when pressing ESC key
    document.addEventListener('keydown', (event) => {
      if (
        event.key === 'Escape' &&
        this.cartContainer.classList.contains('cart__container--open')
      ) {
        handler();
      }
    });
  }

  bindRemoveItem(handler) {
    if (this.cartItems) {
      this.cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
          const itemId = parseInt(event.target.dataset.itemId);
          handler(itemId);
        }
      });
    }
  }

  bindUpdateQuantity(handler) {
    if (this.cartItems) {
      this.cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('increase-btn')) {
          const itemId = parseInt(event.target.dataset.itemId);
          handler(itemId, 1);
        } else if (event.target.classList.contains('decrease-btn')) {
          const itemId = parseInt(event.target.dataset.itemId);
          handler(itemId, -1);
        }
      });
    }
  }

  bindClearCart(handler) {
    if (this.clearCartBtn) {
      this.clearCartBtn.addEventListener('click', handler);
    }
  }
}

export default CartView;
