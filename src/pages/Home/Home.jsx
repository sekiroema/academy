import React from "react";
import './Home.css'
import Header from "../Header/Header";
import About from "../About/About";
import Team from "../team/Team";
import Contact from "../Contact/Contact";
import Track from "../track/Track";

export default function Home(){


    return(
        <>
        <div className="Home my-0 ">
            <Header />
            <About />
            <Team />
            <Track />
            {/* <Contact/> */}
        </div>


        </>
    )
}