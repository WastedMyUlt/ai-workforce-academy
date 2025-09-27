'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SignInModal from '../auth/SignInModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Check if user is signed in
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center py-2">
              <Image
                src="/cropped-logo.png"
                alt="AI Workforce Academy"
                width={240}
                height={60}
                priority
                className="h-auto w-auto max-h-16"
              />
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <div className="relative group">
                <button 
                  className="inline-flex items-center px-1 py-2 text-sm font-medium text-gray-600 hover:text-[#2F80ED] focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:ring-offset-2"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label="AI Agents menu"
                >
                  AI Agents
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 -ml-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden group-hover:block">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link href="/courses/lead-research-agent" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Lead Research Agent</p>
                          <p className="mt-1 text-sm text-gray-500">FREE course - Find 100+ prospects daily</p>
                        </div>
                      </Link>
                      <Link href="/ai-agents" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">All AI Agents</p>
                          <p className="mt-1 text-sm text-gray-500">Browse our complete agent library</p>
                        </div>
                      </Link>
                      <Link href="/courses" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Courses & Training</p>
                          <p className="mt-1 text-sm text-gray-500">Step-by-step tutorials and guides</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/courses" className="inline-flex items-center px-1 py-2 text-sm font-medium text-gray-600 hover:text-[#2F80ED]">
                Courses
              </Link>
              <Link href="/#how-it-works" className="inline-flex items-center px-1 py-2 text-sm font-medium text-gray-600 hover:text-[#2F80ED] scroll-smooth">
                How It Works
              </Link>
              <Link href="/#pricing" className="inline-flex items-center px-1 py-2 text-sm font-medium text-gray-600 hover:text-[#2F80ED] scroll-smooth">
                Pricing
              </Link>
              <div className="relative group">
                <button 
                  className="inline-flex items-center px-1 py-2 text-sm font-medium text-gray-600 hover:text-[#2F80ED] focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:ring-offset-2"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label="Resources menu"
                >
                  Resources
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 -ml-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden group-hover:block group-focus-within:block">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link 
                        href="/blog" 
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:ring-offset-2 cursor-pointer"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Blog</p>
                          <p className="mt-1 text-sm text-gray-500">Latest AI automation strategies</p>
                        </div>
                      </Link>
                      <Link href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Case Studies</p>
                          <p className="mt-1 text-sm text-gray-500">See real-world implementation results</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-[#2F80ED] mr-6">
              Dashboard
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {user.name}!</span>
                <button
                  onClick={() => {
                    localStorage.removeItem('user');
                    setUser(null);
                    window.location.href = '/';
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-[#2F80ED]"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setSignInModalOpen(true)}
                  className="text-sm font-medium text-[#2F80ED] hover:underline"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setSignInModalOpen(true)}
                  className="btn-primary ml-8"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2F80ED]"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/dashboard" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Dashboard
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              AI Agents
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              How It Works
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Pricing
            </Link>
            <Link href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Resources
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#0B3D91] hover:text-[#00B8D4]">
                  Sign In
                </Link>
              </div>
              <div className="ml-3">
                <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#00B8D4] hover:bg-[#0093A8]">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      <SignInModal 
        isOpen={signInModalOpen} 
        onClose={() => setSignInModalOpen(false)} 
      />
    </header>
  )
}
