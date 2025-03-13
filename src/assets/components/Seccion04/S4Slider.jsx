import S4contentSlider from "./S4contentSlider";
import { txtSlide } from "./txtSlide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importa el módulo de navegación

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Importa los estilos de navegación

const MySwiper = () => {
  const slides = txtSlide();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]} // Habilita el módulo de navegación
      navigation // Activa la navegación automáticamente
      loop={true}
      breakpoints={{
        1101: { slidesPerView: 2 }
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <S4contentSlider img={item.img} titulo={item.titulo} txt={item.txt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
