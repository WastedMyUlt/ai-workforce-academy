export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg">
        <div className="mx-auto w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Checkout canceled</h1>
        <p className="text-gray-600 mb-6">No problem — you can continue exploring our courses and subscribe anytime.</p>
        <a href="/pricing" className="btn-accent inline-block px-6 py-3">Back to Pricing</a>
      </div>
    </div>
  )
}
