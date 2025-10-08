import  './Orders.css'
import LottiHandeler from '../../assets/Lottifiles/LottiHandeler';
import { authContext } from '../../context/AuthContext';
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default function Orders(){

        const {loadingDisplayCurrentUser, currentUser} = useContext(authContext)

        const [orders, setOrders] = useState([])
        const [isLoadingOrders, setIsLoadingOrders] = useState(true)
        const [error, setError] = useState(null)

        useEffect(()=>{
            if(!currentUser) return
            let cancelled = false
            const fetchOrders = async()=>{
                try {
                    setIsLoadingOrders(true)
                    setError(null)
                    const res = await axios.get(`http://localhost:3003/orders`, { params: { userId: currentUser.id } })
                    if(!cancelled){
                        const list = Array.isArray(res.data) ? res.data : []
                        setOrders(list)
                    }
                } catch (err) {
                    if(!cancelled){
                        setError('Failed to load orders')
                        setOrders([])
                    }
                } finally {
                    if(!cancelled){
                        setIsLoadingOrders(false)
                    }
                }
            }
            fetchOrders()
            return ()=>{ cancelled = true }
        }, [currentUser])

        if( loadingDisplayCurrentUser){
            return <LottiHandeler  status={'page'} />
        }
        else if( !loadingDisplayCurrentUser && ! currentUser){
            return <Navigate to={'/login'}/>
        }
        else{
            return(
                <>
                <div className="Orders container mb-5">
                   <p className='text-center h2 my-5' >Your <span style={{color: 'var(--secondry-color)'}}>Orders</span></p>
                   {
                    isLoadingOrders ? (
                        <LottiHandeler status={'page'} />
                    ) : error ? (
                        <div className='alert alert-danger'>{error}</div>
                    ) : (Array.isArray(orders) && orders.length > 0) ? (
                        <div className="row g-3">
                            {orders.map((order)=>{
                                const items = Array.isArray(order.items) ? order.items : []
                                const total = order.total
                                return (
                                    <div key={order.id} className="col-12">
                                        <div className="card shadow-sm">
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                                    <div><b>Order ID:</b> {order.id}</div>
                                                    <div><b>Total:</b> {total}$</div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table align-middle">
                                                        <thead>
                                                            <tr>
                                                                <th>Image</th>
                                                                <th>Title</th>
                                                                <th>Price</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {items.map((it, idx)=>{
                                                                return (
                                                                    <tr key={idx}>
                                                                        <td style={{width: '64px'}}>
                                                                            <img src={it.image} alt="" style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                                                                        </td>
                                                                        <td>{it.catogery || it.title || `Item #${it.id}`}</td>
                                                                        <td>{it.price}$</td>
                                                                        <td>{it.amount}</td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className='text-center opacity-75'>You have no orders yet.</div>
                    )
                   }
                </div>        
               </>
    )
}
        
}