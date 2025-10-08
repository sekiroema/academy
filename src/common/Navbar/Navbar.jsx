// import './Navbar.css'
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import logo from "../../../public/images/feature.WEBP"
import { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { authContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { CountryContext } from "../../context/countryContext";


export default function Navbar(){

const navigate = useNavigate()

const[open , setOpen] = useState(false)
const[isOpen , setIsOpen] = useState(false)
  
const {country ,selected , setSelected } = useContext(CountryContext);
const { cartCount } = useContext(CartContext);
const {loading , currentUser , loadingDisplayCurrentUser , logout} = useContext(authContext)
const [openn, setOpenn] = useState(false)
const[exist , setExist] = useState(false)

// const countryData = country.find((c)=> 
//   c.name.common === selected );

let countryData = null;
if (selected) {
  // Footer Options sets selected to the whole country object (with name, flag).
  if (typeof selected === 'object') {
    countryData = selected;
  } else if (Array.isArray(country)) {
    // Support several country data shapes: { name: 'X' } or { name: { common: 'X' }, cca2, cca3, flags }
    countryData = country.find(c =>
      (typeof c?.name === 'string' && c.name === selected) ||
      c?.name?.common === selected ||
      c?.cca2 === selected ||
      c?.cca3 === selected
    );
  }
}
  

return(
    <>
    <nav className="px-5 py-2  bg-gray-900 shadow-lg flex justify-between sm:items-center z-100 relative">
        <div className="text-xl text-amber-500 text-shadow-lg pr-5 ">
            <a href="/"><img src={logo} width={40} height={40} alt="" /></a>
        </div>          
           <div className={` ${isOpen ? "flex" : "hidden" } max-sm:flex-col gap-5 max-sm:absolute max-sm:top-15 max-sm:left-0 bg-gray-900 max-sm:p-5 md:static md:flex md:flex-row md:items-center md:justify-between w-full z-100`}>
            <ul className="max-sm:flex max-sm:flex-col sm:flex sm:flex-row gap-5">
               <li className="max-sm:hover:bg-gray-800 max-sm:hover:py-3"><a className="text-amber-500 hover:text-amber-300  px-5" href="/">Home</a></li> 
               <li className="max-sm:hover:bg-gray-800 max-sm:hover:py-3"><a className="text-amber-500 hover:text-amber-300  px-5" href="about">About</a> </li>           
               <li className="max-sm:hover:bg-gray-800 max-sm:hover:py-3"><a className="text-amber-500 hover:text-amber-300  px-5" href="contact">Contact</a> </li>           
               <li className="max-sm:hover:bg-gray-800 max-sm:hover:py-3 text-amber-500 hover:font-semibold px-5"
               onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} >
                    <button  onClick={()=>setOpen(!open)}><span className="hover:text-amber-300 cursor-pointer"> Menu </span></button>
                   { open && (
                    <div > <ul className="max-sm:top-40  bg-gray-900 shadow-lg absolute top-10 "> 
                    <li ><a className="flex gap-2 hover:border hover:border-gray-800 hover:shadow hover:text-amber-500 px-10 py-2 " href="team"><IoIosPersonAdd/> Team </a></li>
                    <li ><a className="flex gap-2 hover:border hover:border-gray-800 hover:shadow hover:text-amber-500 px-10 py-2 " href="track"><GrHelpBook/> Tracks </a></li>
                    </ul></div>
                  )} 
                   </li>                    
            </ul>
            <div className="flex gap-5 max-sm:flex max-sm:flex-col sm:flex-row sm:items-center">
               { 
     loadingDisplayCurrentUser?
     <div className="">
      { loading ?
     <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
      : "" }
     </div>
     :
     !loadingDisplayCurrentUser && !currentUser ?
      <div className="authHandeler flex gap-5 px-5 ">
      <button className="text-amber-500 hover:text-amber-300 cursor-pointer"><a href="/register">Register</a></button>
      <button className="text-amber-500 hover:text-amber-300 cursor-pointer"><a href="/login">Login</a></button>
     </div>
      :
    <div className=" absolute top-5 right-15 max-md:top-[-45px] ">
    <button onClick={()=>setExist(!exist)} className="mr-5">
      <div className="flex items-center justify-center gap-2">
       { countryData ? ( <img src={countryData?.flags?.png || countryData?.flags?.svg || countryData?.flag} alt={countryData?.name?.common || selected}  className="w-8 h-8 rounded-full "/>)  
        :(<span className="text-amber-300 ">welcome</span>)} <span className="text-amber-500 ">{currentUser.firstname}</span></div>
    </button>
    {exist && (
     <ul className=" p-2 ">
    <li ><a href={'/profile'} className="bg-green-200 rounded-lg py-1 text-center w-[150px] block " >Profile</a></li>
    {/* <li ><a href={'/orders'} className="bg-blue-300 rounded-lg py-1 text-center w-[150px]  block my-1" >Orders</a></li> */}
    <li ><button className="bg-red-200 rounded-lg py-1 text-center w-[150px] block mt-1" onClick={()=>setOpenn(true)}>Logout</button>
              { openn && ( 
                    <div className="fixed inset-0 z-100 overflow-y-auto bg-black/30 flex items-center justify-center">
                      <div className='bg-white p-10 rounded-xl flex flex-col gap-5 w-1/4'>
                      <h2 className='text-blue-950 text-center font-semibold'>Are u sure to exit ?!</h2>
                      <div className='flex gap-2 justify-center'>  
                      <button className="bg-red-700 hover:bg-red-500 px-3 py-2 rounded-xl text-white w-1/4 "
                          onClick={logout}>Close</button>
                            <button className="bg-green-700 hover:bg-green-500 px-3 py-2 rounded-xl text-white w-1/4 "
                          onClick={()=>setOpenn(false)}>Cancel</button>
                          </div>
                      </div>
                    </div>
                  )
                  }   
    </li>
    </ul>
  )}
   </div>
    }
                     <button onClick={()=>navigate('/cart')} className="flex text-lg text-amber-500 hover:text-amber-300 px-5 cursor-pointer">
                        <FaCartArrowDown />
                        <sup>{cartCount}</sup>
              </button> 
            </div>             
    </div>
      <div>
          <button  onClick={(()=> setIsOpen(!isOpen))} >
          <IoMdMenu className="hidden max-sm:flex text-4xl text-amber-700 hover:text-amber-500 cursor-pointer"/></button>   
       </div>    
   
</nav>
</>
)
}