import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {CartContextProvider} from './context/CartContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CountryProvider } from './context/CountryContext.jsx'



createRoot(document.getElementById('root')).render(
<CountryProvider>
     <CartContextProvider>
          <AuthContextProvider>

               <App />

          </AuthContextProvider>
    </CartContextProvider>
  </CountryProvider>
)
