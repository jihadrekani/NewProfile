import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full fixed w-full   z-[2]">
        <Disclosure as="nav" className="bg-gray-900   ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                   
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-yellow-600 active:bg-black hover:text-black',
                              'px-3 py-2 rounded-md text-sm font-medium'
                              
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                        
                    
                          
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
               
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      
      </div>
    </>
  )
}






// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className=" ">
//       <div className="bg-gray-900 ">
//         <div className="px-4 left-0  py-5 nav sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//           <div className="relative  flex items-center justify-between">
//             <ul className="flex items-center hidden space-x-8 lg:flex">
//               <a
//                 href="#home"
//                 aria-label="Our product"
//                 // title="Our product"
//                 className="mr-12  font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//               >
//                 Home
//               </a>

//               <a
//                 href="#about"
//                 aria-label="Our product"
//                 // title="Our product"
//                 className="mr-12  font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//               >
//                 About
//               </a>

//               <a
//                 href="#skills"
//                 aria-label="Our product"
//                 // title="Our product"
//                 className="mr-12  font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//               >
//                 Skills
//               </a>

//               <a
//                 href="#projects"
//                 aria-label="Our product"
//                 // title="Our product"
//                 className="mr-12  font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//               >
//                 Projects
//               </a>

//               <a
//                 href="#contact"
//                 aria-label="Our product"
//                 // title="Our product"
//                 className="mr-12  font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
//               >
//                 Contact
//               </a>
//             </ul>

//             {/* mobile */}
//             <div className="lg:hidden  ">
//               <button
//                 aria-label="Open Menu"
//                 title="لیسـت"
//                 className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
//                 onClick={() => setIsMenuOpen(true)}  
//               >
//                 <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                   <path
//                     fill="currentColor"
//                     d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                   />
//                 </svg>
//               </button>
//               {isMenuOpen && (
//                 <div className="absolute top-0 left-0 w-full">
//                   <div className="p-5 bg-white border rounded shadow-sm">
//                     <div className="flex items-center justify-between mb-4">
//                       <div>
//                         <ul className="flex  items-center hidden space-x-8 lg:flex">
//                           <a
//                             href="#home"
//                             aria-label="Company"
//                             // title="Company"
//                             className="inline-flex items-center"
//                           >
//                             <svg
//                               className="w-8 text-deep-purple-accent-400"
//                               viewBox="0 0 24 24"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeMiterlimit="10"
//                               stroke="currentColor"
//                               fill="none"
//                             >
//                               <rect x="3" y="1" width="7" height="12" />
//                               <rect x="3" y="17" width="7" height="6" />
//                               <rect x="14" y="1" width="7" height="6" />
//                               <rect x="14" y="11" width="7" height="12" />
//                             </svg>
//                             <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
//                               Home
//                             </span>
//                           </a>

//                           <a
//                             href="#contact"
//                             aria-label="Our product"
//                             // title="Our product"
//                             className="mr-12  font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
//                           >
//                             Contact
//                           </a>

//                           <a
//                             href="#contact"
//                             aria-label="Our product"
//                             // title="Our product"
//                             className="mr-12  font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
//                           >
//                             Contact
//                           </a>
//                         </ul>
//                       </div>

//                       <div>
//                         <a
//                           href="#home"
//                           aria-label="Company"
//                           // title="Company"
//                           className="inline-flex items-center"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             className="w-6 h-6"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//                             />
//                           </svg>
//                           <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
//                             Home
//                           </span>
//                         </a>
//                       </div>

//                       <div>
//                         <button
//                           aria-label="Close Menu"
//                           title="لیستێ بگرە"
//                           className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           <svg
//                             className="w-5 text-gray-600"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               fill="currentColor"
//                               d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                     <nav>
//                       <ul className="space-y-4">
//                         <li>
//                           <a
//                             href="#about"
//                             aria-label="About us"
//                             //   title="About us"

//                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             About
//                           </a>
//                         </li>

//                         <li>
//                           <a
//                             href="#skills"
//                             aria-label="About us"
//                             //   title="About us"

//                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             Skills
//                           </a>
//                         </li>

//                         <li>
//                           <a
//                             href="#projects"
//                             aria-label="About us"
//                             //   title="About us"

//                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             Projects
//                           </a>
//                         </li>

//                         <li>
//                           <a
//                             href="#contact"
//                             aria-label="About us"
//                             //   title="About us"

//                             className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             Contact
//                           </a>
//                         </li>
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
