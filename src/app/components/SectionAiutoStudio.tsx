import { GraduationCap, Clock, Users, DollarSign, Heart, Calendar } from 'lucide-react';

export function SectionAiutoStudio() {
  return (
    <section id="aiuto-studio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Aiuto allo Studio</h2>
          <p className="text-xl text-gray-600">
            Supporto personalizzato per studenti di tutte le età
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Aiuto allo Studio a Pagamento */}
          <div className="bg-gradient-to-br from-[#1e3a5f]/5 to-[#00a550]/5 rounded-xl shadow-lg p-8 border-2 border-[#1e3a5f]/20 hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="mb-3 text-[#1e3a5f]">Aiuto allo Studio Infrasettimanale</h3>
              <p className="text-gray-600">
                Con insegnanti qualificati
              </p>
            </div>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1e3a5f]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Insegnanti Qualificati</h4>
                  <p className="text-gray-600">
                    Docenti esperti in tutte le materie scolastiche per un supporto professionale
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00a550]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#00a550]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Orari Flessibili</h4>
                  <p className="text-gray-600">
                    Disponibile dal lunedì al venerdì, dalle 15:00 alle 19:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#c8d400]/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#c8d400]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Supporto Personalizzato</h4>
                  <p className="text-gray-600">
                    Programmi di studio su misura per ogni studente
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f7941d]/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#f7941d]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Servizio a Pagamento</h4>
                  <p className="text-gray-600">
                    Contributo richiesto per coprire i costi degli insegnanti professionisti
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-[#1e3a5f] text-white px-8 py-3 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors font-semibold">
                Richiedi Informazioni
              </button>
            </div>
          </div>
          
          {/* Aiuto allo Studio Gratuito */}
          <div className="bg-gradient-to-br from-[#00a550]/5 to-[#c8d400]/5 rounded-xl shadow-lg p-8 border-2 border-[#00a550]/20 hover:shadow-xl transition-shadow flex flex-col">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00a550] rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
              <h3 className="mb-3 text-[#00a550]">Aiuto allo Studio Gratuito</h3>
              <p className="text-gray-600">
                Con i nostri fantastici volontari
              </p>
            </div>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#00a550]/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#00a550]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Volontari Appassionati</h4>
                  <p className="text-gray-600">
                    Persone motivate e dedicate che mettono il cuore nell'aiutare gli studenti
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#c8d400]/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#c8d400]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Sabato Pomeriggio</h4>
                  <p className="text-gray-600">
                    Ogni sabato dalle 15:00 alle 17:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f7941d]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#f7941d]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">Aperto a Tutti</h4>
                  <p className="text-gray-600">
                    Nessun requisito particolare, tutti gli studenti sono benvenuti
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1e3a5f]/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-2">100% Gratuito</h4>
                  <p className="text-gray-600">
                    Servizio completamente gratuito, nessun costo per le famiglie
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-[#00a550] text-white px-8 py-3 rounded-lg hover:bg-[#00a550]/90 transition-colors font-semibold">
                Partecipa Gratuitamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}