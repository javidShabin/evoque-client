// import React, { useEffect, useState } from 'react'
// import { Link, NavLink, useLocation } from 'react-router-dom'

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)
//   const location = useLocation()
//   const isHome = location.pathname === '/'

//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 6)
//     }
//     onScroll()
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const onHero = isHome && !isScrolled

//   return (
//     <header className={`${onHero ? 'absolute inset-x-0 top-0' : 'sticky top-0'} my-2 z-50 max-w-7xl mx-auto transition-all rounded-full border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] backdrop-blur-2xl ${onHero ? 'bg-white/15 border-black/30 drop-shadow-[0_10px_30px_rgba(0,0,0,0.12)]' : 'bg-white/70 border-gray-200/60 shadow-sm'}`}> 
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className={`flex items-center justify-between rounded-full px-4 py-2 sm:px-6 sm:py-3 ${onHero ? 'bg-white/10 ring-1 ring-white/25' : 'bg-white/70 ring-1 ring-gray-200/60'}`}> 
//           <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Evoque home">
//             <img src="/vite.svg" alt="Logo" className="h-7 w-7" />
//             <span className="text-lg font-semibold tracking-tight text-gray-900">Evoque</span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-6 text-sm">
//             <NavLink
//               to="/"
//               className={({ isActive }) => `group relative transition-colors ${isActive ? 'text-black' : 'text-gray-900 hover:text-black'}`}
//               end
//             >
//               <span className="relative">Home</span>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-left bg-black transition-transform duration-300 group-hover:scale-x-100"/>
//             </NavLink>

//             <a href="#about" className="group relative transition-colors text-gray-900 hover:text-black">
//               <span className="relative">About</span>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-left bg-black transition-transform duration-300 group-hover:scale-x-100"/>
//             </a>

//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button
//                 className="group relative inline-flex items-center gap-1 transition-colors text-gray-900 hover:text-black"
//                 aria-haspopup="true"
//                 aria-expanded={servicesOpen}
//               >
//                 <span className="relative">Services</span>
//                 <svg className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
//                   <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
//                 </svg>
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-left bg-black transition-transform duration-300 group-hover:scale-x-100"/>
//               </button>
//               {servicesOpen && (
//                 <div className="absolute left-0 mt-3 w-56 rounded-xl border border-gray-200 bg-white/95 text-gray-900 backdrop-blur p-2 shadow-lg"> 
//                   <a href="#design" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100">
//                     <span>Design</span>
//                     <span className="text-xs text-gray-600">UI/UX</span>
//                   </a>
//                   <a href="#development" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100">
//                     <span>Development</span>
//                     <span className="text-xs text-gray-600">Web Apps</span>
//                   </a>
//                   <a href="#marketing" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-100">
//                     <span>Marketing</span>
//                     <span className="text-xs text-gray-600">SEO</span>
//                   </a>
//                 </div>
//               )}
//             </div>

//             <a href="#contact" className="group relative transition-colors text-gray-900 hover:text-black">
//               <span className="relative">Contact</span>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-left bg-black transition-transform duration-300 group-hover:scale-x-100"/>
//             </a>
//           </nav>

//           <div className="hidden md:flex items-center gap-3">
//             <a href="#contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 transition-colors shadow-sm">
//               Get Started
//             </a>
//           </div>

//           <button
//             type="button"
//             className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 focus:outline-none"
//             aria-label="Toggle navigation"
//             aria-expanded={isOpen}
//             onClick={() => setIsOpen((v) => !v)}
//           >
//             <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!isOpen}>
//               <line x1="3" y1="6" x2="21" y2="6"></line>
//               <line x1="3" y1="12" x2="21" y2="12"></line>
//               <line x1="3" y1="18" x2="21" y2="18"></line>
//             </svg>
//             <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={isOpen}>
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className={`md:hidden border-t ${onHero ? 'border-white/20 bg-white/10' : 'border-gray-200/80 bg-white/90'} backdrop-blur text-black`}>
//           <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
//             <nav className="flex flex-col gap-2 text-sm">
//               <Link to="/" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
//               <a href="#about" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</a>
//               <details className="group rounded-md">
//                 <summary className="list-none rounded-md px-2 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
//                   <span>Services</span>
//                   <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
//                     <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
//                   </svg>
//                 </summary>
//                 <div className="mt-1 ml-3 flex flex-col gap-1">
//                   <a href="#design" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Design</a>
//                   <a href="#development" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Development</a>
//                   <a href="#marketing" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Marketing</a>
//                 </div>
//               </details>
//               <a href="#contact" className="rounded-md px-2 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
//               <a href="#contact" className="mt-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-black bg-white hover:bg-white/90">Get Started</a>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }


