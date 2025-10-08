import './auth.css'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod';
import RegisterSchema from '../validation/Register';
import React , {useState} from 'react';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function Register(){

    const navigate = useNavigate();
    const { regiserHandler , loading} = useContext(authContext);
    const [errfirebase , setErrfirebase] =useState(null);
    
    const { register, handleSubmit, watch, formState: { errors , isValid , isDirty }} = useForm({
    resolver: zodResolver(RegisterSchema),
  })

  console.log(errors);

  const RegisterSubmitHandler = async(data) => {
   const response = await regiserHandler(data);
    if(response.success){
    console.log(data);
         navigate("/profile");
  }else{
    setErrfirebase(response.message);
  }
}

    return(
        <>
  

        <div className="@container Regiser bg-gray-200 p-5 my-0">
            <h1 className="m-5 text-amber-500 text-5xl font-semibold max-md:text-3xl">Register Now </h1>
        <div className="max-md:w-full w-1/2 m-auto flex items-center justify-center "> 
              <form onSubmit={handleSubmit(RegisterSubmitHandler)} className="flex flex-col justify-center gap-5 my-5 w-full bg-white p-5 border border-amber-300 rounded-lg shadow-lg ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname" className= " text-gray-900 font-semibold">First Name</label>
                    <input type="text" {...register( "firstname")}
                     className= {` ${errors.firstname ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                     { errors.firstname && <p className="text-red-500">{errors.firstname.message}</p> }
                </div>        
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastname" className="text-gray-900 font-semibold">Last Name</label>
                    <input type="text" {...register( "lastname")} 
                    className= {` ${errors.lastname ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.lastname && <p className="text-red-500">{errors.lastname.message}</p> }
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-900 font-semibold">E-mail</label>
                    <input type="text" {...register( "email")} 
                    className= {` ${errors.email ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.email && <p className="text-red-500">{errors.email.message}</p> }
                </div>  
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-gray-900 font-semibold">Phone</label>
                    <input type="text" {...register( "phone")} 
                    className= {` ${errors.phone ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.phone && <p className="text-red-500">{errors.phone.message}</p> }
                </div>              
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-gray-900 font-semibold">Password</label>
                    <input type="text" {...register( "password")} 
                    className= {` ${errors.password ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.password && <p className="text-red-500">{errors.password.message}</p> }
                </div> 
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmedpassword" className="text-gray-900 font-semibold">Confirm-password</label>
                    <input type="text" {...register( "confirmedpassword")} 
                     className= {` ${errors.confirmedpassword ? "invalid" : ""} border border-amber-300 rounded-lg p-3 w-[90%]`}/>
                        { errors.confirmedpassword && <p className="text-red-500">{errors.confirmedpassword.message}</p> }
                </div>
                { errfirebase && <p className="alert text-red-500">{errfirebase}</p> }
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