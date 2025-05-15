import React from 'react';
import { UserPlus, Search, Calendar, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Crie seu perfil",
      description: "Cadastre-se gratuitamente, adicione suas informações, fotos e especialidades como guia."
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Seja encontrado",
      description: "Viajantes de todo o mundo podem encontrar seu perfil ao buscar guias no seu destino."
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Receba reservas",
      description: "Gerencie solicitações, confirme datas e organize sua agenda de forma prática."
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Construa reputação",
      description: "Receba avaliações positivas e destaque-se entre os melhores guias da plataforma."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme sua paixão por viagens em uma fonte de renda em apenas quatro passos simples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-5 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn btn-primary">Comece agora</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;