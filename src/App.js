import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import logo from "./images/7.jpg";
import Steps from "./components/Steps";
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {
  return (
    <div className='bg-black' id='home' >
<Navbar />
<div className="relative  ">
        <img
          src={logo}
          className="absolute  inset-0 object-cover  w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-60">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mt-[200px] mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
               <div className='jr'> <h2 className="animate-pulse 2xl:-mt-[420px] xl:-mt-[420px] xl:-mr-[520px] lg:-mt-[380px] lg:ml-[120px] md:-mt-[190px] md:ml-[290px] sm:-mt-[165px] sm:ml-[263px] heading-margin 	 max-w-lg mb-6 font-sans  font-bold tracking-tight text-white  sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl xl:text-4xl">
                  Hi,Welcome 
                </h2></div>
                {/* <p className="max-w-xl mb-4 text-base hover:text-yellow-600 text-gray-400 md:text-lg">
                  I am 27 years old and I live in Duhok, I have a diploma at
                  electricity and power department, felt in love with
                  programing...
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
        <Steps />




        {/* web development skills */}
      <h1 className='font-bold text-3xl mb-[45px] md:-mt-[80px] my-margin   text-center  text-yellow-600' >Web Development Skills</h1>

        <div className=' rounded-lg  px-3  mx-auto '>
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
  <div className="bg-yellow-600 progress text-xs font-medium text-blue-100 text-center flex items-center justify-center p-0.5 leading-none rounded-r-full h-8" style={{'width': "80%"}}> 80%</div>
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
  <label className='mx-4 font-bold text-white w-[120px]'>VS Code
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


{/* other skills */}
<h1 className='font-bold text-3xl otherskills mb-[25px] sm:text-3xl sm:mt-[80px] md:mt-[80px] lg:mt-[80px] xl:mt-[80px] my-margin   text-center otherskillsmargin  text-yellow-600' >Other Skills</h1>




</div>

      <div className="container   mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      <div className="rounded  otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center  text-2xl border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Microsoft Word</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Microsoft Excel</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Power Point</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24"> Photo Editing</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Video Editing</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Problem Solving</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Social Networks</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Vlogger</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Strong Communication</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Managment and Planing</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Acting</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Hard Working</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Car Driving</div>
      <div className="rounded otherskillsborder grid place-items-center text-white hover:bg-yellow-600 text-center text-2xl  border-gray-800 dark:border-gray-700 border-solid border-2 h-24">Keyboard Skills</div>
                   
</div>
<Projects />
<Contact />
<Footer />
</div>
  );
}


export default App;
