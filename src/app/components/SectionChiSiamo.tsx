import { Heart, Target, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SectionChiSiamo() {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Chi Siamo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo un'associazione no profit impegnata nel supportare la comunità attraverso l'educazione, 
            la cultura e la solidarietà. Dal 2010 lavoriamo per creare opportunità e migliorare la vita delle persone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#c8d400]/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#c8d400]" />
              </div>
            </div>
            <h3 className="mb-4">Missione</h3>
            <p className="text-gray-600">
              Promuovere l'inclusione sociale attraverso l'educazione e il supporto comunitario
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#00a550]/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-[#00a550]" />
              </div>
            </div>
            <h3 className="mb-4">Obiettivi</h3>
            <p className="text-gray-600">
              Offrire servizi educativi e culturali accessibili a tutti, senza discriminazioni
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#f7941d]/20 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#f7941d]" />
              </div>
            </div>
            <h3 className="mb-4">Visione</h3>
            <p className="text-gray-600">
              Una comunità più coesa e solidale, dove ognuno può realizzare il proprio potenziale
            </p>
          </div>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1688188388222-2d8c05b7fd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjYyNDI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mani unite insieme"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}