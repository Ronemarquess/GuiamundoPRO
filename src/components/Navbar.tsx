import React, { useState } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold">GuiaMundo<span className="text-primary-500">Pro</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary-500 transition-colors">Início</Link>
            <a href="#how-it-works" className="font-medium hover:text-primary-500 transition-colors">Como Funciona</a>
            <a href="#benefits" className="font-medium hover:text-primary-500 transition-colors">Benefícios</a>
            <a href="#testimonials" className="font-medium hover:text-primary-500 transition-colors">Depoimentos</a>
            <a href="#pricing" className="font-medium hover:text-primary-500 transition-colors">Planos</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleLogin}
              className="font-medium hover:text-primary-500 transition-colors flex items-center gap-1"
            >
              <User size={18} />
              Entrar
            </button>
            <button 
              onClick={handleRegister}
              className="btn btn-primary"
            >
              Criar Perfil
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-primary-500 transition-colors">Início</Link>
            <a href="#how-it-works" className="font-medium hover:text-primary-500 transition-colors">Como Funciona</a>
            <a href="#benefits" className="font-medium hover:text-primary-500 transition-colors">Benefícios</a>
            <a href="#testimonials" className="font-medium hover:text-primary-500 transition-colors">Depoimentos</a>
            <a href="#pricing" className="font-medium hover:text-primary-500 transition-colors">Planos</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button 
                onClick={handleRegister}
                className="btn btn-primary w-full"
              >
                Criar Perfil
              </button>
              <button 
                onClick={handleLogin}
                className="btn border border-gray-300 w-full"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;