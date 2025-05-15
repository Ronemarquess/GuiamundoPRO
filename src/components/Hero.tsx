import React from 'react';
import { MapPin, Calendar, Globe, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-terracotta-600 to-primary-600 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme sua paixão por viagens em trabalho
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
              Conecte-se com viajantes do mundo todo e mostre o melhor do seu destino como guia local.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Criar Perfil
                <ChevronRight size={20} />
              </button>
              <button className="btn btn-outline">
                Ver Vagas
              </button>
              <button className="btn btn-outline">
                Como Funciona
              </button>
            </div>
          </div>
          
          {/* Right content - Feature cards */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trabalhe no seu destino</h3>
                  <p className="text-white/80">Crie roteiros personalizados e compartilhe o melhor da sua cidade com turistas do mundo todo.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gerencie sua agenda</h3>
                  <p className="text-white/80">Defina sua disponibilidade, preços e receba reservas diretamente no seu calendário.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Amplie seu alcance</h3>
                  <p className="text-white/80">Seja encontrado por viajantes de todo o mundo interessados na sua especialidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;