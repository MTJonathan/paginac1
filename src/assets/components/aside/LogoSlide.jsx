import { Spotify,Microsoft, McAfee, Google,FedEx } from "../svg/svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Importa el módulo de navegación

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Importa los estilos de navegación

const LogoSlide = () => {
  return (
    <Swiper
      className="logosContainer"
      spaceBetween={50}
      slidesPerView={1} // Permite que las diapositivas fluyan
      centeredSlides={true} // Centra los logos
      modules={[Navigation, Autoplay]} // Habilita el módulo de navegación
      loop={true}
      autoplay={{ 
        delay: 0, // Tiempo en milisegundos entre cada cambio (2s)
        disableOnInteraction: false, // Permite seguir en autoplay después de la interacción
        reverseDirection: false
      }}
      breakpoints={{
        550: { slidesPerView: 2 },
        700: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1100: { slidesPerView: 5 },
      }}
      speed={1500} // Controla la velocidad del desplazamiento
      freeMode={false} // Permite un desplazamiento suave y sin interrupciones
      allowTouchMove={false} // Evita que el usuario lo detenga al tocarlo
    >
      <SwiperSlide className="logoSlide"><Spotify/></SwiperSlide>
      <SwiperSlide className="logoSlide"><Microsoft /></SwiperSlide>
      <SwiperSlide className="logoSlide"><McAfee /></SwiperSlide>
      <SwiperSlide className="logoSlide"><Google /></SwiperSlide>
      <SwiperSlide className="logoSlide"><FedEx /></SwiperSlide>
      <SwiperSlide className="logoSlide"><Spotify/></SwiperSlide>
      <SwiperSlide className="logoSlide"><Microsoft /></SwiperSlide>
      <SwiperSlide className="logoSlide"><McAfee /></SwiperSlide>
      <SwiperSlide className="logoSlide"><Google /></SwiperSlide>
      <SwiperSlide className="logoSlide"><FedEx /></SwiperSlide>
    </Swiper>
  );
};

export default LogoSlide;
