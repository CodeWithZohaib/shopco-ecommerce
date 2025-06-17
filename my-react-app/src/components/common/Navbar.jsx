"use client"
import { Button } from '@/components/ui/button';
import { Input } from "../ui/input";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom"; 
import { useCart } from '../context/CartContext';

export default function Navbar() {
  // Move the hook call here, outside of the JSX
  const { cartItemCount } = useCart();
  
  return (
    <header className="w-full border-b bg-white sticky top-0 z-30">
      <nav className="container mx-auto flex items-center justify-between py-3 px-2 md:px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-4 cursor-pointer">
          <span className="font-bold text-xl tracking-tight">SHOP.CO</span>
        </Link>

        {/* Nav Links */}
        <ul className="ml-4 hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-black">Shop</a></li>
          <li><a href="#" className="hover:text-black">On Sale</a></li>
          <li><a href="#" className="hover:text-black">New Arrivals</a></li>
          <li><a href="#" className="hover:text-black">Brands</a></li>
        </ul>

        {/* Search + Icons */}
        <div className="ml-4 flex items-center gap-3">
          <Input type="text" placeholder="Search for products..." className="w-36 md:w-64" />
          <Button variant="ghost" size="icon" aria-label="User account">
            <User className="w-5 h-5" />
          </Button>

          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" aria-label="Menu" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
