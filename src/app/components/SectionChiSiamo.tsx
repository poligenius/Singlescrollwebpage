import { AnimatedWelcomeTitle } from './AnimatedWelcomeTitle';

export function SectionChiSiamo() {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <AnimatedWelcomeTitle />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo un'associazione no profit impegnata nel supportare la comunità attraverso l'educazione, 
            la cultura e la solidarietà. Dal 2010 lavoriamo per creare opportunità e migliorare la vita delle persone.
          </p>
        </div>
      </div>
    </section>
  );
}