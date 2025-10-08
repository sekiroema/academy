import React from "react";
import './Contact.css'
// import { MdMyLocation } from "react-icons/md";
// import { FaRegMessage } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa6";




export default function Contact(){


    return(
        <section className="@container pt-5 bg-gray-200 fixed  right-20 top-1/2 transform -translate-y-1/2 z-100">
        <div className="ContactLinks  mb-2 flex flex-col items-center justify-center gap-5 ">
            <a href="https://wa.me/+201002020020" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                <IoLogoWhatsapp size={24} />
            </a>
            <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <FaFacebookMessenger size={24} />
            </a>
            <a href="tel:+201002020020" className="flex items-center gap-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition">
                <FaPhoneSquareAlt size={24} />
            </a>
            <a href="https://maps.app.goo.gl/kncfBasfUwVFVmL99" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                <FaLocationDot size={24} />
            </a>
            <a href="/contact" className="flex items-center gap-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition">
                <FaWpforms size={24} />
            </a>
        </div>

        </section>
    )
}