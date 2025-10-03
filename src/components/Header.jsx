import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur ${isScrolled ? 'bg-white/80 shadow-sm' : 'bg-white/60'} transition-all`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-2 flex items-center justify-between rounded-full border border-gray-200/70 bg-white/70 px-4 py-2 sm:px-6 sm:py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Evoque home">
            <img src="/vite.svg" alt="Logo" className="h-7 w-7" />
            <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">Evoque</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <span className="relative">Home</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"/>
            </Link>
            <a href="#about" className="group relative text-gray-700 hover:text-gray-900 transition-colors">
              <span className="relative">About</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"/>
            </a>
            <a href="#services" className="group relative text-gray-700 hover:text-gray-900 transition-colors">
              <span className="relative">Services</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"/>
            </a>
            <a href="#contact" className="group relative text-gray-700 hover:text-gray-900 transition-colors">
              <span className="relative">Contact</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"/>
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-black transition-colors">Get Started</a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!isOpen}>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={isOpen}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200/80 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
              <a href="#about" className="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</a>
              <a href="#services" className="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#contact" className="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="#contact" className="mt-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-black">Get Started</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


