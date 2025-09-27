import Link from 'next/link'
import EmailForm from './EmailForm'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-[#2F80ED] opacity-10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9c"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-[#9B51E0] opacity-10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9c)" />
        </svg>
      </div>

      <div className="relative w-full py-12 sm:py-16 lg:py-20">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-[#9B51E0]/10 text-[#9B51E0] text-sm font-semibold uppercase tracking-wide rounded-full">Introducing AI Workforce Academy</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
                  <span className="gradient-text">Build Your AI<br />Workforce Today</span>
                </h1>
              </div>
              <p className="mt-6 text-lg sm:text-xl lg:text-xl text-gray-600 max-w-2xl">
                Transform your business with an AI workforce that works 24/7. Learn to build, deploy, and monetize AI agents in 30 days - without coding skills.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="max-w-md">
                  <EmailForm 
                    source="hero"
                    placeholder="Enter your email"
                    buttonText="Get Started"
                    className=""
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Join 10,000+ businesses transforming with AI. No spam, unsubscribe anytime.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">No coding skills required</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">30-day money back guarantee</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">Deploy your first agent in 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <div className="w-full aspect-w-16 aspect-h-9 bg-gray-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="h-20 w-20 text-[#2F80ED]" fill="currentColor" viewBox="0 0 84 84">
                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                        <path d="M55 41.5L36 55V28L55 41.5Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                    <svg className="h-20 w-20 text-[#2F80ED]" fill="none" viewBox="0 0 84 84">
                      <circle opacity="0.5" cx="42" cy="42" r="42" fill="white" />
                      <path d="M55 41.5L36 55V28L55 41.5Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-1/3 flex items-end p-6">
                  <p className="text-white text-lg font-medium">See how it works</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
