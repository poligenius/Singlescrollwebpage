import { Mail, Users, GraduationCap } from 'lucide-react';

export function SectionLavoraConNoi() {
  return (
    <section id="lavora-con-noi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Lavora con Noi</h2>
          <p className="text-xl text-gray-600">Unisciti al nostro team</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card Volontari */}
            <div className="bg-[#00a550]/5 border-2 border-[#00a550]/20 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#00a550]/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#00a550]" />
                </div>
              </div>
              <h3 className="mb-4">Diventa Volontario</h3>
              <p className="text-gray-600">
                Unisciti ai nostri volontari per l'aiuto allo studio e contribuisci a fare la differenza nella vita degli studenti
              </p>
            </div>
            
            {/* Card Docenti */}
            <div className="bg-[#f7941d]/5 border-2 border-[#f7941d]/20 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#f7941d]/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#f7941d]" />
                </div>
              </div>
              <h3 className="mb-4">Organizza un Corso</h3>
              <p className="text-gray-600">
                Sei un esperto in un campo? Organizza un corso come docente sfruttando i nostri spazi attrezzati
              </p>
            </div>
          </div>
          
          {/* Testo principale e CTA */}
          <div className="bg-[#1e3a5f]/5 border-l-4 border-[#1e3a5f] rounded-lg p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Siamo sempre aperti a nuove collaborazioni. Se vuoi unirti ai nostri volontari per l'aiuto allo studio o se desideri organizzare un corso come docente sfruttando i nostri spazi, non esitare a contattarci via mail:
            </p>
            <a 
              href="mailto:collaborazioni@associazione.it" 
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-8 py-4 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors text-lg font-semibold"
            >
              <Mail className="w-5 h-5" />
              collaborazioni@associazione.it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
