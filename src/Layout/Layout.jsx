import React from "react";
import './Layout.css'

import Navbar from "../common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import ContactLinks from "../pages/Contact/ContactLinks";


export default function Layout(){


    return(
        <div className="relative Layout w-full h-screen flex flex-col justify-between">
        <Navbar />

        <Outlet/>
        <ContactLinks />

        <Footer/>
        </div>
    )
}