import { Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Discussion() {
    const toast=useToast()
    const [handle,setHandle]=useState(false)
    const handleAccount = () => {
       toast({
          status: "info",
          title: "Discussion Link sent to your email",
          duration: 3000,
        });
      };
      useEffect(()=>{
   setHandle(false)
      },[])
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-10   " >
      <div className="container mt-0 max-w-lg  mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-white  rounded shadow-md text-black w-full p-3 lg:p-8 sm:rounded-md lg:rounded-xl" >
          <h1 className="mb-8 mt-0  text-center md:text-3xl sm:text-2xl">Discussion Schedule</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 sm:text-md md:text-xl"
            name="fullname"
            placeholder="Topic Name"
            
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 sm:text-md md:text-xl"
            name="Topic Details"
            placeholder="Topic Details"
          />

          <input
            type="date"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="date"
            placeholder="Choose date"
          />
        

          <Button
          bg={'blue.500'}
            type="submit"
            className="w-full  text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleAccount}
            style={{color:"white"}}
          >
            Create Account
          </Button>

          
        </div>

        
      </div>
    </div>
  )
}

export default Discussion
