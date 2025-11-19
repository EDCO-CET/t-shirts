# MVC Architecture - T-Shirt Store

## Overview

This application follows the Model-View-Controller (MVC) design pattern with separate concerns for data management, UI rendering, and business logic.

## Directory Structure

```
js/
├── models/
│   ├── ProductModel.js      # Manages product data and API calls
│   └── CartModel.js          # Manages cart state and localStorage
├── views/
│   ├── ProductView.js        # Renders product list and handles UI
│   └── CartView.js           # Renders cart sidebar and handles cart UI
├── controllers/
│   ├── ProductController.js  # Coordinates product model and view
│   └── CartController.js     # Coordinates cart model and view
└── app.js                    # Main application entry point
```

## Components

### Models

**ProductModel.js**

- Fetches products from external API
- Stores product data
- Provides methods to access products by ID

**CartModel.js**

- Manages cart items in localStorage
- Methods: `addItem()`, `removeItem()`, `updateQuantity()`, `clearCart()`
- Calculates totals: `getTotalItems()`, `getTotalPrice()`
- Persists cart data across browser sessions

### Views

**ProductView.js**

- Renders product cards dynamically
- Creates "Add to Cart" buttons
- Binds click events for adding products

**CartView.js**

- Renders cart sidebar with items
- Displays cart count badge and total price
- Shows notifications when items are added
- Handles cart toggle, quantity controls, and item removal

### Controllers

**ProductController.js**

- Initializes product loading
- Coordinates between ProductModel and ProductView
- Handles "Add to Cart" action delegation

**CartController.js**

- Manages all cart operations
- Updates cart view when data changes
- Handles user interactions (add, remove, update quantity, clear)

### Main Application

**app.js**

- Initializes all models, views, and controllers
- Connects product and cart functionality
- Entry point for the application

## Features

### Cart Functionality

✅ Add products to cart
✅ Remove items from cart (with visual delete button)
✅ Update item quantities (+/-)
✅ Clear entire cart (with confirmation)
✅ Persistent storage using localStorage
✅ Real-time cart count badge
✅ Real-time total price calculation
✅ Modal cart view with overlay
✅ Toast notifications on add to cart
✅ Click outside modal to close
✅ Smooth animations and transitions

### Data Persistence

- Cart data is saved to `localStorage` with key: `tshirt_cart`
- Cart persists across page reloads and browser sessions
- Automatic save on every cart modification

## Usage

### Opening the Cart

Click the "🛒 Cart (0)" button in the navigation bar to open the cart modal. You can close it by:

- Clicking the × button in the top-right corner
- Clicking outside the modal (on the dark overlay)
- Pressing the ESC key on your keyboard

### Adding Items

Click "Add to cart" button on any product card. A notification will appear confirming the addition.

### Managing Cart Items

- **Increase quantity**: Click the "+" button
- **Decrease quantity**: Click the "-" button
- **Remove item**: Click the "×" button
- **Clear cart**: Click "Clear Cart" button (with confirmation)

## Technical Details

### ES6 Modules

The application uses ES6 module syntax (`import`/`export`) for better code organization and maintainability.

### Event Delegation

Views use event delegation for efficient event handling, especially for dynamically created elements.

### Separation of Concerns

- **Models**: Handle data and business logic
- **Views**: Handle DOM manipulation and UI rendering
- **Controllers**: Coordinate between models and views

### LocalStorage Schema

```json
{
  "tshirt_cart": [
    {
      "id": 1234567890,
      "name": "Product Name",
      "price": 19.99,
      "image": "url",
      "alt": "description",
      "quantity": 2
    }
  ]
}
```

## Browser Compatibility

- Requires modern browser with ES6 module support
- Uses localStorage API
- Uses Fetch API for HTTP requests

## Future Enhancements

- Add checkout functionality
- Implement user authentication
- Add product filtering and search
- Implement wishlist feature
- Add order history
