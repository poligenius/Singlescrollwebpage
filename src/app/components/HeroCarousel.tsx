import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1765018028697-2baae4577cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjB2b2x1bnRlZXJzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NjI0MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Insieme per la Comunità",
    description: "Costruiamo un futuro migliore attraverso l'impegno e la solidarietà"
  },
  {
    url: "https://images.unsplash.com/photo-1520569495996-b5e1219cb625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY2MjA1NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Educazione per Tutti",
    description: "Supportiamo gli studenti nel loro percorso di crescita"
  },
  {
    url: "https://images.unsplash.com/photo-1763731374100-24ee3f91a896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NjYxNDk4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Eventi e Iniziative",
    description: "Partecipa alle nostre attività e fai la differenza"
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
    pauseOnHover: true,
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