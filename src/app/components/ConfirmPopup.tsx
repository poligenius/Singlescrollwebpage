import { CheckCircle, XCircle, X } from 'lucide-react';

interface ConfirmPopupProps {
  isVisible: boolean;
  onClose: () => void;
  success: boolean;
  message: string;
}

export function ConfirmPopup({ isVisible, onClose, success, message }: ConfirmPopupProps) {
  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60] w-full max-w-md mx-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header con colore condizionale */}
          <div className={`${success ? 'bg-gradient-to-r from-[#00a550] to-[#c8d400]' : 'bg-gradient-to-r from-red-500 to-red-600'} p-6 text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                {success ? (
                  <CheckCircle className="w-12 h-12 text-[#00a550]" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-500" />
                )}
              </div>
            </div>
            
            <h3 className="text-center text-2xl">
              {success ? 'Successo!' : 'Errore'}
            </h3>
          </div>
          
          {/* Messaggio */}
          <div className="p-6">
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              {message}
            </p>
            
            <button
              onClick={onClose}
              className={`w-full ${success ? 'bg-[#00a550] hover:bg-[#00a550]/90' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-md`}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
