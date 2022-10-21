import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
export default function Steps() {
  return (
    <div className='mb-12'>
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        

        </div>
    
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
    
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-yellow-600 bg-indigo-50 sm:mx-auto">
            1
          </div>
        
          <a
           href='#skills'
           id='skills'
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 hover:underline"
          >
            Skills
          </a>
        </div>




        <div className="sm:text-center">
          
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-yellow-600 bg-indigo-50 sm:mx-auto">
            2
          </div>
         
          <a
            href="#projects"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 hover:underline"
          >
            Projects
          </a>
        </div>
        




        <div className="sm:text-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-yellow-600 bg-indigo-50 sm:mx-auto">
            3
          </div>
          
          <a
            href="#contact"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
    
  )
}
