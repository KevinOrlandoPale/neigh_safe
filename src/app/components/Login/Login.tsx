import React from 'react'
import LoginForm from './LoginForm'
import Image from 'next/image'

export default function Login() {
  return (
    <div className='bg-gray-950 w-screen h-screen flex justify-center items-center'>
      <div className='h-[calc(100%-5%)] w-[calc(100%-30%)] rounded-1xl relative flex shadow-3xl p-3'>
        <div className='bg-gray-900 w-1/2 h-full flex flex-col rounded-s-2xl'>

          <h1 className='text-4xl text-center mt-12 m-1 gradient-text'>Neigh Safe</h1>
          <h1 className='text-4xl text-center text-white m-2'>Welcome Back</h1>
          <h1 className='text-1xl text-center text-white'>Protegendo a sua vizinhança em tempo real</h1>
          
            <LoginForm />
        </div>
        <div className='bg-gray-100 w-1/2 h-full rounded-e-2xl'>
        <Image
        src="/neighborhood.jpg"
        alt="Neighbors"
        width={600}
        height={600}
        className="object-cover rounded-e-2xl h-full w-full"
        />
        </div>
      </div>
    </div>
  )
}
