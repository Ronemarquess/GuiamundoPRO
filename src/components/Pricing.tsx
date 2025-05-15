import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      description: "Perfeito para começar sua jornada como guia",
      features: [
        { text: "Perfil básico na plataforma", included: true },
        { text: "Até 3 fotos no perfil", included: true },
        { text: "Receba solicitações de reserva", included: true },
        { text: "Chat com viajantes", included: true },
        { text: "Calendário de disponibilidade", included: true },
        { text: "Destaque nos resultados de busca", included: false },
        { text: "Estatísticas e insights", included: false },
        { text: "Ferramentas de marketing", included: false },
      ],
      buttonText: "Começar Grátis",
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 49,90",
      period: "/mês",
      description: "Ideal para guias que querem se destacar",
      features: [
        { text: "Perfil completo e personalizado", included: true },
        { text: "Fotos e vídeos ilimitados", included: true },
        { text: "Receba solicitações de reserva", included: true },
        { text: "Chat com viajantes", included: true },
        { text: "Calendário de disponibilidade", included: true },
        { text: "Destaque nos resultados de busca", included: true },
        { text: "Estatísticas e insights", included: true },
        { text: "Ferramentas de marketing", included: true },
      ],
      buttonText: "Assinar Agora",
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "R$ 199,90",
      period: "/mês",
      description: "Para agências e equipes de guias",
      features: [
        { text: "Múltiplos perfis de guias", included: true },
        { text: "Fotos e vídeos ilimitados", included: true },
        { text: "Gestão centralizada de reservas", included: true },
        { text: "Chat com viajantes", included: true },
        { text: "Calendário de disponibilidade", included: true },
        { text: "Destaque nos resultados de busca", included: true },
        { text: "Estatísticas e insights avançados", included: true },
        { text: "Suporte prioritário", included: true },
      ],
      buttonText: "Contato Comercial",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e preços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para impulsionar sua carreira como guia turístico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card p-6 border ${plan.highlighted ? 'border-primary-500 shadow-lg' : 'border-gray-200'} relative`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full btn ${plan.highlighted ? 'btn-primary' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem suporte por email e acesso à comunidade de guias.
            <br />
            <a href="#" className="text-primary-500 font-medium hover:underline">Ver comparação completa dos planos</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;