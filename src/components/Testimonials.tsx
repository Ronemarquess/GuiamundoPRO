import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, Brasil",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Desde que me cadastrei no GuiaMundo Pro, minha agenda está sempre cheia. A plataforma me conectou com turistas de todo o mundo interessados em conhecer o Rio de Janeiro."
    },
    {
      name: "Sofia García",
      location: "Barcelona, Espanha",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "O GuiaMundo Pro revolucionou minha carreira como guia. Consigo gerenciar meus passeios, receber pagamentos e construir minha reputação, tudo em um só lugar."
    },
    {
      name: "Takashi Yamamoto",
      location: "Kyoto, Japão",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "A flexibilidade que tenho para criar experiências únicas e o alcance global da plataforma fizeram toda a diferença no meu trabalho como guia especializado em cultura japonesa."
    }
  ];

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos guias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de guias que transformaram suas carreiras com o GuiaMundo Pro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-primary-500 font-medium hover:underline">Ver mais depoimentos →</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;