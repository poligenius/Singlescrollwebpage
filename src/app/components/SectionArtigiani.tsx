import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const artigiani = [
  {
    nome: "Marco Rossi",
    foto: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3Njk4MDExODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    competenza: "Falegnameria e restauro",
    disponibilePer: [
      "Mobili su misura",
      "Restauro mobili antichi",
      "Cornici in legno",
      "Oggetti decorativi"
    ],
    email: "marco.rossi@cinifabrique.org"
  },
  {
    nome: "Laura Bianchi",
    foto: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2OTgzMTI5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    competenza: "Ceramica e decorazione",
    disponibilePer: [
      "Ceramiche artistiche",
      "Piatti e stoviglie personalizzate",
      "Decorazioni murali",
      "Workshop di ceramica"
    ],
    email: "laura.bianchi@cinifabrique.org"
  },
  {
    nome: "Giuseppe Verdi",
    foto: "https://images.unsplash.com/photo-1762712393685-fbe773b97605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3Njk4NzQ5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    competenza: "Lavorazione metalli",
    disponibilePer: [
      "Sculture in metallo",
      "Cancelli e ringhiere",
      "Lampade artigianali",
      "Gioielli su misura"
    ],
    email: "giuseppe.verdi@cinifabrique.org"
  },
  {
    nome: "Sofia Ferrari",
    foto: "https://images.unsplash.com/photo-1703420371268-85d78cfdc5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGFydGlzYW58ZW58MXx8fHwxNzY5ODc0OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    competenza: "Sartoria e tessuti",
    disponibilePer: [
      "Abiti su misura",
      "Riparazioni sartoriali",
      "Accessori in tessuto",
      "Corsi di cucito"
    ],
    email: "sofia.ferrari@cinifabrique.org"
  }
];

const SEGRETERIA_EMAIL = "segreteria@cinifabrique.org";

export function SectionArtigiani() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artigiani.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artigiani.length - 1 ? 0 : prev + 1));
  };

  const handleContact = (artigianoEmail: string, artigianoNome: string) => {
    const subject = encodeURIComponent(`Richiesta informazioni - ${artigianoNome}`);
    const mailtoLink = `mailto:${artigianoEmail}?cc=${SEGRETERIA_EMAIL}&subject=${subject}`;
    window.location.href = mailtoLink;
  };

  const currentArtigiano = artigiani[currentIndex];

  return (
    <section id="artigiani" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">I Nostri Artigiani</h2>
          <p className="text-xl text-gray-600">
            Professionisti appassionati pronti a realizzare i tuoi progetti
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Card Identikit */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#1e3a5f]/20 rounded-lg shadow-xl p-8 relative">
            {/* Intestazione stile documento */}
            <div className="text-center mb-6 pb-4 border-b-2 border-[#1e3a5f]/10">
              <h3 className="text-sm uppercase tracking-wider text-[#1e3a5f] font-semibold">
                Scheda Artigiano
              </h3>
            </div>

            <div className="md:flex gap-8">
              {/* Foto stile passaporto */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-48 h-56 mx-auto md:mx-0 border-4 border-[#1e3a5f]/20 rounded-sm overflow-hidden shadow-md">
                  <ImageWithFallback
                    src={currentArtigiano.foto}
                    alt={currentArtigiano.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Informazioni */}
              <div className="flex-1">
                <div className="space-y-4">
                  {/* Nome */}
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                      Nome Completo
                    </label>
                    <p className="text-2xl font-bold text-[#1e3a5f] mt-1">
                      {currentArtigiano.nome}
                    </p>
                  </div>

                  {/* Competenza */}
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                      Competenza Principale
                    </label>
                    <p className="text-lg text-gray-700 mt-1">
                      {currentArtigiano.competenza}
                    </p>
                  </div>

                  {/* Disponibile per */}
                  <div>
                    <label className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                      Disponibile Per
                    </label>
                    <ul className="mt-2 space-y-1">
                      {currentArtigiano.disponibilePer.map((lavorazione, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#00a550] rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700">{lavorazione}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pulsante contatto */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleContact(currentArtigiano.email, currentArtigiano.nome)}
                      className="flex items-center gap-2 bg-[#f7941d] text-white px-6 py-3 rounded-lg hover:bg-[#f7941d]/90 transition-colors shadow-md"
                    >
                      <Mail className="w-5 h-5" />
                      Contatta {currentArtigiano.nome.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Frecce di navigazione */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e3a5f] rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Artigiano precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1e3a5f] rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Artigiano successivo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicatori */}
          <div className="flex justify-center gap-2 mt-8">
            {artigiani.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#1e3a5f] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Vai all'artigiano ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
