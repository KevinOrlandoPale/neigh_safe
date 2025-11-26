'use client';

import React from 'react'
import Image from 'next/image'

export default function SearchBar() {
  return (
      <div className=' flex flex-col'>
        <div className='relative w-full max-w-sm'>
          <input type="search"
            placeholder='Search alerts, locations, or users...'
            name=""
            id=""
            className='bg-gray-800 text-white w-150 h-13 mx-73.5 p-5 pl-12 mt-5 rounded-full shadow-2xl' 
          />

            <Image 
            src="/search.svg"
            alt="search icon"
            width={20}
            height={20}
            className='absolute mt-2 ml-1 left-77 top-1/2 -translate-y-1/2'
              />
        </div>
    </div>
  )
}