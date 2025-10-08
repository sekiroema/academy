import  './auth.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import LoginSchema from '../validation/Login';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Login(){
const { loginHandler  , loading} = useContext(authContext)

const navigate = useNavigate()
const [errorFirebase , setErrorFirebase] = useState(null)

const {register , handleSubmit ,  formState: { errors , isDirty , isValid}} = useForm({

        resolver : zodResolver( LoginSchema),
        mode : 'all'
})

const LoginSubmitHandler = async(data)=>{
    const response = await loginHandler(data)
    if(response.success){
        navigate('/profile')
    }else{
        setErrorFirebase(response.message)
    }

}
    return(
        <>
         <div className="@container Regiser bg-gray-200 p-5 my-0">
            <h1 className="m-5 text-amber-500 text-5xl font-semibold max-md:text-3xl">Login Now </h1>
        <div className="max-md:w-full w-1/2 m-auto flex items-center justify-center "> 
              <form onSubmit={handleSubmit(LoginSubmitHandler)}  className="flex flex-col justify-center gap-5 my-5 w-full bg-white p-5 border border-amber-300 rounded-lg shadow-lg ">
                                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-900 font-semibold">E-mail</label>
                    <input type="text" {...register( "email")} 
                    className= {` ${errors.email ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.email && <p className="text-red-500">{errors.email.message}</p> }
                </div>              
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-gray-900 font-semibold">Password</label>
                    <input type="text" {...register( "password")} 
                    className= {` ${errors.password ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.password && <p className="text-red-500">{errors.password.message}</p> }
                </div> 

                { errorFirebase && <p className="alert text-red-500">{errorFirebase}</p> }
               <button disabled={ !isDirty || !isValid || loading}
               className="authbtn bg-amber-500 hover:bg-amber-400 p-3 border-none rounded-lg w-1/2 text-white cursor-pointer">
                { loading ? <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                : "Submit" }
               </button> 
            </form>
        </div>
    </div>
       </>
    )
}