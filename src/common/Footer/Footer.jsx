import React from "react";
import './Footer.css'
import visa from '../../../public/images/eg.webp'
import Options from "./Options";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import logo from "../../../public/image/imgi_1030_5b0339e5-e2f3-4970-84ab-1ee4497cd9ca.png"
import logo from "../../../public/images/feature.WEBP"


export default function Footer(){

    return(
        <>
        <div className="Footer static bottom-0 left-0 w-full  my-auto bg-gray-900 p-2">
        <div className=" flex mx-auto w-full max-md:flex-col max-md:items-center justify-center">
                        <div className="intouch w-full sm:w-full max-sm:pl-10 lg:w-1/3 pl-25 my-5">
                             <a href="/"> <img src={logo} className="w-20 h-20" alt="" /></a>                        
                        </div>
                    <div className="media w-full sm:w-full lg:w-1/3 px-5 mt-5">
                                    <b className="text-amber-500 text-xl text-center">Shop Media </b>
                                    <ul className="flex gap-5 text-2xl mt-4">
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><TiSocialFacebook /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaTwitter /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaInstagram /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaLinkedin /></li>
                                        <li className="cursor-pointer text-amber-500 hover:text-amber-300"><FaGithub /></li>
                                    </ul>
                                  </div>       
                
                    <div className="Login w-full sm:w-full  lg:w-1/3 pr-25">
                            {/* <b className="text-amber-500">Choose your country</b> */}
                            <Options />
                          </div>        
         </div>  
            <hr className= "flex  items-center justify-center text-amber-300" />
          
                    <div className="flex justify-between py-5 px-25 w-full mr-0 max-md:flex-col max-md:items-center max-md:gap-4">
                    <p className="text-white max-md:text-sm"> Copywrite @ <a className="text-amber-500 hover:text-amber-300" href="https://www.linkedin.com/in/menna-elbadry21/">Menna Elbadry</a> </p>
                    <img src={visa} className="w-1/4 " alt="" />
                    </div>   
</div>
</>
    )
}