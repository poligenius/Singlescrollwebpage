import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già visto la popup
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    
    if (!hasSeenPopup) {
      // Mostra la popup dopo un breve ritardo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrà la logica per l'iscrizione alla newsletter
    alert('Grazie per esserti iscritto alla nostra newsletter!');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#00a550] p-6 text-white relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-center mb-2">Resta Aggiornato!</h3>
            <p className="text-center text-white/90">
              Iscriviti alla nostra newsletter per ricevere tutte le novità su corsi, eventi e iniziative
            </p>
          </div>
          
          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-nome" className="block mb-2 text-gray-700 text-sm">
                  Nome
                </label>
                <input
                  type="text"
                  id="popup-nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="popup-email" className="block mb-2 text-gray-700 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="popup-email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none"
                  placeholder="tua@email.com"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#00a550] text-white px-6 py-3 rounded-lg hover:bg-[#00a550]/90 transition-colors font-semibold"
                >
                  Iscriviti
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  No, grazie
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Rispettiamo la tua privacy. Nessuno spam, promesso!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
