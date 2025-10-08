import { useContext , useState } from "react";
import axios from 'axios'
import { CountryContext } from '../../context/CountryContext'

export default function Options(){
    const {country , selected , setSelected} = useContext(CountryContext);


    const[search , setSearch] = useState("")
    const[showList , setShowList] = useState(false) 
    
    
    const filtered = country.filter((country) => country.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const handleSelect = (country) =>{
        setSelected(country)
        setSearch(country.name)
        setShowList(false)
    }

 return (
    <section className="@container mx-auto px-4">
        <label htmlFor="country" className="block text-xl text-amber-500 mt-5"> <b>Select your country</b></label>
        <div className="relative mx-auto mt-4 w-full">
            <input type="text" placeholder="select ur country" name="country"
                className="border border-amber-700 rounded-lg p-2 w-full " value={search}
                onChange={(e)=>{ setSearch(e.target.value); setShowList(true) }} />

        {
            showList && filtered.length > 0 && (
                <ul>
                    {filtered.length > 0 ? ( filtered.map((country)=>(<li key={country.name} onClick={()=> handleSelect(country)}
                     className="border rounded-lg p-2 w-full hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                        <img src={country.flag} alt={country.name} className="w-10 h-8"/>
                        <span className="font-semibold">{country.name}</span> </li> ))) 
                        : (<li className="text-amber-500" ></li>)}
                </ul>
            )
        }
        {selected && (<div className="flex gap-2 items-center mt-2 text-amber-500">
                        <img src={selected.flag} alt={selected.name} className="w-6 h-6"/>
                        <span className="font-normal">{selected.name}</span>
                    </div>)}
    </div>
    </section> 
 )
 
}