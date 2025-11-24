'use client';

import React, { useState } from 'react';

export default function LoginForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  
  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
    
  };

  const handleGoogleSignIn = () => {
    console.log('Login com Google clicado!');
    
  };

  return (
    <div className='bg-gray-900 w-1/2 h-full flex flex-col ml-9 mt-9 rounded-s-2xl'>

      <label className='text-white mb-2'>Email</label>
      <input
        name="email"
        type="text"
        placeholder='Enter your email'
        className='bg-gray-700 w-85 h-15 text-white rounded-xl mb-4 pl-5'
        onChange={handleChange}
        value={formData.email}
      />

      <label className='text-white mb-2'>Password</label>
      <input
        name="password"
        type="password"
        placeholder='Enter your password'
        className='bg-gray-700 w-85 h-15 text-white rounded-xl mb-4 pl-5'
        onChange={handleChange}
        value={formData.password}
      />


      <button
        onClick={handleSubmit}
        className='bg-blue-600 text-white rounded-xl h-15 w-85 mt-8 mb-5 hover:bg-blue-500 transition'
      >
        Sign in
      </button>

    <h1 className='text-2xl text-white ml-38'>ou</h1>

      <button
        onClick={handleGoogleSignIn}
        className='flex items-center justify-center bg-white text-gray-900 rounded-xl h-15 w-85 mt-5 hover:bg-gray-200 transition'
      >
        <img
          src="/google_icon.png"
          alt="Google"
          className='w-5 h-5 mr-2'
        />
        Sign in with Google
      </button>
    </div>
  );
}
