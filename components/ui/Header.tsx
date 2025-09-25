'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-[#0B3D91]">AI Workforce Academy</span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#0B3D91]">
                  AI Agents
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden group-hover:block">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Content Creation Agent</p>
                          <p className="mt-1 text-sm text-gray-500">Automate your content production</p>
                        </div>
                      </Link>
                      <Link href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">Lead Research Agent</p>
                          <p className="mt-1 text-sm text-gray-500">Find and qualify prospects 24/7</p>
                        </div>
                      </Link>
                      <Link href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">All Agents</p>
                          <p className="mt-1 text-sm text-gray-500">Browse our complete agent library</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#0B3D91]">
                How It Works
              </Link>
              <Link href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#0B3D91]">
                Pricing
              </Link>
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#0B3D91]">
                  Resources
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 hidden group-hover:block">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
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
            <Link href="#" className="text-sm font-medium text-[#0B3D91] hover:underline">
              Sign In
            </Link>
            <Link href="#" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00B8D4] hover:bg-[#0093A8]">
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00B8D4]"
            >
              <span className="sr-only">Open main menu</span>
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
    </header>
  )
}
