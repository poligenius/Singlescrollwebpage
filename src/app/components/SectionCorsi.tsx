import { Calendar, Euro, Clock, Download, Hammer, Palette, Scissors, Users } from 'lucide-react';

export function SectionCorsi() {
  const corsi = [
    {
      title: "Corso di Falegnameria",
      descrizione: "Impara le tecniche base della lavorazione del legno, dalla progettazione alla realizzazione di oggetti di arredamento. Un percorso pratico e creativo.",
      data: "Inizio: 15 Gennaio 2025",
      durata: "10 settimane",
      costo: "150€",
      postiDisponibili: 12,
      icon: Hammer,
      color: "bg-[#c8d400]",
      programma: "/programmi/falegnameria.pdf"
    },
    {
      title: "Lavorazione della Creta",
      descrizione: "Scopri l'arte della ceramica attraverso tecniche di modellazione, decorazione e cottura. Crea le tue opere d'arte uniche.",
      data: "Inizio: 22 Gennaio 2025",
      durata: "8 settimane",
      costo: "120€",
      postiDisponibili: 15,
      icon: Palette,
      color: "bg-[#00a550]",
      programma: "/programmi/creta.pdf"
    },
    {
      title: "Corso di Sartoria",
      descrizione: "Dalla cucitura base al taglio e confezionamento di capi d'abbigliamento. Sviluppa le tue competenze creative nel mondo della moda.",
      data: "Inizio: 5 Febbraio 2025",
      durata: "12 settimane",
      costo: "180€",
      postiDisponibili: 10,
      icon: Scissors,
      color: "bg-[#f7941d]",
      programma: "/programmi/sartoria.pdf"
    }
  ];

  return (
    <section id="corsi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">I Nostri Corsi</h2>
          <p className="text-xl text-gray-600">Scopri le nostre attività formative</p>
        </div>
        
        <div className="space-y-6">
          {corsi.map((corso, index) => {
            const Icon = corso.icon;
            
            return (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="md:flex md:gap-8 md:items-center">
                  {/* Icona a sinistra */}
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className={`w-20 h-20 md:w-24 md:h-24 ${corso.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Contenuto principale */}
                  <div className="flex-1">
                    <div className="md:flex md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-3">{corso.title}</h3>
                        <p className="text-gray-600 mb-3">{corso.descrizione}</p>
                        
                        {/* Link download programma */}
                        <a 
                          href={corso.programma} 
                          className="inline-flex items-center text-[#1e3a5f] hover:text-[#1e3a5f]/80 text-sm mb-4 transition-colors"
                          download
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Scarica il programma completo (PDF)
                        </a>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {corso.data}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {corso.durata}
                          </div>
                          <div className="flex items-center">
                            <Euro className="w-4 h-4 mr-2" />
                            {corso.costo}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {corso.postiDisponibili} posti disponibili
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-8">
                        <button className="w-full md:w-auto bg-[#1e3a5f] text-white px-8 py-3 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors">
                          Iscriviti
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Sezione noleggio spazi */}
        <div className="mt-12 bg-[#1e3a5f]/5 border-l-4 border-[#1e3a5f] rounded-lg p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed">
            All'interno della nostra sede disponiamo di un <strong>laboratorio di falegnameria</strong>, uno di <strong>sartoria</strong> ed una <strong>stampante 3D</strong> e postazioni con <strong>computer</strong>. Se vuoi noleggiare i nostri spazi contattaci a questo indirizzo:{' '}
            <a 
              href="mailto:noleggio@associazione.it" 
              className="text-[#1e3a5f] font-semibold hover:text-[#00a550] transition-colors underline"
            >
              noleggio@associazione.it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}