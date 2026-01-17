import { X, UserCheck } from 'lucide-react';

interface IscrizionePopupProps {
  isVisible: boolean;
  onClose: () => void;
  corsoTitolo?: string;
  tipo?: 'corso' | 'evento' | 'aiuto-studio-pagamento' | 'aiuto-studio-gratuito';
}

export function IscrizionePopup({ isVisible, onClose, corsoTitolo, tipo = 'corso' }: IscrizionePopupProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = '';
    if (tipo === 'aiuto-studio-pagamento') {
      message = 'Grazie per la tua richiesta! Riceverai una mail con tutte le informazioni sul servizio di aiuto allo studio.';
    } else if (tipo === 'aiuto-studio-gratuito') {
      message = 'Grazie! Riceverai una mail di conferma con tutti i dettagli per partecipare.';
    } else {
      message = 'Grazie per la tua iscrizione! Riceverai una mail con tutti i dettagli per completare l\'iscrizione.';
    }
    
    alert(message);
    onClose();
  };
  
  const getTitolo = () => {
    switch (tipo) {
      case 'evento':
        return "Iscrizione all'Evento";
      case 'aiuto-studio-pagamento':
        return "Richiesta Informazioni";
      case 'aiuto-studio-gratuito':
        return "Richiesta Partecipazione";
      default:
        return "Iscrizione al Corso";
    }
  };
  
  const getDescrizione = () => {
    switch (tipo) {
      case 'aiuto-studio-pagamento':
        return "Lasciaci i tuoi recapiti, riceverai una mail con tutte le informazioni sul servizio di aiuto allo studio.";
      case 'aiuto-studio-gratuito':
        return "Lasciaci i tuoi recapiti, riceverai una mail di conferma con tutti i dettagli per partecipare.";
      default:
        return "Lasciaci i tuoi recapiti, riceverai una mail con tutti i dettagli per completare l'iscrizione.";
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#00a550] p-3 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-center mb-1 text-base">{getTitolo()}</h3>
            {corsoTitolo && (
              <p className="text-center text-white/90 text-xs">
                {corsoTitolo}
              </p>
            )}
          </div>
          
          {/* Form */}
          <div className="p-4">
            <p className="text-gray-600 text-center mb-4 text-xs">
              {getDescrizione()}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div>
                <label htmlFor="iscrizione-nome" className="block mb-1 text-gray-700 text-xs">
                  Nome
                </label>
                <input
                  type="text"
                  id="iscrizione-nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none text-sm"
                  placeholder="Il tuo nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="iscrizione-cognome" className="block mb-1 text-gray-700 text-xs">
                  Cognome
                </label>
                <input
                  type="text"
                  id="iscrizione-cognome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none text-sm"
                  placeholder="Il tuo cognome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="iscrizione-data-nascita" className="block mb-1 text-gray-700 text-xs">
                  Data di Nascita
                </label>
                <input
                  type="date"
                  id="iscrizione-data-nascita"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none text-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="iscrizione-email" className="block mb-1 text-gray-700 text-xs">
                  Email
                </label>
                <input
                  type="email"
                  id="iscrizione-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none text-sm"
                  placeholder="tua@email.com"
                  required
                />
              </div>
              
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#1e3a5f] text-white px-4 py-2 rounded-lg hover:bg-[#1e3a5f]/90 transition-colors font-semibold text-sm"
                >
                  Invia Richiesta
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}