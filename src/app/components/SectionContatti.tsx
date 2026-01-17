import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';

export function SectionContatti() {
  const [copiedIban, setCopiedIban] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIban(id);
    setTimeout(() => setCopiedIban(null), 2000);
  };

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contattaci</h2>
          <p className="text-xl text-gray-600">Siamo qui per aiutarti</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informazioni di contatto */}
          <div>
            <h3 className="mb-8">Informazioni di Contatto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-1">Indirizzo</h4>
                  <p className="text-gray-600">Via Roma 123, 00100 Roma</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-1">Telefono</h4>
                  <p className="text-gray-600">+39 06 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="mb-1">Email</h4>
                  <p className="text-gray-600">info@associazione.it</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="mb-4">Seguici sui Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white hover:bg-[#1e3a5f]/90 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#00a550] rounded-full flex items-center justify-center text-white hover:bg-[#00a550]/90 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#f7941d] rounded-full flex items-center justify-center text-white hover:bg-[#f7941d]/90 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Form di contatto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="mb-6">Inviaci un Messaggio</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block mb-2 text-gray-700">Nome</label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                  placeholder="tua@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="messaggio" className="block mb-2 text-gray-700">Messaggio</label>
                <textarea
                  id="messaggio"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none resize-none"
                  placeholder="Come possiamo aiutarti?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1e3a5f] text-white px-8 py-3 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
        
        {/* Box iscrizione newsletter */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00a550]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-[#00a550]" />
                </div>
              </div>
              <h3 className="mb-3">Iscriviti alla Newsletter</h3>
              <p className="text-gray-600">
                Ricevi tutte le novità su corsi, eventi e iniziative direttamente nella tua casella email
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Grazie per esserti iscritto alla nostra newsletter!');
            }}>
              <div>
                <label htmlFor="newsletter-nome" className="block mb-2 text-gray-700">Nome</label>
                <input
                  type="text"
                  id="newsletter-nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a550] focus:border-transparent outline-none"
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="newsletter-email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a550] focus:border-transparent outline-none"
                  placeholder="tua@email.com"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00a550] text-white px-8 py-3 rounded-lg hover:bg-[#00a550]/90 transition-colors font-semibold"
              >
                Iscriviti alla Newsletter
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Rispettiamo la tua privacy. Nessuno spam, promesso! 🔒
              </p>
            </form>
          </div>
        </div>
        
        {/* Sezione Donazioni */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#1e3a5f]/5 to-[#00a550]/5 rounded-xl shadow-lg p-8 md:p-12 border-2 border-[#00a550]/20">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00a550]/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#00a550]" fill="currentColor" />
                </div>
              </div>
              <h3 className="mb-3">Sostieni la Nostra Associazione</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Le tue donazioni ci aiutano a continuare le nostre attività e a sostenere la comunità. Ogni contributo fa la differenza!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* PayPal */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="mb-4 flex items-center gap-2">
                  <span className="text-[#1e3a5f]">💳</span> Dona con PayPal
                </h4>
                <p className="text-gray-600 mb-6">
                  Dona in modo rapido e sicuro tramite PayPal
                </p>
                <a 
                  href="https://www.paypal.com/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif" 
                    alt="Dona con PayPal" 
                    className="hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              
              {/* Bonifico Bancario */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="mb-4 flex items-center gap-2">
                  <span className="text-[#1e3a5f]">🏦</span> Dona con Bonifico Bancario
                </h4>
                <p className="text-gray-600 mb-6">
                  Puoi effettuare un bonifico a uno dei seguenti IBAN:
                </p>
                
                <div className="space-y-4">
                  {/* IBAN 1 */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Xsquí</p>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm text-[#1e3a5f] break-all">
                        IT29T 03359 01600 100000 161353
                      </code>
                      <button
                        onClick={() => copyToClipboard('IT29T0335901600100000161353', 'iban1')}
                        className="flex-shrink-0 p-2 hover:bg-gray-200 rounded transition-colors"
                        title="Copia IBAN"
                      >
                        {copiedIban === 'iban1' ? (
                          <CheckCheck className="w-5 h-5 text-[#00a550]" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* IBAN 2 */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">PRIMA Società Cooperativa Sociale a r.l.</p>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm text-[#1e3a5f] break-all">
                        IT16X 08453 32930 000000 170603
                      </code>
                      <button
                        onClick={() => copyToClipboard('IT16X0845332930000000170603', 'iban2')}
                        className="flex-shrink-0 p-2 hover:bg-gray-200 rounded transition-colors"
                        title="Copia IBAN"
                      >
                        {copiedIban === 'iban2' ? (
                          <CheckCheck className="w-5 h-5 text-[#00a550]" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}