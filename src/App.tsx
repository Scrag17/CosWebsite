import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      quantity === 0
        ? items.filter(item => item.id !== id)
        : items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(items => {
      const exists = items.some(item => item.id === product.id);
      return exists
        ? items.filter(item => item.id !== product.id)
        : [...items, product];
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          wishlistCount={wishlist.length}
          onCartClick={() => setIsCartOpen(true)}
          onWishlistClick={() => alert('Wishlist feature coming soon!')}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onAddToCart={addToCart}
                onAddToWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            } 
          />
        </Routes>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      </div>
    </Router>
  );
}

export default App;