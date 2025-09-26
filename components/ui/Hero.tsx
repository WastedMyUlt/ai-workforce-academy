import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
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
              <rect x="0" y="0" width="4" height="4" className="text-[#3137fd] opacity-10" fill="currentColor" />
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
              <rect x="0" y="0" width="4" height="4" className="text-[#00B8D4] opacity-10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9c)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-[#8F00FF]">Introducing</span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="gradient-text">Build Your AI<br />Workforce Today</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Transform your business with an AI workforce that works 24/7. Learn to build, deploy, and monetize AI agents in 30 days - without coding skills.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">Join our waitlist for early access.</p>
                <form action="#" className="mt-3 sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B8D4] focus:ring-offset-gray-100" 
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button 
                      type="submit" 
                      className="block w-full py-3 px-4 rounded-md shadow bg-[#3137fd] text-white font-medium hover:bg-[#2a30e3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3137fd] focus:ring-offset-gray-100"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about your data. Read our{' '}
                  <Link href="#" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </Link>
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
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B8D4]"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <div className="w-full aspect-w-16 aspect-h-9 bg-gray-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="h-20 w-20 text-[#3137fd]" fill="currentColor" viewBox="0 0 84 84">
                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                        <path d="M55 41.5L36 55V28L55 41.5Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                    <svg className="h-20 w-20 text-[#3137fd]" fill="none" viewBox="0 0 84 84">
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
    </div>
  )
}
