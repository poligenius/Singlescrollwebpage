import { Calendar, MapPin, Users, Euro } from 'lucide-react';
import { useState } from 'react';
import { IscrizionePopup } from './IscrizionePopup';

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
    title: "Serata Culturale",
    data: "22 Gennaio 2024",
    luogo: "Teatro Comunale",
    costo: "Gratuito",
    partecipanti: "100 posti disponibili",
    descrizione: "Musica, poesia e arte per la comunità"
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

export function SectionEventi() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedEvento, setSelectedEvento] = useState<string>('');

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