import React from 'react';
import { Globe, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-7 w-7 text-primary-400" />
              <span className="text-xl font-bold">GuiaMundo<span className="text-primary-400">Pro</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando guias de turismo ao mundo. A plataforma que transforma sua paixão por viagens em trabalho.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Início</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors">Como Funciona</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-primary-400 transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">Depoimentos</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">Planos</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Guia para Iniciantes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Comunidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3" />
                <a href="mailto:contato@guiamundopro.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  contato@guiamundopro.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +55 11 9999-9999
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Inscreva-se na newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-400 w-full"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GuiaMundo Pro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;