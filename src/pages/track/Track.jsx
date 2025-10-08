import React from "react";
import './Track.css'
import img from '../../../public/images/66.png'
import front from '../../../public/images/front.png'
import back from '../../../public/images/back.png'
import flutter from '../../../public/images/ff.WEBP'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation , Autoplay} from "swiper/modules";
import 'swiper/css/autoplay';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function Track(){
  const {cart , addToCart} = useContext(CartContext);
const cards = [
  {id: 1, 
    title: "Fundamentals of programming", 
    imag: img, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 1500
  },
  {id: 2, 
    title: "Front-End", 
    imag: front, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3500
},
  {id: 3, 
    title: "Back-End", 
    imag: back, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3000
},
  {id: 4, 
    title: "Flutter", 
    imag: flutter, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    price: 3500
}
]
    return(
        <>
        <div className="@container Track px-20 my-0 bg-gray-200">
            <h1 className="text-amber-500 m-5 p-5 text-5xl font-semibold"> Available Tracks : </h1>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination , Navigation , Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white my-10">
              <img className="w-full" src={card.imag} alt={card.title}/>
              <div className="px-6 py-4">
                <div className="font-bold text-amber-500 text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base"> {card.desc} </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-amber-500 hover:bg-amber-300 text-white cursor-pointer p-2 rounded-lg  w-full"  
                  onClick={() => addToCart(card)}
                  disabled={cart.find(item => item.id === card.id)}>    
                  {cart.find(item => item.id === card.id) ? "On Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
  </>
  )
}