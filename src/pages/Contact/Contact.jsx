import React from "react";
import './Contact.css'
// import { MdMyLocation } from "react-icons/md";
// import { FaRegMessage } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
import KeenSlider from "./KeenSlider";


export default function Contact(){


    return(
        <section className="@container pt-5 bg-gray-200">
        <h1 className="text-amber-500  py-5 mx-20 text-2xl">Keep in touch </h1>

        <div className="Contact  mb-2 flex max-md:flex-col max-md:items-center max-md:justify-center gap-5 max-md:mx-20">
            <form action="" className="flex flex-col gap-3 bg-white border border-amber-200 p-10 rounded-lg shadow-lg w-1/2 ml-20  max-md:w-full">
                <input type="text" placeholder="Name" className="border border-amber-200 rounded-lg px-3 py-2"/>
                <input type="text" placeholder="E-mail" className="border border-amber-200 rounded-lg px-3 py-2"/>
                <input type="text" placeholder="Subject" className="border border-amber-200 rounded-lg px-3 py-2"/>
                <textarea name="message" id="message" placeholder="Message" className="border border-amber-200 rounded-lg px-3 pt-3 pb-10"></textarea>
                <button className="bg-amber-500 hover:bg-amber-300 text-white cursor-pointer px-3 py-2 border rounded-lg w-1/2">Submit</button>
            </form>

            <div className="w-1/2 max-md:w-full mr-20  max-md:mx-20 flex flex-col justify-center items-center">
            {/* <h1 className="text-amber-500  py-0 mx-20 text-2xl"> what they said about us:</h1> */}
                    <KeenSlider/>
             </div>
        </div>

        </section>
    )
}