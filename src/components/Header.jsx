import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from '../assets/icon.png'; // Adjust the path as necessary

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 100) {
        setVisible(false); // Scroll down: hide
      } else {
        setVisible(true); // Scroll up: show
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-white  ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/"><img src={Image} alt="Logo" className="h-10 w-10 object-contain" /></Link>
          <Link to="/" className="text-primary text-2xl tracking-wide text-black">Eraah</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="#" className="hover:text-primary">Login</Link>
          {/* <Link to="#" className="hover:text-primary">Product</Link>
          <Link to="#" className="hover:text-primary">Contact</Link> */}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-800 bg-white">
          <Link to="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="#" className="hover:text-primary" onClick={() => setIsOpen(false)}>Login</Link>
          {/* <Link to="#" className="hover:text-primary" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="#" className="hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link> */}
        </div>
      )}
    </header>
  );
}
