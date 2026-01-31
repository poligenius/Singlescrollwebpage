import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { SectionCorsi } from './components/SectionCorsi';
import { SectionAiutoStudio } from './components/SectionAiutoStudio';
import { SectionEventi } from './components/SectionEventi';
import { SectionChiSiamo } from './components/SectionChiSiamo';
import { SectionArtigiani } from './components/SectionArtigiani';
import { SectionLavoraConNoi } from './components/SectionLavoraConNoi';
import { SectionContatti } from './components/SectionContatti';
import { Footer } from './components/Footer';
import { NewsletterPopup } from './components/NewsletterPopup';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <SectionChiSiamo />
          <HeroCarousel />
        </div>
        <SectionCorsi />
        <SectionAiutoStudio />
        <SectionEventi />
        <SectionArtigiani />
        <SectionLavoraConNoi />
        <SectionContatti />
      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
}