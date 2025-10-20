import React from "react";
import './Header.css'
import head from '/images/552.jpg'
import php from '/images/ph.png'
import js from '/images/js.png'
import jquery from '/images/jquery.svg'
import html from '/images/HTML.svg'
import css from '/images/CSS3_logo.svg'
import react from '/images/React.svg'
import node from '/images/Node.png'
import bootstrap from '/images/Bootstrap.svg'
import tailwind from '/images/tailwind.svg'
import npm from '/images/npm.png'
import git from '/images/Git_icon.svg.png'
import github from '/images/github.svg'
import laravel from '/images/Laravel.png'
import mysql from '/images/Database.png'
import fire from '/images/Firebase.png'
import vite from '/images/Vitejs-logo.svg.png'


export default function Home(){


    return(
    <>
        <section className="@container relative px-20 bg-[url('/images/206.jpg')] bg-cover bg-center h-100 ">
        <div className="absolute inset-0 bg-black/50 ">
            <h1 className= "typewriter text-amber-500 text-8xl font-bold py-25 max-md:text-3xl " > Learn, Build, Grow</h1>
        </div>

        </section>
            <div className=" typeicon w-full flex items-center justify-center gap-2 py-2">
            <img src={html} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={css} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={js} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={jquery} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={bootstrap} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={tailwind} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={react} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={vite} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={npm} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={fire} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={git} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={github} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={php} className="w-15 h-15 hover:w-25"  alt="" />
            <img src={laravel} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={node} className="w-15 h-15  hover:w-25"  alt="" />
            <img src={mysql} className="w-15 h-15  hover:w-25"  alt="" />
            </div>

      </>
    )
}