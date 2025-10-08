import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { authContext } from '../../context/AuthContext';
import  './Profile.css'
import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { CountryContext } from '../../context/countryContext';

export default function Profile(){
    const {country ,selected , setSelected } = useContext(CountryContext);
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
    
       const {loadingDisplayCurrentUser, currentUser} = useContext(authContext)
        if( loadingDisplayCurrentUser){
            return <LottiHandeler  status={'page'} />
        }
        else if( !loadingDisplayCurrentUser && ! currentUser){
            return <Navigate to={'/login'}/>
        }
        else{
            return(
                <>
                <div className="Profile container mx-5 p-5 my-15">
                   <p className='text-center text-2xl text-blue-950 font-semibold my-5' >Your <span className='text-amber-500 '>profile</span></p>
                   <p className='my-3 font-semibold text-blue-950'>First Name : <span className='text-amber-500 '>{currentUser?.firstname}</span></p>
                   <p className='my-3 font-semibold text-blue-950'>Last Name : <span className='text-amber-500 '>{currentUser?.lastname}</span></p>
                   <p className='my-3 font-semibold text-blue-950'>E-mail : <span className='text-amber-500 '>{currentUser?.email}</span></p>
                   <p className='my-3 font-semibold text-blue-950'>Phone : <span className='text-amber-500 '>{currentUser?.phone}</span></p>        
                   <p className='my-3 font-semibold text-blue-950 flex items-center gap-2'>Country :   {countryData?.name}   { countryData ? ( <img src={countryData?.flags?.png || countryData?.flags?.svg || countryData?.flag} alt={countryData?.name?.common || selected}  className="w-8 h-8 rounded-full "/>)  
                                  :("")}                       
                    </p>
                </div>        
               </>
    )
}
    
}