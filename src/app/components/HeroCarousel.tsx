import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cinifabriqueFoto from '../../assets/carousel/cinifabrique_foto.png';
import corsoRestauroFoto from '../../assets/carousel/corso_restauro_foto.jpg';
import politecnicoCinifabrique from '../../assets/carousel/politecnico_cinifabrique.jpg';
import aiutoAlloStudio from '../../assets/carousel/aiuto_allo_studio_carousel.jpeg';

const carouselImages = [
  {
    url: cinifabriqueFoto,
    title: "Insieme per la Comunità",
    description: "Venite a trovarci in Via S. Canzio 11, Cinisello Balsamo, 20092, (Milano)"
  },
  {
    url: aiutoAlloStudio,
    title: "Aiuto allo Studio",
    description: "Offriamo aiuto allo studio con volontari e professionisti"
  },
  {
    url: corsoRestauroFoto,
    title: "Corsi di Artigianato",
    description: "Offriamo corsi di falegnameria, artigianato e sartoria"
  },
  {
    url: politecnicoCinifabrique,
    title: "Eventi e Iniziative",
    description: "Partecipa ai nostri eventi, scopri tutte le iniziative"
  }
];

export function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    arrows: false
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index} className="relative h-[60vh] md:h-[70vh]">
            <div className="absolute inset-0">
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="mb-4">{image.title}</h1>
                <p className="text-xl md:text-2xl">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
