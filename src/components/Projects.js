import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div id='projects'>
      <h1 className='font-bold text-3xl mb-12 mt-[100px] text-center' >PROJECTS</h1>
      <div className=' grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  '>
   


      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="https://jr-cars.netlify.app/">
        <img className="rounded-t-lg h-[250px] w-[400px]" src="https://th.bing.com/th/id/R.e9a636becb4b100ed8eacad468c80568?rik=RUA2cTL4Ko1oMQ&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f13302%2f10%2fl%2fUsed-2020-Land-Rover-Range-Rover-Sport-SVR.jpg&ehk=k05jfSTuEIbYTryogfvpdPZT1wWxYhtJZRBmdrUsTus%3d&risl=&pid=ImgRaw&r=0" alt=""/>
    </a>
    <div className="p-5">
        <a href="https://jr-cars.netlify.app/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Car Exhibition</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is the city of cars that you can find your dream cer here and you can order it we will send it for you as soon as possible.</p>
        <a href="https://jr-cars.netlify.app/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Open Website
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>


<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-[250px] w-[400px]" src="https://images.unsplash.com/photo-1585244759837-5bb4b3a6919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School books</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Open Website
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"clipRule="evenodd"></path></svg>
        </a>
    </div>
</div>



{/* <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://th.bing.com/th/id/R.395cbf85bef66250918d2d5d9d72bf8d?rik=8r9k6AwaFHcsuA&riu=http%3a%2f%2fwww.regencyparkapartment.com%2fwp-content%2fuploads%2f2013%2f11%2fMovember-Pic.jpg&ehk=xVfhreqzvPzSITlw44A5xF0zjCQQVMnWMOVRFUETdyc%3d&risl=&pid=ImgRaw&r=0" alt=""/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"clipRule="evenodd"></path></svg>
        </a>
    </div>
</div> */}

</div>









    </div>
  )
}
