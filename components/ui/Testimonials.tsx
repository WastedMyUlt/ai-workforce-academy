export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#2F80ED] blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#9B51E0] blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-[#0A0F1C] blur-3xl opacity-10"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#9B51E0]/10 text-[#9B51E0] text-sm font-semibold uppercase tracking-wide rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2F80ED] mb-6">
            Hear from our customers
          </h2>
          <p className="text-xl text-gray-600">
            Discover how businesses are transforming with AI Workforce Academy
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover-card border border-transparent hover:border-[#2F80ED]/10 relative z-10">
            <div className="flex items-start mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2F80ED] mr-4">
                <span className="text-lg font-bold text-white">JD</span>
              </div>
            </div>
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              "The AI agents we built through AI Workforce Academy have completely transformed our content creation process. We're producing 3x more content with the same team size."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover-card border border-transparent hover:border-[#2F80ED]/10 relative z-10">
            <div className="flex items-start">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2F80ED]">
                <span className="text-lg font-bold text-white">SJ</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">E-commerce Business Owner</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "Our customer support AI agent handles 80% of routine inquiries, which has freed up my team to focus on complex customer issues and product development."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md hover-card border border-transparent hover:border-[#2F80ED]/10 relative z-10">
            <div className="flex items-start">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2F80ED]">
                <span className="text-lg font-bold text-white">MP</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Michael Patel</h3>
                <p className="text-sm text-gray-500">Consulting Firm Director</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-600">
                "We've turned our AI expertise into a new revenue stream by offering AI agent development to our clients. The Academy gave us the framework to make this happen quickly."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-[#2F80ED] hover:text-[#2967c7]">
            <span>View more success stories</span>
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
