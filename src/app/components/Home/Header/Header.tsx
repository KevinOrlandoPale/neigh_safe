import React from 'react' 

export default function Header() {
  return (
    <div className='flex flex-col mt-2'>
        <div className='py-5 px-[calc(100%-87%)] flex'>

        <h1 className='text-2xl text-white gradient-text'>
            Neigh Safe
        </h1>

        <div className='ml-160 mt-2'>

        <button style={{
            border:"none",
            background:"transparent",
            cursor:"pointer",
            padding:0
        }}>
            <img src="./notification.png" alt="notification_icone" width={20} height={20} />
        </button>
        </div>

        <div className='bg-white w-9 h-9 ml-7 rounded-full'>
            profile photo
        </div>

        </div>
      
      </div>
  )
}
