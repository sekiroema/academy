import  './Cart.css'
import React, { useEffect , useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { auth } from '../../firebase/firebase';
import {authContext} from '../../context/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function Cart(){

    const[open , setOpen] = useState(false)
    const[isOpen , setIsOpen] = useState(false)
    const[selectedId , setSelectedId] = useState(null)   
    const[isLoading , setIsLoading] = useState(false)   
       const navigate = useNavigate()
   
       const { cart , deleteItem , clearCart  } = useContext(CartContext)    
       const { currentUser , loadingDisplayCurrentUser } = useContext(authContext)

        //    const TotalPrice = cart.reduce((a , b)=>{
        //     return a + b.price
        //   }, 0)

          const TotalPrice = cart.reduce((a, b) => {
            return  a + +(b.price || 0)
        }, 0);

        const handleDelete = (id) => {
            setSelectedId(id)
            setIsOpen(true) 
          }
        const confirm = () =>{
             if(selectedId !== null){
               deleteItem({ id: selectedId })
             }
            setIsOpen(false)
            setSelectedId(null)
          }
          
        const cancel = () =>{
            setIsOpen(false)
            setSelectedId(null)
          }

        const handleClear = ()=>{
            setOpen(true)           
          }

        const confirmClear = () =>{
            clearCart()
            setOpen(false)
          }
        const cancelClear = () =>{
            setOpen(false)
          }

 useEffect(() => {
            if (!currentUser && !loadingDisplayCurrentUser) {
                Swal.fire({
                    title: "Authentication Required",
                    text: "Please login or register to view your wishlist",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Register or Login",
                    cancelButtonText: "Cancel"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/register');
                    } else {
                        navigate('/');
                    }
                });
            }
        }, [currentUser, loadingDisplayCurrentUser, navigate])
      
       return(
           <>
           <div className="cart my-20">
               <p className='mb-5 text-5xl font-semibold text-center text-amber-500'>Your cart </p>
               <div className="container my-3">
                   { isLoading ?
                       <LottiHandeler status={"page"} />
                       :
                       cart.length === 0 ?
                       <div>
                           <p className='text-xl text-blue-950 p-5 font-semibold'>Tour cart is empty</p>
                           <a href='/track' className='p-5 text-amber-500 '>what about choosing a track?</a>
                       </div>
                       :    
               <div className="row gap-1 w-full ml-30 max-md:ml-0">
                   {  
                    cart.map((val, id)=>{
                        return <div key={id} className="flex items-center justify-between px-15 my-1 rounded bg-white shadow-lg w-[80%] max-md:w-full ">                      
                       <div className="p-2 rounded">
                           <img src={val.imag}  className='w-10 h-10 rounded-full' alt="" />
                       </div>
                       <div>
                           <p className='text-blue-950 font-semibold w-[100%]'>Title : {val.title}</p>
                       </div>
                       <div>
                           <button onClick={()=>handleDelete(val.id)} className='bg-red-800 hover:bg-red-500 text-white p-2 rounded-lg cursor-pointer'>Remove </button>
                       </div>                                      
                   </div>
                       })                      
                   } 
                   {
                        isOpen && (
                            <div className='fixed inset-0 flex flex-col items-center justify-center gap-5 bg-black/40 z-100'>
                            <div className='bg-white w-1/3 h-1/4 rounded-lg flex flex-col items-center justify-center gap-5'>  
                               <p className='text-blue-950 text-center font-semibold'>Are you sure to delete item?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancel} className='bg-amber-500 text-white px-4 py-2 rounded-lg cursor-pointer'>cancel</button>
                                 <button onClick={confirm} className='bg-red-800 text-white px-4 py-2 rounded-lg cursor-pointer' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }
                   <div className=" flex items-center justify-around px-35 py-1 my-1 rounded bg-white shadow-lg w-[80%] max-md:w-full">                           
                           <p className='text-blue-950 font-semibold w-[100%]'>TotalPrice : {TotalPrice} </p>
                           <button onClick={handleClear} className='bg-red-800 hover:bg-red-500 text-white p-2 rounded-lg cursor-pointer'>ClearCart </button>
                       </div> 
                        {
                        open && (
                            <div className='fixed inset-0 flex flex-col items-center justify-center gap-5 bg-black/40 z-100'>
                            <div className='bg-white w-1/3 h-1/4 rounded-lg flex flex-col items-center justify-center gap-5'>  
                               <p className='text-blue-950 text-center font-semibold'>Are you sure to clear cart?!</p>
                            <div className='flex items-center gap-1'>
                                 <button onClick={cancelClear} className='bg-amber-500 text-white px-4 py-2 rounded-lg cursor-pointer'>cancel</button>
                                 <button onClick={confirmClear} className='bg-red-800 text-white px-4 py-2 rounded-lg cursor-pointer' >confirm</button>
                            </div>
                            </div> 
                            </div>
                        )
                       }
               </div>
             }
            </div>
      </div>
   </>
       )
   }