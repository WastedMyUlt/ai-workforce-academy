export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">You're in! 🎉</h1>
        <p className="text-gray-600 mb-6">Your subscription was successful. We've sent a welcome email with next steps.</p>
        <a href="/courses" className="btn-primary inline-block px-6 py-3">Start Learning</a>
      </div>
    </div>
  )
}
