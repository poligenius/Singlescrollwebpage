import { Calendar, MapPin, Users, Euro, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { IscrizionePopup } from './IscrizionePopup';
import { ImageWithFallback } from './figma/ImageWithFallback';
import openLabFalegnameria from '../../assets/eventi/openlab_falegnameria.jpg';
import summerCamp from '../../assets/eventi/summer_camp_2025.jpeg';
import aiutoAlloStudio from '../../assets/eventi/aiuto_allo_studio.jpeg';
import Slider from 'react-slick';

const eventi = [
  {
    title: "Workshop di Fotografia",
    data: "15 Gennaio 2024",
    luogo: "Sede Associazione",
    costo: "€25",
    partecipanti: "20 posti disponibili",
    descrizione: "Impara le tecniche base della fotografia digitale"
  },
  {
    title: "Martedì Filosofico",
    data: "Quasi tutti i Martedì sera - 19.00 - 23.00",
    luogo: "Cinifabrique",
    costo: "Gratuito",
    partecipanti: "30 posti disponibili",
    descrizione: "Il martedì sera ci riuniamo per trovare la via della felicità. Qualche volta anche con l'aiuto di ospiti speciali."
  },
  {
    title: "Giornata Ecologica",
    data: "5 Febbraio 2024",
    luogo: "Parco Cittadino",
    costo: "Gratuito",
    partecipanti: "Aperto a tutti",
    descrizione: "Pulizia del parco e sensibilizzazione ambientale"
  }
];

const eventiImages = [
  {
    url: openLabFalegnameria,
    caption: "Open Lab Falegnameria 2025"
  },
  {
    url: summerCamp,
    caption: "Summer camp estivo 2025"
  },
  {
    url: aiutoAlloStudio,
    caption: "Aiuto allo studio con i nostri volontari, tutti i Sabato"
  }
];

export function SectionEventi() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedEvento, setSelectedEvento] = useState<string>('');
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    arrows: false
  };

  const handleIscrivitiClick = (eventoTitolo: string) => {
    setSelectedEvento(eventoTitolo);
    setIsPopupVisible(true);
  };

  return (
    <section id="eventi" className="py-20 bg-[#1e3a5f]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Prossimi Eventi</h2>
          <p className="text-xl text-gray-600">Partecipa alle nostre iniziative</p>
        </div>

        <div className="space-y-6">
          {eventi.map((evento, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="mb-3">{evento.title}</h3>
                  <p className="text-gray-600 mb-4">{evento.descrizione}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {evento.data}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {evento.luogo}
                    </div>
                    <div className="flex items-center">
                      <Euro className="w-4 h-4 mr-2" />
                      {evento.costo}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {evento.partecipanti}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-8">
                  <button
                    onClick={() => handleIscrivitiClick(evento.title)}
                    className="w-full md:w-auto bg-[#1e3a5f] text-white px-8 py-3 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors"
                  >
                    Iscriviti
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Galleria Immagini */}
        <div className="mt-16 relative h-96 rounded-lg overflow-hidden shadow-xl group">
          <Slider ref={sliderRef} {...sliderSettings}>
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

      <IscrizionePopup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        corsoTitolo={selectedEvento}
        tipo="evento"
      />
    </section>
  );
}