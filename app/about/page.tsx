import Layout from '../../components/ui/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About AI Workforce Academy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                We're on a mission to democratize AI automation and help businesses build their own AI workforce without coding skills.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every business deserves access to AI automation, regardless of technical expertise. We believe that AI should be a tool that empowers entrepreneurs, not intimidates them.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                That's why we created AI Workforce Academy - to provide practical, step-by-step training that transforms complex AI concepts into actionable business solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2F80ED]">10,000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2F80ED]">50+</div>
                  <div className="text-gray-600">AI Agents Built</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#2F80ED] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Practical Training</h4>
                    <p className="text-gray-600">Step-by-step courses that teach real-world AI implementation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#9B51E0] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ready-to-Use Templates</h4>
                    <p className="text-gray-600">Professional workflows and templates you can implement immediately</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0A0F1C] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600">Community access and expert guidance throughout your journey</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AI Workforce Academy was born from a simple observation: businesses were struggling to implement AI not because the technology wasn't ready, but because it wasn't accessible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤔</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  Small businesses were being left behind in the AI revolution because existing solutions required coding skills or were too expensive.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Solution</h3>
                <p className="text-gray-600">
                  We created practical, no-code training that teaches real AI implementation using tools like Make.com, OpenAI, and existing business platforms.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Result</h3>
                <p className="text-gray-600">
                  Thousands of businesses now run AI agents that save time, reduce costs, and scale their operations automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide everything we do at AI Workforce Academy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Focus</h3>
                <p className="text-gray-600">
                  Every lesson teaches something you can implement immediately in your business.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No-Code First</h3>
                <p className="text-gray-600">
                  We believe powerful AI automation shouldn't require programming skills.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Results Driven</h3>
                <p className="text-gray-600">
                  We measure success by the real business results our students achieve.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">
                  Learning is better together. We foster a supportive community of AI implementers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0A0F1C] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Workforce?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who are already using AI to transform their businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="bg-[#2F80ED] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Browse Courses
              </a>
              <a
                href="/dashboard"
                className="bg-transparent border-2 border-[#2F80ED] text-[#2F80ED] px-8 py-3 rounded-lg font-medium hover:bg-[#2F80ED] hover:text-white transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
