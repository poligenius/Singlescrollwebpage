import { Heart, Target, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import { useRef } from 'react';

const eventiImages = [
  {
    url: "https://images.unsplash.com/photo-1688188388222-2d8c05b7fd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjYyNDI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "La nostra comunità unita per fare la differenza"
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNyZWF0aXZlJTIwaGFuZHM8ZW58MXx8fHwxNzY2MjQyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Workshop creativi per sviluppare nuove competenze"
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NjYyNDI5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Eventi culturali aperti a tutta la comunità"
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY2MjQyOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Aiuto allo studio: supportiamo i ragazzi nel loro percorso"
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjbGFzcyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NjI0MjkyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Corsi pratici per esprimere la creatività"
  }
];

export function SectionChiSiamo() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: true,
    arrows: false
  };

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

        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
          <Slider ref={sliderRef} {...settings}>
            {eventiImages.map((image, index) => (
              <div key={index} className="relative h-96">
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-96 object-cover"
                />
                {/* Didascalia in basso al centro */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-center text-lg font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Frecce di navigazione */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1e3a5f] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1e3a5f] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}