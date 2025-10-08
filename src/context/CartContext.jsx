import React, { useState , createContext , useEffect  } from "react";

export const CartContext = createContext();
export const  CartContextProvider = ({ children }) => {

//  const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem('cart');
//     return saved ? JSON.parse(saved) : [];
//   });

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

// const [cart, setCart] = useState([])
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      console.log('Loading cart from localStorage:', saved);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      console.log('Saving cart to localStorage:', cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);
      
  const cartCount = cart.length 

  const addToCart = (item) => {
    if (!cart.find((i) => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };
 const deleteItem = (item) => {
    if (cart.find((i) => i.id === item.id)) {
      setCart( cart.filter((i) => i.id !== item.id));
    }
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart,
     addToCart , 
     deleteItem ,
     clearCart, 
     cartCount: cart.length
     }}>
      {children}
    </CartContext.Provider>
  );
}