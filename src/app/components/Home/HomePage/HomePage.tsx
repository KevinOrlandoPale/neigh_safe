import React from 'react'
import Header from '../Header/Header'
import SearchBar from '../SeachBar/SearchBar'

export default function HomePage() {
  return (
    <div className='bg-gray-950 w-screen h-screen flex flex-col'>
        <Header />
        <SearchBar />
    </div>
  )
}
