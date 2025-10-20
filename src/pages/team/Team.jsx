import React from 'react'
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";


const people = [
  { 
    id: 1,
    name: 'Instructor 1 ',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/team1.jpg'
  },
  { 
    id: 2,
    name: 'Instructor 2',
    role: 'Flutter Developer',
    imageUrl: '/images/team2.jpg'
  },
  { 
    id: 3,
    name: 'Instructor 3',
    role: 'Back-end Developer',
    imageUrl: '/images/team3.jpg'
  },
  { 
    id: 4,
    name: 'Instructor 4',
    role: 'Front-end Developer',
    imageUrl: '/images/team4.jpg'
  },
  {
    id: 5,
    name: 'Instructor 5',
    role: 'UI/UX Designer',
    imageUrl: '/images/team5.png'
  },
]

export default function Team() {
  const [open, setOpen] = useState(false)
  const [selectedPerson , setSelectedPerson] = useState(null);

 const handleOpen = (person)=>{
    setSelectedPerson(person)
    setOpen(true)
  }

  return (
    <div className="bg-gray-200 py-10 sm:py-20 max-md:px-20">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-amber-500 sm:text-4xl ">
            Meet our leadership
          </h2>
          <p className="mt-6 sm:text-lg/8 max-sm:text-1/16 text-blue-950 ">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl}
                  className="size-25 max-md:size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"/>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-amber-500 cursor-pointer"
                      onClick={()=> handleOpen(person)}>{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-blue-950 " >{person.role}</p>
               
                  { open && selectedPerson && ( 
                    <div  className="fixed inset-0 z-100 overflow-y-auto bg-black/30 flex items-center justify-center">
                     <div className='bg-white p-10 rounded-xl flex flex-col gap-5 w-1/2'>
                       <div className='flex items-center justify-between'>
                        <h2 className='text-amber-500  font-semibold'>{selectedPerson.name}</h2>
                        <button className="p-2 text-2xl text-red-700 w-15 h-15 cursor-pointer flex items-center justify-center"
                                 onClick={()=> setOpen(false)}><IoIosCloseCircle/></button>
                        </div> 
                      <hr />
                      <p className='text-blue-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur alias magni eius ipsum dolore quisquam at, eos et rem cumque laborum adipisci necessitatibus fugit commodi tempora repellat veniam deserunt voluptas?</p>                     
                      </div>
                    </div>
                  )
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
