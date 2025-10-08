import { createContext , useState , useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext()
export const CountryProvider = ({children}) =>{
    //    const [ country , setCountry] = useState([])
    //     const[selected , setSelected] = useState(null)

     const [ country , setCountry] = useState(() => {
      try { return JSON.parse(localStorage.getItem('countries')) || [] } catch { return [] }
    })
    const [selected , setSelectedState] = useState(() => {
      try { return JSON.parse(localStorage.getItem('selected')) || null } catch { return null }
    })

    const setSelected = (value) => {
      setSelectedState(value)
      try { localStorage.setItem('selected', JSON.stringify(value)) } catch {}
    }

     
        const getCountry = async() =>{
            try {
                const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
                 setCountry(res.data.map((country) => ({
                        name : country.name.common,
                        flag : country.flags.png || country.flags.svg || "" ,
                     } )
                    )) 
            } catch (error) {
                console.error("Error feching country data:" , error);               
            }
        }
          
    useEffect(()=>{

        getCountry();

       }, [])

    return(
        <CountryContext.Provider value={{country , setSelected , selected , getCountry}}>
            {children}
        </CountryContext.Provider>
    )
 }