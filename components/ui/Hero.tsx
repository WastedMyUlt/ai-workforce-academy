import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-[#0B3D91] xl:inline">Build Your AI Workforce</span>{' '}
                <span className="block text-[#00B8D4] xl:inline">Automate Without Hiring</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transform your business with an AI workforce that works 24/7. Learn to build, deploy, and monetize AI agents in 30 days - without coding skills.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00B8D4] hover:bg-[#0093A8] md:py-4 md:text-lg md:px-10">
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0B3D91] hover:bg-[#072557] md:py-4 md:text-lg md:px-10">
                    How It Works
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gray-300 sm:h-72 md:h-96 lg:w-full lg:h-full">
          {/* Replace with your hero image */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
            Hero Image Placeholder
          </div>
        </div>
      </div>
    </div>
  )
}
