import Layout from '../../components/ui/Layout';

export default function HelpCenter() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Find answers to common questions and get the help you need to succeed with AI automation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full px-6 py-4 text-gray-900 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <button className="absolute right-2 top-2 bg-[#2F80ED] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a href="#getting-started" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-600 text-sm">Learn the basics and set up your first AI agent</p>
            </a>
            
            <a href="#technical" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-sm">Troubleshoot issues and technical problems</p>
            </a>
            
            <a href="#billing" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing & Account</h3>
              <p className="text-gray-600 text-sm">Manage your subscription and account settings</p>
            </a>
            
            <a href="#courses" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Help</h3>
              <p className="text-gray-600 text-sm">Get help with specific courses and lessons</p>
            </a>
          </div>

          {/* Getting Started Section */}
          <div id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 Getting Started</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I create my first AI agent?</h3>
                  <p className="text-gray-600 mb-4">
                    Start with our free Lead Research Agent course. It's designed for beginners and walks you through the entire process step-by-step.
                  </p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                    <li>Sign up for a free account</li>
                    <li>Access the Lead Research Agent course</li>
                    <li>Follow the setup guide to connect Make.com and Apollo.io</li>
                    <li>Import the provided workflow template</li>
                    <li>Test your first automation</li>
                  </ol>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What tools do I need to get started?</h3>
                  <p className="text-gray-600 mb-4">
                    Our courses use popular no-code tools that integrate easily with existing business systems:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li><strong>Make.com</strong> - For workflow automation (Core plan: $9/month)</li>
                    <li><strong>OpenAI</strong> - For AI processing (Pay-per-use, ~$20/month typical)</li>
                    <li><strong>Apollo.io</strong> - For lead research (Starter: $49/month)</li>
                    <li><strong>Google Sheets</strong> - For data storage (Free)</li>
                    <li><strong>Slack</strong> - For notifications (Free tier available)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to set up an AI agent?</h3>
                  <p className="text-gray-600">
                    Most students complete their first AI agent setup within 2-4 hours. Our Lead Research Agent typically takes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                    <li>Account setup: 30 minutes</li>
                    <li>Workflow import: 15 minutes</li>
                    <li>Configuration: 1-2 hours</li>
                    <li>Testing and optimization: 30-60 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Support Section */}
          <div id="technical" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🔧 Technical Support</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">My Make.com workflow isn't running</h3>
                  <p className="text-gray-600 mb-4">Common troubleshooting steps:</p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                    <li>Check that all API connections are active (green status)</li>
                    <li>Verify your OpenAI API key has sufficient credits</li>
                    <li>Ensure Apollo.io account has available credits</li>
                    <li>Check the execution history for error messages</li>
                    <li>Test each module individually to isolate issues</li>
                  </ol>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API connection errors</h3>
                  <p className="text-gray-600 mb-4">If you're getting API connection errors:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Double-check your API keys are copied correctly (no extra spaces)</li>
                    <li>Verify your API keys have the necessary permissions</li>
                    <li>Check if your account has reached API rate limits</li>
                    <li>Try reconnecting the service in Make.com</li>
                    <li>Contact the service provider if issues persist</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow is running but not producing results</h3>
                  <p className="text-gray-600 mb-4">Check these common issues:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Verify your search criteria in Apollo.io aren't too restrictive</li>
                    <li>Check that your Google Sheets has the correct column headers</li>
                    <li>Ensure your AI prompts are clear and specific</li>
                    <li>Review the execution logs for partial failures</li>
                    <li>Test with broader search parameters initially</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Section */}
          <div id="billing" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">💳 Billing & Account</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in my subscription?</h3>
                  <p className="text-gray-600 mb-4">Your AI Workforce Academy subscription includes:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Access to all current and future AI agent courses</li>
                    <li>Downloadable workflow templates and resources</li>
                    <li>Progress tracking dashboard</li>
                    <li>Community access and support</li>
                    <li>Regular updates and new content</li>
                    <li>Email support with 24-hour response time</li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I cancel my subscription?</h3>
                  <p className="text-gray-600 mb-4">
                    You can cancel your subscription at any time from your account dashboard. You'll continue to have access until the end of your current billing period.
                  </p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                    <li>Log into your account dashboard</li>
                    <li>Go to "Account Settings"</li>
                    <li>Click "Manage Subscription"</li>
                    <li>Select "Cancel Subscription"</li>
                    <li>Confirm your cancellation</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund policy</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us within 30 days for a full refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Help Section */}
          <div id="courses" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Course Help</h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I track my progress?</h3>
                  <p className="text-gray-600 mb-4">
                    Your progress is automatically tracked as you complete lessons and tasks. You can view your progress in:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>The main dashboard - shows overall progress across all courses</li>
                    <li>Individual course dashboards - detailed progress for each course</li>
                    <li>Lesson pages - completion status for each lesson</li>
                    <li>Task checklists - individual task completion tracking</li>
                  </ul>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I download the course resources?</h3>
                  <p className="text-gray-600 mb-4">
                    Yes! All course resources are available for download, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Make.com workflow templates (JSON files)</li>
                    <li>Setup guides and documentation (PDF/Markdown)</li>
                    <li>ChatGPT prompt libraries</li>
                    <li>Google Sheets templates</li>
                    <li>Implementation checklists</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I get stuck on a lesson?</h3>
                  <p className="text-gray-600 mb-4">
                    We're here to help! Here are your support options:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Check the lesson comments for common questions</li>
                    <li>Join our Discord community for peer support</li>
                    <li>Email us at support@aiworkforceacademy.com</li>
                    <li>Schedule a 1-on-1 help session (Premium members)</li>
                    <li>Review the troubleshooting section in each course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#0A0F1C] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#2F80ED] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@aiworkforceacademy.com"
                className="bg-transparent border-2 border-[#2F80ED] text-[#2F80ED] px-8 py-3 rounded-lg font-medium hover:bg-[#2F80ED] hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
