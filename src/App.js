import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import logo from "./images/jrjr.jpg";
import Steps from "./components/Steps";
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-sky-900' >

<div className="relative">
        <img
          src={logo}
          className="absolute inset-0 object-cover  w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-60">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="animate-pulse 	 max-w-lg mb-6 font-sans  font-bold tracking-tight text-white  sm:text-3xl sm:leading-none md:text-4xl lg:text-5xl">
                  Hi, My name is Jihad
                </h2>
                <p className="max-w-xl mb-4 text-base hover:text-yellow-600 text-gray-400 md:text-lg">
                  I am 27 years old and I live in Duhok, I have a diploma at
                  electricity and power department, felt in love with
                  programing...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Steps />




        {/* my skills */}
      <h1 className='font-bold text-3xl mb-[75px]  text-center  text-white' >Skills</h1>

        <div className=' rounded-lg  px-3 container mx-auto '>
 <div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>HTML</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8 ">
  <div className="progress bg-yellow-600 text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "94%"}}> 94%</div>
</div>
</div>

 
<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>CSS</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8 ">
  <div className="bg-yellow-600 progress progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8 " style={{'width': "90%"}}> 90%</div>
</div>
</div>

<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold  text-white w-[120px]'>JAVASCRIPT</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "70%"}}> 70%</div>
</div>
</div>



<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Bootstrap</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "85%"}}> 85%</div>
</div>
</div>








<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>React JS</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "70%"}}> 70%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Tailwind CSS</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "90%"}}> 90%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Axios</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "75%"}}> 75%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Json
</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "75%"}}> 75%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Redux Toolkit
</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "55%"}}> 55%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Formik & Yup</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "60%"}}> 60%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Next.js</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "75%"}}> 75%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>TypeScript</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "70%"}}> 70%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>React Leaflet</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "80%"}}> 80%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Netlify Deploying
</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "90%"}}> 90%</div>
</div>
</div>






<div className=' flex items-center mb-3'>
  <label className='mx-4 font-bold text-white w-[120px]'>Github
</label>
        <div className="w-full progress bg-gray-200 rounded-full h-8">
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "88%"}}> 88%</div>
</div>
</div>




</div>

<Projects />
<Contact />
</div>
  );
}


export default App;
