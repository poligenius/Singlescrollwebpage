import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/cinifabrique_logo.svg';

const navItems = [
  { name: 'Home', id: 'home', color: '#1e3a5f' },
  { name: 'Corsi', id: 'corsi', color: '#00a550' },
  { name: 'Aiuto allo Studio', id: 'aiuto-studio', color: '#c8d400' },
  { name: 'Eventi', id: 'eventi', color: '#f7941d' },
  { name: 'Artigiani', id: 'artigiani', color: '#1e3a5f' },
  { name: 'Lavora con Noi', id: 'lavora-con-noi', color: '#00a550' },
  { name: 'Contatti', id: 'contatti', color: '#f7941d' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Cinifabrique" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-all duration-300 px-3 py-2 font-medium hover:scale-105"
                style={{
                  color: item.color,
                  textShadow: '0 0 0 transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 2px 8px ${item.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0 transparent';
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1e3a5f]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md font-medium transition-colors"
                style={{ color: item.color }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
