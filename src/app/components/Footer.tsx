import logo from '../../assets/cinifabrique_logo.svg';

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Cinifabrique" className="h-16" />
          </div>
          <p className="mb-2">&copy; 2024 Cinifabrique. Tutti i diritti riservati.</p>
          <p className="text-gray-300 text-sm">
            Fatto con ❤️ per la comunità
          </p>
        </div>
      </div>
    </footer>
  );
}
