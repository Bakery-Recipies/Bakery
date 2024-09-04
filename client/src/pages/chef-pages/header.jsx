import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Croissant, Menu, X, ShoppingCart } from 'lucide-react';
import CartSidebar from '../../components/sidebarcart';
import { useNavigate } from 'react-router-dom';
const Header_chef = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (item) => {
    setCartItems((prevItems) => { 
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    navigate('/chef-home');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#c98d83] shadow-md w-full z-10">
    {/* <header className="bg-[#c98d83] shadow-md fixed w-full z-10"> */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          <Link to="/chef-home" className="text-white hover:text-rose-200 transition duration-300">Home</Link>
          <Link to="/chef-catalog" className="text-white hover:text-rose-200 transition duration-300">Catalog</Link>
        </nav>
        <div className="flex items-center">
          <Croissant className="text-white mr-2" size={24} />
          <h1 className="text-2xl font-bold text-white">BAKER</h1>
          <span className="text-xs text-white ml-2">EST. 1892</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          <Link to="/chef-profile" className="text-white hover:text-rose-200 transition duration-300">Profile</Link>
          <Link to="/chef-contact" className="text-white hover:text-rose-200 transition duration-300">Contact</Link>
          <button onClick={toggleCart} className="relative p-2">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      <CartSidebar
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeItem={removeItem}
        updateQuantity={updateQuantity}
        onCheckout={handleCheckout}
        onContinueShopping={handleContinueShopping}
        />
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#c98d83] p-4">
          <nav className="space-y-2">
            <Link to="/chef-home" className="text-white hover:text-rose-200 block py-2 transition duration-300">Home</Link>
            <Link to="/chef-catalog" className="text-white hover:text-rose-200 block py-2 transition duration-300">Catalog</Link>
            <Link to="/chef-profile" className="text-white hover:text-rose-200 block py-2 transition duration-300">Profile</Link>
            <Link to="/chef-contact" className="text-white hover:text-rose-200 block py-2 transition duration-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header_chef;
