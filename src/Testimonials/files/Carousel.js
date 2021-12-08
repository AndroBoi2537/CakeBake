// Import Swiper React components
import React from "react";
import ReactDOM from "react-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./Testimonials";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const App = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onReachEnd={() => console.log("End")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div>
        {data.map((d) => {
          const { id, name, Desc, image } = d;
          return (
            <SwiperSlide
              className="flex flex-col items-center text-center"
              key={id}
            >
              <img className="w-72" src={image} alt={name} />

              <h2 className="font-M_blk text-2xl border-b-4 mt-4 border-green-400">
                {name}
              </h2>
              <img
                className="w-1/3 my-3"
                src="../../../Images/rating.png"
                alt=""
              />
              <p className="Rob_M text-lg">{Desc}</p>
            </SwiperSlide>
          );
        })}
      </div>
      {/* <SwiperSlide>
        <img src={data[1].image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={data[2].image} alt="" />
        Slide 3
      </SwiperSlide>
      <SwiperSlide>
        <img src={data[3].image} alt="" />
        Slide 4
      </SwiperSlide>
      <SwiperSlide>
        <img src={data[4].image} alt="" />
        Slide 5
      </SwiperSlide> */}
      ...
    </Swiper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
