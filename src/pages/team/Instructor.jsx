import React from "react";
import './Instructor.css'
import in1 from '../../../public/images/team1.jpg'
import in2 from '../../../public/images/team2.jpg'
import in3 from '../../../public/images/team3.jpg'
import in4 from '../../../public/images/team4.jpg'
import in5 from '../../../public/images/team5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, EffectFade, EffectCreative , Pagination} from 'swiper/modules'
export default function Instructor(){


    return(
        <>
        <div className=" @container Instructor bg-gray-200 my-5">
            <h1 className="text-amber-500 text-5xl p-5 m-5">Instructors </h1>

        <div className="mx-20 grid grid-cols-3 max-md:grid-cols-1 gap-5">
            {/* <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url'(../../../public/images/team1.jpg)']" >
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                     </svg>
                      Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                  </div>
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={in1} alt="Avatar of Jonathan Reinink"/>
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                      <p className="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                </div>
            </div> */}
         <Swiper
          modules={[Navigation, Pagination]} // Include desired modules
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        
                        className="slidr">
                    <SwiperSlide className="bg-blue-200 p-4">

            <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full" src={in1}  alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-bold text-amber-500 text-xl mb-2">Instructor1</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HML , CSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React js</span>
              </div>
            </div>
                             </SwiperSlide>
           <SwiperSlide className="bg-blue-200 p-4"> 
            <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full" src={in2} alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-bold text-amber-500 text-xl mb-2">Instructor2</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fullstack</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#frontend</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#backend</span>
              </div>
            </div>
                                        </SwiperSlide>
        <SwiperSlide className="bg-blue-200 p-4">            
            <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full" src={in3} alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-bold text-amber-500 text-xl mb-2"> Instructot3</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#php</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#node js</span>
              </div>
            </div>
        </SwiperSlide>
                        
            
            </Swiper>

        </div>


        </div>


        </>
    )
}