import React from 'react';
import { DollarSign, Clock, Award, Shield, Users, Compass } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary-500" />,
      title: "Renda Extra",
      description: "Transforme seu conhecimento local em uma fonte de renda adicional ou principal."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-500" />,
      title: "Flexibilidade",
      description: "Defina seus próprios horários e trabalhe quando for mais conveniente para você."
    },
    {
      icon: <Award className="h-6 w-6 text-primary-500" />,
      title: "Reconhecimento",
      description: "Destaque-se como especialista e construa uma reputação sólida no turismo."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-500" />,
      title: "Segurança",
      description: "Sistema de pagamentos seguro e verificação de identidade dos viajantes."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: "Networking",
      description: "Conecte-se com outros guias e profissionais do turismo em todo o mundo."
    },
    {
      icon: <Compass className="h-6 w-6 text-primary-500" />,
      title: "Crescimento",
      description: "Acesso a ferramentas de marketing e recursos para expandir seu negócio."
    }
  ];

  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios para guias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como o GuiaMundo Pro pode transformar sua carreira como guia turístico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Pronto para começar sua jornada?</h3>
              <p className="text-white/90">Junte-se a milhares de guias que já estão transformando suas carreiras.</p>
            </div>
            <button className="btn bg-white text-primary-600 hover:bg-white/90">Criar meu perfil</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;